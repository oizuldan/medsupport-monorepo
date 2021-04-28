import express from 'express';

import { auth } from './auth';
import { document } from './documents';
import { searchArticles } from './searchArticles';

const router = express.Router();

router.use(auth);
router.use(document);
router.use(searchArticles);

export default router;
