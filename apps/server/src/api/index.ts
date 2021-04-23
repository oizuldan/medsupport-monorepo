import express from 'express';

import { auth } from './auth';
import { document } from './documents';
import { search } from './search';

const router = express.Router();

router.use(auth);
router.use(document);
router.use(search);

export default router;
