import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/api/users', (_req: Request, res: Response) => res.send('user'));

router.post('/api/users', (_req: Request, res: Response) => res.send('user has been created'));

export { router as userRouter };
