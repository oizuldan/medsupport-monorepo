import nodemailer from 'nodemailer';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Escape user-supplied text before embedding it in the notification HTML. */
const esc = (value: unknown): string =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const transporter = (): nodemailer.Transporter =>
  nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

/** Where inquiries are delivered; falls back to the sending account. */
const inboxTo = (): string | undefined => process.env.CONTACT_TO || process.env.GMAIL_USER;

const row = (label: string, value: unknown): string =>
  `<tr><td style="padding:4px 12px 4px 0;color:#6b7280;vertical-align:top">${esc(
    label,
  )}</td><td style="padding:4px 0">${esc(value) || '—'}</td></tr>`;

interface PartnerPayload {
  org?: string;
  type?: string;
  interest?: string;
  contact?: string;
  email?: string;
  proposal?: string;
  hear?: string;
  website?: string; // honeypot
}

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
  company?: string; // honeypot
}

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  partnerInquiry: async (payload: PartnerPayload) => {
    // Honeypot filled — silently accept without notifying anyone.
    if (payload.website) return { message: 'Received.' };

    const org = (payload.org ?? '').trim();
    const contact = (payload.contact ?? '').trim();
    const email = (payload.email ?? '').trim();
    const proposal = (payload.proposal ?? '').trim();
    if (!org || !payload.type || !payload.interest || !contact || !EMAIL_RE.test(email) || !proposal) {
      return { error: 'Invalid submission.' };
    }

    try {
      const to = inboxTo();
      if (!to) return { error: 'Server error.' };
      await transporter().sendMail({
        from: process.env.GMAIL_USER,
        to,
        replyTo: email,
        subject: `New partner inquiry — ${org}`,
        html: `<div><h3>New partner inquiry</h3><table style="border-collapse:collapse;font:14px/1.5 sans-serif">
          ${row('Organization', org)}
          ${row('Type', payload.type)}
          ${row('Interest', payload.interest)}
          ${row('Contact person', contact)}
          ${row('Email', email)}
          ${row('Heard about us', payload.hear)}
          ${row('Proposal', proposal)}
        </table></div>`,
      });
      return { message: 'Inquiry sent.' };
    } catch (e) {
      return { error: 'Server error.' };
    }
  },

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  contactMessage: async (payload: ContactPayload) => {
    // Honeypot filled — silently accept without notifying anyone.
    if (payload.company) return { message: 'Received.' };

    const name = (payload.name ?? '').trim();
    const email = (payload.email ?? '').trim();
    const message = (payload.message ?? '').trim();
    if (!name || !EMAIL_RE.test(email) || !message) {
      return { error: 'Invalid submission.' };
    }

    try {
      const to = inboxTo();
      if (!to) return { error: 'Server error.' };
      await transporter().sendMail({
        from: process.env.GMAIL_USER,
        to,
        replyTo: email,
        subject: `New contact message — ${name}`,
        html: `<div><h3>New contact message</h3><table style="border-collapse:collapse;font:14px/1.5 sans-serif">
          ${row('Name', name)}
          ${row('Email', email)}
          ${row('Message', message)}
        </table></div>`,
      });
      return { message: 'Message sent.' };
    } catch (e) {
      return { error: 'Server error.' };
    }
  },
};
