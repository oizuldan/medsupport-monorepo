import express, { Request, Response } from 'express';

import AuthService from '../services/AuthService';

const router = express.Router();

router.post('/auth/register', async (req: Request, res: Response) => {
  const result = await AuthService.register(
    req.body.email,
    req.body.username,
    req.body.password,
    req.body.firstName,
    req.body.lastName,
  );
  if (result.message) {
    res.setHeader('Set-Cookie', result.token);
    res.status(200).send(result);
  } else {
    res.status(403).send(result.error);
  }
});

router.post('/auth/login', async (req: Request, res: Response) => {
  const result = await AuthService.login(req.body.username, req.body.password);
  if (result.message) {
    res.setHeader('Set-Cookie', result.token);
    res.status(200).send(result);
  } else {
    res.status(401).send(result.error);
  }
});

router.post('/auth/restore-password', async (req: Request, res: Response) => {
  const result = await AuthService.resetPassword(req.body.email);
  if (result.message) {
    res.status(200).send(result.message);
  } else {
    res.status(403).send(result.error);
  }
});

export { router as auth };
