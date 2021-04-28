import express, { Request, Response } from 'express';

import SearchService from '../services/SearchService';

const router = express.Router();

router.get('/api/search', async (req: Request, res: Response) => {
  const result = await SearchService.findArticles(
    req.query.query as string,
    Number(req.query.page) as number,
  );
  if (result.success) {
    res.status(result.code).send({ articles: result.articles, total: result.total });
  } else {
    res.status(500).send(result.error);
  }
});

export { router as searchArticles };
