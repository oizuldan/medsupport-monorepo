import express, { Request, Response } from 'express';

import ContactService from '../services/ContactService';

const router = express.Router();

router.post('/contact/partner', async (req: Request, res: Response) => {
  const result = await ContactService.partnerInquiry(req.body);
  if (result.message) {
    res.status(200).send(result.message);
  } else {
    res.status(400).send(result.error);
  }
});

router.post('/contact/message', async (req: Request, res: Response) => {
  const result = await ContactService.contactMessage(req.body);
  if (result.message) {
    res.status(200).send(result.message);
  } else {
    res.status(400).send(result.error);
  }
});

export { router as contact };
