import express from 'express';

import { auth } from './auth';
import { document } from './documents';

const router = express.Router();

router.use(auth);
router.use(document);

export default router;
