import { ArticlesPage } from '../__generated__/ArticlesPage';

/**
 * Real CMS shape (queryArticlesPage): articleSections: [{ id, title, articles: [{ id, title }] }].
 * There is no track (patient/doctor), category slug, summary, read-time, or languages field —
 * do not invent any of those. `category` below is simply the parent section's title.
 */
export interface ACard {
  readonly id: string;
  readonly title: string;
  readonly href: string;
  readonly category: string;
}

type Sections = ArticlesPage['articleSections'];

export function mapArticles(sections: Sections): ACard[] {
  if (!Array.isArray(sections)) return [];

  const cards: ACard[] = [];
  sections.forEach((section) => {
    if (!section) return;
    const category = section.title ?? '';
    const articles = section.articles;
    if (!Array.isArray(articles)) return;
    articles.forEach((article) => {
      if (!article || !article.id) return;
      cards.push({
        id: article.id,
        title: article.title ?? '',
        href: `/article/${article.id}`,
        category,
      });
    });
  });
  return cards;
}

/** Distinct, order-preserving list of categories present in a card set. */
export function distinctCategories(cards: ReadonlyArray<{ readonly category: string }>): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  cards.forEach((card) => {
    if (card.category && !seen.has(card.category)) {
      seen.add(card.category);
      out.push(card.category);
    }
  });
  return out;
}
