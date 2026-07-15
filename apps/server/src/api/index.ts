import express from 'express';

import { auth } from './auth';
import { contact } from './contact';
import { document } from './documents';
import { searchArticles } from './searchArticles';

const router = express.Router();

router.use(auth);
router.use(contact);
router.use(document);
router.use(searchArticles);

export default router;
