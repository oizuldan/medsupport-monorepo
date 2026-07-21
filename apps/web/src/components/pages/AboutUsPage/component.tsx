import { Btn, CtaBand, MskLayout, MskMarkdown, PageHero, SectionHead } from 'components';
import { services } from 'core';
import { langFromCookie, useLang } from 'core/i18n';
import { NextComponentType } from 'next';
import { ApolloPageContext } from 'next-with-apollo';
import Head from 'next/head';
import React from 'react';

import { AboutUsPageData, AboutUsPageDataVariables } from './__generated__/AboutUsPageData';
import { queryAboutUsPageData } from './graphql';
import {
  findBlock,
  parseAbout,
  parseNames,
  parseProjects,
  parseStats,
  splitBullets,
} from './libs/parseAbout';
import { Volunteers } from './libs/Volunteers';
import { InitProps, Props } from './props';

const RESULTS = /результат/i;
const PROJECTS = /что мы сделали/i;
const VOLUNTEERS = /спасибо наш/i;
const TEAM = /команда и управление/i;
const REPORTING = /отчетност/i;
const CONTACT = /организационным вопрос/i;
const MISSION = /^наша миссия/i;
const ORIGIN = /как появился/i;

const isNotNull = <T,>(value: T | null): value is T => value !== null;

