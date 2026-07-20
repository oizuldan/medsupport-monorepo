import { Btn, SectionHead } from 'components/molecules/msk';
import { useLang } from 'core/i18n';
import React, { FC } from 'react';

export interface DataStoryCard {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly link: string;
  readonly buttonText: string;
}

interface Props {
  readonly cards?: ReadonlyArray<DataStoryCard | null> | null;
}

/** CMS links are stored absolute; keep same-site ones internal so they don't leave the app. */
const toInternalHref = (link: string) => link.replace(/^https?:\/\/(www\.)?medsupport\.kz/, '') || '/';

/**
 * The CMS `interactiveCard`s are editorial data investigations, not projects — they
 * used to be appended to the Portfolio bento, where they rendered without a category
 * and pushed "Читать" through `.pcard__metric` at statistic size. They get their own
 * section using the knowledge-base article card instead.
 */
export const DataStories: FC<Props> = ({ cards }) => {
  const { t } = useLang();
  const items = (cards ?? []).filter((card): card is DataStoryCard => Boolean(card));

  if (!items.length) return null;

  return (
    <section className="section" id="data-stories" data-screen-label="Data stories">
      <div className="container">
        <SectionHead eyebrow={t('ds.eyebrow')} title={t('ds.h2')} lead={t('ds.lead')} />

        <div className="articles">
          {items.map((card) => (
            <a key={card.id} className="acard reveal" href={toInternalHref(card.link)}>
              <div className="acard__top">
                <span className="acard__cat">{t('ds.eyebrow')}</span>
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <div className="acard__langs">
                <span>RU</span>
                <span>KZ</span>
              </div>
            </a>
          ))}
        </div>

        <div className="reveal" style={{ marginTop: 40 }}>
          <Btn href="/knowledge-base" variant="ghost" withArrow>
            {t('ds.cta')}
          </Btn>
        </div>
      </div>
    </section>
  );
};
