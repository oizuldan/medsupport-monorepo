import express from 'express';
import next from 'next';
import path from 'path';

import { registry } from './routes';

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const dir = path.resolve(__dirname, '../');
const nextApp = next({ dir, dev, conf: require('../next.config') });
const handleNext = registry.getRequestHandler(nextApp);

(async () => {
  await nextApp.prepare();
  express()
    .use(handleNext)
    // eslint-disable-next-line no-console
    .listen(port, () => console.log(`> Ready on http://localhost:${port}`));
})();
