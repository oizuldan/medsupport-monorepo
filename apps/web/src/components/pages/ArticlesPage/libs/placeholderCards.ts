/**
 * Static placeholder content. The real CMS (queryArticlesPage) has no track (patient/doctor),
 * category slug, summary, read-time, or languages field — see mapArticles.ts. These specs exist
 * only to:
 *  1) fill the patient tab if the CMS ever returns zero articles (never leave the page empty), and
 *  2) render the doctor tab, which has no real data source at all until a CMS schema change
 *     (Phase 2) adds track content.
 * Ported verbatim from reference/medsupportkz/public/site/knowledge-base.html:1092-1127 (patient)
 * and :1130-1165 (doctor). Titles/categories are resolved via t() at render time; catKey selects
 * one of the existing `kbp.f.*` dictionary entries.
 */
export interface PlaceholderCardSpec {
  readonly id: string;
  readonly catKey: string;
  readonly titleKey: string;
  readonly minutes: number;
  readonly langs: ReadonlyArray<string>;
}

export const PATIENT_PLACEHOLDER_CARDS: ReadonlyArray<PlaceholderCardSpec> = [
  { id: 'p1', catKey: 'kbp.f.vax', titleKey: 'art.p1.h', minutes: 4, langs: ['ҚАЗ', 'РУС', 'ENG'] },
  { id: 'p2', catKey: 'kbp.f.aid', titleKey: 'art.p2.h', minutes: 6, langs: ['РУС', 'ENG'] },
  { id: 'p3', catKey: 'kbp.f.myth', titleKey: 'art.p3.h', minutes: 5, langs: ['ҚАЗ', 'РУС'] },
  { id: 'p4', catKey: 'kbp.f.system', titleKey: 'art.p4.h', minutes: 7, langs: ['РУС'] },
  { id: 'p5', catKey: 'kbp.f.vax', titleKey: 'art.p5.h', minutes: 5, langs: ['ҚАЗ', 'РУС', 'ENG'] },
  { id: 'p6', catKey: 'kbp.f.aid', titleKey: 'art.p6.h', minutes: 5, langs: ['РУС', 'ENG'] },
];

export const DOCTOR_PLACEHOLDER_CARDS: ReadonlyArray<PlaceholderCardSpec> = [
  { id: 'd1', catKey: 'kbp.f.guide', titleKey: 'art.d1.h', minutes: 9, langs: ['РУС', 'ENG'] },
  { id: 'd2', catKey: 'kbp.f.evidence', titleKey: 'art.d2.h', minutes: 8, langs: ['ENG'] },
  { id: 'd3', catKey: 'kbp.f.comm', titleKey: 'art.d3.h', minutes: 6, langs: ['ҚАЗ', 'РУС'] },
  { id: 'd4', catKey: 'kbp.f.lit', titleKey: 'art.d4.h', minutes: 10, langs: ['ENG'] },
  { id: 'd5', catKey: 'kbp.f.guide', titleKey: 'art.d5.h', minutes: 12, langs: ['РУС', 'ENG'] },
  { id: 'd6', catKey: 'kbp.f.evidence', titleKey: 'art.d6.h', minutes: 7, langs: ['РУС', 'ENG'] },
];

export const PLACEHOLDER_SUMMARY = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.';
