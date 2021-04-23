import express, { Request, Response } from 'express';

import SearchService from '../services/SearchService';

const router = express.Router();

router.get('/api/search', async (req: Request, res: Response) => {
  const result = await SearchService.findArticles(req.body.query, req.body.page);
  if (result.success) {
    res.status(200).send(result.articles);
  } else {
    res.status(500).send(result.error);
  }
});

export { router as search };
