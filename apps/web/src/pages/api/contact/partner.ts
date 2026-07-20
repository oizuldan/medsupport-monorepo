import { sendPartnerInquiry } from 'core/services/contactMail';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ error: 'Method not allowed.' });
    return;
  }

  const result = await sendPartnerInquiry(req.body ?? {});
  res.status(result.status).json(result.body);
}
