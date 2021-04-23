import { Article } from '../types/article';

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  findArticles: async (query: string, page = 1) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const fetch = require('node-fetch');
      const startIndex = 1 + 10 * (page - 1);

      const res = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_SEARCH_API_KEY}&cx=${process.env.GOOGLE_SEARCH_ENGINE_ID}&q=${query}&start=${startIndex}`,
      );
      const { items } = await res.json();
      const articles = items
        ? items.map((item: Article) => ({ title: item.title, link: item.link }))
        : [];
      return { success: 'Articles found', articles: articles };
    } catch (e) {
      return { error: 'Cannot find articles' };
    }
  },
};
