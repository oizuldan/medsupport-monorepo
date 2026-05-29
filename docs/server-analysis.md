# Server Analysis (`apps/server`)

> **TL;DR – the server is not called by any live production route.**
> All seven routes in `apps/web/src/routes.ts` that would reach the server are
> commented out.  You can safely stop it on the VPS to reclaim ≈ 300 MB of RAM.

---

## 1. What the server does

`apps/server` is a Node.js / Express application (port 8000) with five REST
endpoints and one Socket.IO namespace.

| # | Method | Path | Feature | Service |
|---|--------|------|---------|---------|
| 1 | `POST` | `/auth/register` | Create a new user account (email + username + password) | `AuthService` → MongoDB |
| 2 | `POST` | `/auth/login` | Log in with email or username + password, receive a JWT cookie | `AuthService` → MongoDB |
| 3 | `POST` | `/auth/restore-password` | Generate a random temporary password, hash it, save to MongoDB, email it via Gmail | `AuthService` → MongoDB + Gmail |
| 4 | `POST` | `/api/create-document` | Accept a file upload (≤ 20 MB), push it to Google Drive, then create a `document` record in Strapi CMS | `DocumentService` → Google Drive + Strapi CMS |
| 5 | `GET` | `/api/search` | Proxy a search query to Google Custom Search API, return titles + links | `SearchService` → Google CSE |
| 6 | Socket.IO | `newChatMessage` event | Broadcast a chat message to all sockets in a room (in-memory, no persistence) | server.ts |

### Data flows in detail

#### Auth (register / login / restore-password)
```
Browser → POST /auth/* → Express → bcrypt/JWT → MongoDB (cluster-main.4cf5c.gcp.mongodb.net)
                                                   ↓
                          Set-Cookie: Authorization=<JWT>; HttpOnly
```
User records are stored in a **separate MongoDB cluster** that is completely
independent of the Strapi database.

#### Document upload
```
Browser → POST /api/create-document (multipart) → Express / Multer
  → Google Drive API (OAuth2 service account from client_secret.json)
  → Strapi POST /documents  (authenticated with hardcoded admin password — see §4)
```

#### Article search
```
Browser → GET /api/search?query=…&page=…
  → Google Custom Search API (API key + engine ID from .env)
  → JSON { articles: [{title, link}], total }
```

#### Real-time chat (Socket.IO)
```
Browser → ws://127.0.0.1:8000  ← hardcoded; see §4
  join room(roomId)
  emit/receive "newChatMessage" { body, user }
```
Messages are **not persisted** anywhere; they disappear on page reload.

---

## 2. Which web pages use the server

| Page component | Route | Server endpoints used | Route status |
|---|---|---|---|
| `LoginPage` | `/login` | `POST /auth/login` | ❌ **commented out** |
| `SignUpPage` | `/signup` | `POST /auth/register` | ❌ **commented out** |
| `RestorePasswordPage` | `/restore-password` | `POST /auth/restore-password` | ❌ **commented out** |
| `DocumentUploadPage` | `/document-upload` | `POST /api/create-document` | ❌ **commented out** |
| `SearchArticlesPage` | `/search-articles` | `GET /api/search` | ❌ **commented out** |
| `DocumentsPage` | `/documents` | (reads Strapi only) | ❌ **commented out** |
| `LiveStreamPage` | `/live-stream` | Socket.IO | ❌ **commented out** |

Source: `apps/web/src/routes.ts` — all seven lines are commented out.

**Active routes** (all served by Strapi CMS / GraphQL, zero calls to the server):

| Route | Page |
|-------|------|
| `/` | HomePage |
| `/articles` | ArticlesPage |
| `/article/:id` | ArticlePage |
| `/vxn` | VaccinePage |
| `/questions` | QuestionsPage |
| `/question/:categoryId/:id?` | QuestionPage |
| `/resistance` | ResistancePage |
| `/about` | AboutUsPage |

---

## 3. Can Strapi replace the server?

