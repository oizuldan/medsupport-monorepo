import { Resend } from 'resend';

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Where form submissions are delivered. */
const inboxTo = (): string => process.env.CONTACT_TO || 'b.kaukenova@gmail.com';

/**
 * Resend only accepts a `from` on a domain verified in the account. Until
 * medsupport.kz is verified, `onboarding@resend.dev` works but can only deliver
 * to the address that owns the Resend account.
 */
const mailFrom = (): string => process.env.CONTACT_FROM || 'onboarding@resend.dev';

/** Escape user-supplied text before embedding it in the notification HTML. */
const esc = (value: unknown): string =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const row = (label: string, value: unknown): string =>
  `<tr><td style="padding:4px 12px 4px 0;color:#6b7280;vertical-align:top">${esc(
    label,
  )}</td><td style="padding:4px 0">${esc(value) || '—'}</td></tr>`;

const table = (heading: string, rows: string): string =>
  `<div><h3>${esc(heading)}</h3><table style="border-collapse:collapse;font:14px/1.5 sans-serif">${rows}</table></div>`;

export interface SendResult {
  readonly ok: boolean;
  readonly status: number;
  readonly body: { message: string } | { error: string };
}

const ok = (message: string): SendResult => ({ ok: true, status: 200, body: { message } });
const fail = (status: number, error: string): SendResult => ({ ok: false, status, body: { error } });

async function deliver(subject: string, html: string, replyTo: string): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Misconfiguration, not user error — log it so it is diagnosable from container logs.
    console.error('[contact] RESEND_API_KEY is not set; submission was not delivered');
    return fail(500, 'Server error.');
  }

  try {
    const { error } = await new Resend(apiKey).emails.send({
      from: mailFrom(),
      to: inboxTo(),
      replyTo,
      subject,
      html,
    });

    if (error) {
      console.error('[contact] Resend rejected the message:', error);
      return fail(502, 'Server error.');
    }
    return ok('Sent.');
  } catch (e) {
    console.error('[contact] Unexpected failure sending message:', e);
    return fail(500, 'Server error.');
  }
}

export interface PartnerPayload {
  org?: string;
  type?: string;
  interest?: string;
  contact?: string;
  email?: string;
  proposal?: string;
  hear?: string;
  website?: string; // honeypot
}

export interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
  company?: string; // honeypot
}

export async function sendPartnerInquiry(payload: PartnerPayload): Promise<SendResult> {
  // Honeypot filled — accept without notifying anyone, so the bot sees success.
  if (payload.website) return ok('Received.');

  const org = (payload.org ?? '').trim();
  const contact = (payload.contact ?? '').trim();
  const email = (payload.email ?? '').trim();
  const proposal = (payload.proposal ?? '').trim();

  if (!org || !payload.type || !payload.interest || !contact || !EMAIL_RE.test(email) || !proposal) {
    return fail(400, 'Invalid submission.');
  }

  return deliver(
    `New partner inquiry — ${org}`,
    table(
      'New partner inquiry',
      [
        row('Organization', org),
        row('Type', payload.type),
        row('Interest', payload.interest),
        row('Contact person', contact),
        row('Email', email),
        row('Heard about us', payload.hear),
        row('Proposal', proposal),
      ].join(''),
    ),
    email,
  );
}

export async function sendContactMessage(payload: ContactPayload): Promise<SendResult> {
  if (payload.company) return ok('Received.');

  const name = (payload.name ?? '').trim();
  const email = (payload.email ?? '').trim();
  const message = (payload.message ?? '').trim();

  if (!name || !EMAIL_RE.test(email) || !message) {
    return fail(400, 'Invalid submission.');
  }

  return deliver(
    `New contact message — ${name}`,
    table(
      'New contact message',
      [row('Name', name), row('Email', email), row('Message', message)].join(''),
    ),
    email,
  );
}
