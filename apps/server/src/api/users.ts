import express, { Request, Response } from 'express';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const router: express.Application = new (express.Router as any)();

router.get('/api/users', (_req: Request, res: Response) => {
  return res.send('user');
});

router.post('/api/users', (_req: Request, res: Response) => {
  return res.send('user has been created');
});

export { router as userRouter };