| Server feature | Strapi built-in? | Notes |
|---|---|---|
| User registration / login | ✅ Yes | `strapi-plugin-users-permissions` provides `/auth/local/register` and `/auth/local` out of the box |
| Password reset by email | ✅ Yes | Strapi has a native "forgot password" flow |
| JWT issuance | ✅ Yes | Strapi issues its own JWT on login |
| Store document metadata | ✅ Yes | Already done via the existing `document` content type |
| Upload file to Google Drive | ❌ No | Strapi's upload plugin writes to local disk or S3; Google Drive is not a supported provider |
| Google Custom Search proxy | ❌ No | Strapi has no search-proxy capability |
| Real-time chat (Socket.IO) | ❌ No | Strapi has no WebSocket/Socket.IO support |

---

## 4. Bugs and security issues in the unused pages

These exist in the source code even though the pages are unreachable.

### 4.1 Hardcoded Strapi admin credentials in source code 🔴 CRITICAL

**File:** `apps/server/src/services/DocumentService.ts`, lines 22–25

```ts
const { data: { jwt } } = await axios.post('http://localhost:1337/auth/local', {
  identifier: '<REDACTED – admin username>',
  password: '<REDACTED – admin password>',
});
```

A real admin username and password are committed in plaintext.  Anyone with read
access to the repository can authenticate to the Strapi admin panel with these
credentials.

**Fix:** load credentials from environment variables.

### 4.2 Socket.IO hardcoded to `http://127.0.0.1:8000` 🔴 BROKEN

**File:** `apps/web/src/components/organisms/Chat/hooks/useChat.ts`, line 8

```ts
const SOCKET_SERVER_URL = 'http://127.0.0.1:8000';
```

`127.0.0.1` is the browser's own loopback address, not the server's.  A client
visiting `https://medsupport.kz` will attempt to connect to a socket server on
their own machine.  This would never work in production.

### 4.3 Mixed hardcoded URLs in the auth/search pages 🟡 INCONSISTENT

| Page | URL used | Problem |
|---|---|---|
| `LoginPage` | `https://medsupport.kz/api/auth/login` | hardcoded production URL; breaks in dev |
| `SignUpPage` | `http://localhost:3000/proxy/auth/register` | dev-only proxy; breaks in production |
| `RestorePasswordPage` | `http://localhost:3000/proxy/auth/restore-password` | dev-only proxy; breaks in production |
| `SearchArticlesPage` | `http://localhost:3000/proxy/api/search` | dev-only proxy; breaks in production |

None of these pages use the `API_BASE_URL` environment variable, so they are
broken in at least one environment regardless of deployment.

---

## 5. Decision guide

### Option A – Stop the server (recommended for now)

The server is not reachable from any live route.  Stopping it:

- Frees ≈ 300 MB of RAM on the 2 GB VPS (reduces 502 errors for CMS and web)
- Eliminates one process that can crash and require a restart
- Has zero impact on the live website

In `ecosystem.config.js`, comment out or remove the `server` entry:

```js
// {
//   name: 'server',
//   ...
// },
```

The code stays in the repository so it can be re-enabled later.

### Option B – Re-enable the server with Strapi auth instead

Replace auth, password-reset, and document-metadata with Strapi's native
endpoints.  Keep the server only for Google Drive uploads and the Google Custom
Search proxy.  This reduces the server from 6 concerns to 2 and eliminates the
separate MongoDB cluster.

### Option C – Delete the server

If the features (live stream chat, document upload, external search, custom auth)
are not planned for the future, the entire `apps/server` directory can be
removed.  This also removes the dependency on a separate MongoDB instance.

---

## 6. Recommended immediate actions (regardless of option chosen)

1. **Rotate the leaked Strapi admin password** – the credentials in
   `DocumentService.ts` are committed to git history.  Change the admin password
   in the Strapi admin panel immediately.
2. **Remove or replace the hardcoded credentials** in `DocumentService.ts` with
   environment variables (done in this PR for the source code; the password still
   needs to be rotated in Strapi).
3. **Stop the server process on the VPS** to free RAM until you decide on
   Option A / B / C above.
