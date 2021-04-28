import axios from 'axios';

import { Article } from '../types/article';

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  findArticles: async (query: string, page = 1) => {
    try {
      const startIndex = 1 + 10 * (page - 1);

      const res = await axios.get(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_SEARCH_API_KEY}&cx=${process.env.GOOGLE_SEARCH_ENGINE_ID}&q=${query}&start=${startIndex}`,
      );
      const {
        items,
        searchInformation: { totalResults },
      } = res.data;
      const articles = items
        ? items.map((item: Article) => ({ title: item.title, link: item.link }))
        : [];
      return { success: true, code: res.status, articles: articles, total: totalResults };
    } catch (e) {
      return { error: 'Cannot find articles' };
    }
  },
};
