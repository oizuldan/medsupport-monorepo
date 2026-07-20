import { Btn, CtaBand, Eyebrow, MskLayout } from 'components';
import { services } from 'core';
import { langFromCookie, useLang } from 'core/i18n';
import { NextComponentType } from 'next';
import { ApolloPageContext } from 'next-with-apollo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useMemo, useState } from 'react';

import { ArticlesPage as ArticlesPageGQL, ArticlesPageVariables } from './__generated__/ArticlesPage';
import { queryArticlesPage } from './graphql';
import { distinctCategories, mapArticles } from './libs/mapArticles';
import {
  DOCTOR_PLACEHOLDER_CARDS,
  PATIENT_PLACEHOLDER_CARDS,
  PLACEHOLDER_SUMMARY,
} from './libs/placeholderCards';
import { InitProps, Props } from './props';

type Track = 'patient' | 'doctor';

type DisplayCard = {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly href?: string;
  readonly minutes?: number;
  readonly langs?: ReadonlyArray<string>;
  readonly placeholder?: boolean;
};

const isNotNull = <T,>(value: T | null): value is T => value !== null;

/** Ported from reference/medsupportkz/public/site/knowledge-base.html:1041-1191. */
export const ArticlesPage: NextComponentType<ApolloPageContext, InitProps, Props> = (props: Props) => {
  const cms = props.data?.data;
  const { t } = useLang();
  // SSR-safe locale derived from the cookie-based prop from getInitialProps — must not
  // depend on useLang().lang, which is deliberately 'ru' on first paint (see useLang.ts).
  const pageLang = langFromCookie(props.lang);
  const router = useRouter();

  const [track, setTrack] = useState<Track>(router.query.track === 'doctor' ? 'doctor' : 'patient');
  const [filter, setFilter] = useState('all');
  const [query, setQuery] = useState('');

  const switchTrack = (next: Track) => {
    setTrack(next);
    setFilter('all');
    setQuery('');
  };

  const chrome = services.mskChrome(cms);
  const headerLinks = chrome.links?.filter(isNotNull).map((link) => ({
    title: link.title ?? undefined,
    link: link.link ?? undefined,
  }));
  const footerSections = chrome.footerSections?.filter(isNotNull).map((section) => ({
    title: section.title,
    links: section.links?.filter(isNotNull).map((link) => ({
      title: link.title ?? undefined,
      link: link.link ?? undefined,
    })),
  }));

  // Real CMS data: queryArticlesPage only returns
  // articleSections: [{ id, title, articles: [{ id, title }] }] — no track/category slug/
  // summary/read-time/languages field. See libs/mapArticles.ts.
  const realCards = useMemo(() => mapArticles(cms?.articleSections), [cms?.articleSections]);

  const patientCards: DisplayCard[] = useMemo(() => {
    if (realCards.length > 0) {
      return realCards.map((card) => ({
        id: card.id,
        title: card.title,
        category: card.category,
        href: card.href,
      }));
    }
    // Fallback so the page is never empty: static patient cards ported from
    // knowledge-base.html:1092-1127.
    return PATIENT_PLACEHOLDER_CARDS.map((card) => ({
      id: card.id,
      title: t(card.titleKey),
      category: t(card.catKey),
      minutes: card.minutes,
      langs: card.langs,
      placeholder: true,
    }));
  }, [realCards, t]);

  // The CMS has no doctor/track data at all — this tab is an explicit design placeholder
  // ported from knowledge-base.html:1130-1165 until a CMS schema change (Phase 2) adds real
  // per-track article content.
  const doctorCards: DisplayCard[] = useMemo(
    () =>
      DOCTOR_PLACEHOLDER_CARDS.map((card) => ({
        id: card.id,
        title: t(card.titleKey),
        category: t(card.catKey),
        minutes: card.minutes,
        langs: card.langs,
        placeholder: true,
      })),
    [t],
  );

  const activeCards = track === 'doctor' ? doctorCards : patientCards;
  const categories = useMemo(() => distinctCategories(activeCards), [activeCards]);
  const q = query.trim().toLowerCase();
  const visibleCards = activeCards.filter(
    (card) => (filter === 'all' || card.category === filter) && (!q || card.title.toLowerCase().includes(q)),
  );

  const kbMetaDescription =
    'База знаний Medsupportkz: проверенные материалы о вакцинации, первой помощи и здоровье, ' +
    'а также разбор медицинских мифов — на основе международных клинических данных.';

  return (
    <>
      <Head>
        <title>Medsupportkz — База знаний</title>
        <meta
          name="keywords"
          content="база знаний, здоровье, вакцинация, первая помощь, медицинские мифы, доказательная медицина"
        />
        <meta name="description" content={kbMetaDescription} />
        <meta property="og:title" content="Medsupportkz — База знаний" />
        <meta property="og:description" content={kbMetaDescription} />
        <meta property="og:image" content="https://medsupport.kz/static/images/logoBig.png" />
        <meta property="og:locale" content={pageLang === 'kz' ? 'kz_KZ' : 'ru_RU'} />
        <meta property="og:locale:alternate" content={pageLang === 'kz' ? 'ru_RU' : 'kz_KZ'} />
        <meta property="og:site_name" content="Medsupportkz" />
        <meta property="og:type" content="article" />
        <meta property="og:article:section" content="medicine" />
      </Head>
      <MskLayout links={headerLinks} footerSections={footerSections}>
        <div className="container">
          <nav className="crumb" aria-label="Хлебные крошки">
            <a href="/">{t('kbp.crumb.home')}</a>
            <span className="sep">/</span>
            <span>{t('kbp.crumb.this')}</span>
          </nav>
        </div>

        <section className="page-hero" data-screen-label="KB hero">
          <div className="container">
            <Eyebrow variant="rose" className="rise">
              {t('kbp.eyebrow')}
            </Eyebrow>
            <h1 className="h-xl rise" data-delay="1">
              {t('kbp.h1')}
            </h1>
            <p className="lead rise" data-delay="2">
              {t('kbp.lead')}
            </p>
          </div>
        </section>

        <section className="section--tight" style={{ paddingTop: 8 }}>
          <div className="container">
            <div className="tabs" role="tablist" aria-label="Трек">
              <button
                type="button"
                data-track="patient"
                className={track === 'patient' ? 'is-active' : ''}
                role="tab"
                aria-selected={track === 'patient'}
                onClick={() => switchTrack('patient')}
              >
                {t('kbp.tab.patient')}
              </button>
              <button
                type="button"
                data-track="doctor"
                className={track === 'doctor' ? 'is-active' : ''}
                role="tab"
                aria-selected={track === 'doctor'}
                onClick={() => switchTrack('doctor')}
              >
                {t('kbp.tab.doctor')}
              </button>
            </div>

            <div className="searchbar">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                type="search"
                aria-label="Поиск"
                placeholder={track === 'doctor' ? t('kbp.search.doctor') : t('kbp.search.patient')}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            {/* Filter chips are derived dynamically from the distinct categories present in the
                active track's cards — the real CMS has no fixed vax/aid/myth taxonomy. */}
            <div className="filters" role="group" aria-label="Фильтр тем">
              <button
                type="button"
                className={`chip${filter === 'all' ? ' is-active' : ''}`}
                onClick={() => setFilter('all')}
              >
                {t('kbp.f.all')}
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`chip${filter === category ? ' is-active' : ''}`}
                  onClick={() => setFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="articles" style={{ marginTop: 32 }}>
              {visibleCards.map((card) =>
                card.placeholder ? (
                  <article
                    key={card.id}
                    className={`acard${track === 'doctor' ? ' acard--doctor' : ''}`}
                    data-track={track}
                    data-cat={card.category}
                  >
                    <div className="acard__top">
                      <span className="acard__cat">{card.category}</span>
                      {card.minutes !== undefined && (
                        <span className="acard__time">
                          {card.minutes} {t('kbp.time')}
                        </span>
                      )}
                    </div>
                    <h3>{card.title}</h3>
                    <p>{PLACEHOLDER_SUMMARY}</p>
                    <div className="acard__langs">
                      {(card.langs ?? []).map((l) => (
                        <span key={l}>{l}</span>
                      ))}
                    </div>
                  </article>
                ) : (
                  <a key={card.id} className="acard" href={card.href} data-track={track} data-cat={card.category}>
                    <div className="acard__top">
                      <span className="acard__cat">{card.category}</span>
                    </div>
                    <h3>{card.title}</h3>
                    <div className="acard__langs">
                      <span>{pageLang === 'kz' ? 'ҚАЗ' : 'РУС'}</span>
                    </div>
                  </a>
                ),
              )}
            </div>

            <p className={`no-results${visibleCards.length === 0 ? ' is-show' : ''}`}>{t('kbp.none')}</p>
          </div>
        </section>

        {/* TRACK CTA BANDS */}
        <section className="section section--tight">
          <div className="container">
            <CtaBand
              className={track === 'patient' ? '' : 'is-hidden'}
              title={t('kbp.patient.cta.h')}
              text={t('kbp.patient.cta.p')}
              button={<Btn lg>{t('kbp.patient.cta.b')}</Btn>}
            />
            <CtaBand
              variant="teal"
              className={track === 'doctor' ? '' : 'is-hidden'}
              title={t('kbp.doctor.cta.h')}
              text={t('kbp.doctor.cta.p')}
              button={
                <Btn variant="teal" lg href="/partner#specialists">
                  {t('kbp.doctor.cta.b')}
                </Btn>
              }
            />
          </div>
        </section>
      </MskLayout>
    </>
  );
};

ArticlesPage.getInitialProps = async (ctx) => {
  const lang = ctx.req?.headers?.cookie?.match(/(kk-Cyrl-KZ|ru-RU)/)?.[0] || 'ru-RU';

  const data = await ctx.apolloClient.query<ArticlesPageGQL, ArticlesPageVariables>({
    query: queryArticlesPage,
    variables: { locale: lang },
  });
  return { data, lang };
};