export const AboutUsPage: NextComponentType<ApolloPageContext, InitProps, Props> = (
  props: Props,
) => {
  const cms = props.data?.data;
  const { t } = useLang();
  // SSR-safe locale derived from the cookie-based prop from getInitialProps — must not
  // depend on useLang().lang, which is deliberately 'ru' on first paint (see useLang.ts).
  const pageLang = langFromCookie(props.lang);

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

  const content = cms?.aboutUsPage?.content;

  const about = React.useMemo(() => parseAbout(content ?? ''), [content]);
  const mission = findBlock(about.blocks, MISSION);
  const origin = findBlock(about.blocks, ORIGIN);
  const resultsBlock = findBlock(about.blocks, RESULTS);
  const projectsBlock = findBlock(about.blocks, PROJECTS);
  const volunteersBlock = findBlock(about.blocks, VOLUNTEERS);

  const stats = React.useMemo(
    () => (resultsBlock ? parseStats(resultsBlock.body) : []),
    [resultsBlock],
  );
  const projects = React.useMemo(
    () => (projectsBlock ? parseProjects(projectsBlock.body) : []),
    [projectsBlock],
  );
  const names = React.useMemo(
    () => (volunteersBlock ? parseNames(volunteersBlock.body) : []),
    [volunteersBlock],
  );
  // The thank-you prose trails the project bullets rather than having its own heading. Its
  // opening bold line duplicates the section title, so it is dropped.
  const gratitude = React.useMemo(
    () =>
      projectsBlock
        ? splitBullets(projectsBlock.body)
            .trailing.replace(/^\*\*Благодарность[^*]*\*\*\s*(?:<br\s*\/?>)?\s*/i, '')
            .trim()
        : '',
    [projectsBlock],
  );

  const infoCards = about.blocks.filter(
    (block) => TEAM.test(block.heading) || REPORTING.test(block.heading) || CONTACT.test(block.heading),
  );
  const handled = [mission, origin, resultsBlock, projectsBlock, volunteersBlock, ...infoCards];
  const leftovers = about.blocks.filter((block) => !handled.includes(block));

  const aboutMetaDescription =
    content?.replace(/[#*_>`[\]()]/g, '').replace(/\s+/g, ' ').trim().substring(0, 200) ||
    'Medsupportkz — общественный фонд доказательной медицины. Проверенные знания о здоровье ' +
      'и равенство в здоровье для каждого жителя Казахстана.';

  return (
    <>
      <Head>
        <title>Medsupportkz — О фонде</title>
        <meta name="keywords" content="Medsupportkz, о фонде, доказательная медицина, общественное здоровье" />
        <meta name="description" content={aboutMetaDescription} />
        <meta property="og:title" content="Medsupportkz — О фонде" />
        <meta property="og:description" content={aboutMetaDescription} />
        <meta property="og:image" content="https://medsupport.kz/static/images/logoBig.png" />
        <meta property="og:locale" content={pageLang === 'kz' ? 'kz_KZ' : 'ru_RU'} />
        <meta property="og:locale:alternate" content={pageLang === 'kz' ? 'ru_RU' : 'kz_KZ'} />
        <meta property="og:site_name" content="Medsupportkz" />
      </Head>
      <MskLayout links={headerLinks} footerSections={footerSections}>
        <PageHero
          eyebrow={t('abt.eyebrow')}
          eyebrowVariant="rose"
          title={t('abt.title')}
          lead={t('abt.lead')}
          crumbs={[{ label: t('crumb.home'), href: '/' }, { label: t('nav.about') }]}
        />

        {/* Lede + mission, side by side */}
        {(about.intro || mission) && (
          <section className="section">
            <div className="container about-split">
              {about.intro && (
                <div className="about-lede reveal">
                  <MskMarkdown>{about.intro}</MskMarkdown>
                </div>
              )}
              {mission && (
                <div className="about-mission reveal">
                  <p className="eyebrow">Наша миссия</p>
                  <p>{mission.heading.replace(/^Наша миссия\s*[-—–]\s*/i, '')}</p>
                </div>
              )}
            </div>
          </section>
        )}

        {origin && (
          <section className="section section--tight section--wash">
            <div className="container">
              <SectionHead eyebrow="История" title={origin.heading} />
              <div className="about-story prose reveal">
                <MskMarkdown>{origin.body}</MskMarkdown>
              </div>
            </div>
          </section>
        )}

        {stats.length > 0 && (
          <section className="section section--tight">
            <div className="container">
              <SectionHead eyebrow="Цифры" eyebrowVariant="teal" title="Наши результаты" />
              <div className="sgrid">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className={`sgrid__i reveal${stat.value ? '' : ' sgrid__i--plain'}`}
                  >
                    {stat.value && <div className="sgrid__n">{stat.value}</div>}
                    <div className="sgrid__l">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {projects.length > 0 && (
          <section className="section section--tight section--wash">
            <div className="container">
              <SectionHead eyebrow="Проекты" title="Что мы сделали" />
              <div className="tl">
                {projects.map((project) => (
                  <div key={project.title || project.body} className="tl__i reveal">
                    <div className="tl__y">{project.meta ?? ''}</div>
                    <div>
                      {project.title && <h3 className="tl__h">{project.title}</h3>}
                      <p className="tl__p">{project.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {infoCards.length > 0 && (
          <section className="section section--tight">
            <div className="container">
              <SectionHead eyebrow="Фонд" title="Управление, отчётность и контакты" />
              <div className="icards">
                {infoCards.map((card) => (
                  <div key={card.heading} className="icard reveal">
                    <h3>{card.heading}</h3>
                    <div className="prose">
                      <MskMarkdown>{card.body}</MskMarkdown>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {(gratitude || names.length > 0) && (
          <section className="section section--tight section--wash">
            <div className="container">
              <SectionHead
                eyebrow="Сообщество"
                eyebrowVariant="teal"
                title="Благодарность волонтёрам"
              />
              {gratitude && (
                <div className="about-story prose reveal" style={{ marginBottom: 40 }}>
                  <MskMarkdown>{gratitude}</MskMarkdown>
                </div>
              )}
              {names.length > 0 && <Volunteers names={names} />}
            </div>
          </section>
        )}

        {/* Anything the parser didn't recognise still renders, so no CMS edit can drop content. */}
        {leftovers.length > 0 && (
          <section className="section section--tight">
            <div className="container prose">
              {leftovers.map((block) => (
                <MskMarkdown key={block.heading}>{`#### ${block.heading}\n\n${block.body}`}</MskMarkdown>
              ))}
            </div>
          </section>
        )}

        <section className="section section--tight">
          <div className="container">
            <CtaBand
              title={t('pt.h2')}
              text={t('pt.lead')}
              button={
                <Btn href="/partner" lg withArrow>
                  {t('pt.cta')}
                </Btn>
              }
            />
          </div>
        </section>
      </MskLayout>
    </>
  );
};

AboutUsPage.getInitialProps = async (ctx) => {
  const lang = ctx.req?.headers?.cookie?.match(/(kk-Cyrl-KZ|ru-RU)/)?.[0] || 'ru-RU';

  const data = await ctx.apolloClient.query<AboutUsPageData, AboutUsPageDataVariables>({
    query: queryAboutUsPageData,
    variables: { locale: lang },
  });
  return { data, lang };
};
