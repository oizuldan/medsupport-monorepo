import type { CodegenConfig } from '@graphql-codegen/cli';

// Each page's `graphql.ts` holds exactly one query. We regenerate one self-contained
// file per operation at `<Page>/__generated__/<OperationName>.ts`, matching the layout
// and type names (`<OperationName>` / `<OperationName>Variables`) the source expects.
const pages: Record<string, string> = {
  QuestionsPage: 'QuestionsPageData',
  HomePage: 'MainPage',
  VaccinePage: 'FaqPageData',
  AboutUsPage: 'AboutUsPageData',
  QuestionPage: 'QuestionPageData',
  ArticlePage: 'Article',
  DocumentsPage: 'Documents',
  ResistancePage: 'ResistancePageData',
  ArticlesPage: 'ArticlesPage',
};

const scalars = {
  DateTime: 'string',
  Date: 'string',
  Time: 'string',
  Long: 'number',
  JSON: 'unknown',
  Upload: 'File',
  HhMmTime: 'string',
  DateWithDot: 'string',
};

// `typescript-operations` (preResolveTypes) references these helpers, which the base
// `typescript` plugin would normally provide. We inline a minimal set so each file
// stays self-contained without emitting the entire Strapi schema. `Elem` unwraps one
// array level (or passes an object through), letting us re-create the apollo-CLI style
// nested selection type aliases the legacy code imports.
const preamble = `/* eslint-disable */
type Maybe<T> = T | null;
type InputMaybe<T> = Maybe<T>;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type Scalar<In, Out = In> = { input: In; output: Out };
type Scalars = {
  ID: Scalar<string>; String: Scalar<string>; Boolean: Scalar<boolean>;
  Int: Scalar<number>; Float: Scalar<number>; DateTime: Scalar<string>;
  Date: Scalar<string>; Time: Scalar<string>; Long: Scalar<number>;
  JSON: Scalar<unknown>; Upload: Scalar<File>; HhMmTime: Scalar<string>;
  DateWithDot: Scalar<string>;
};
type ArrayElement<T> = T extends readonly (infer U)[] ? U : T;
type Elem<T> = NonNullable<ArrayElement<NonNullable<T>>>;`;

// Named nested selection aliases still imported by consumers, expressed as
// indexed-access types over the generated operation type.
const nestedAliases: Record<string, string> = {
  MainPage: `
export type MainPage_headerBanners = Elem<MainPage['headerBanners']>;
export type MainPage_footerSections = Elem<MainPage['footerSections']>;
export type MainPage_footerSections_sections = Elem<MainPage_footerSections['sections']>;
export type MainPage_headerButtons = Elem<MainPage['headerButtons']>;
export type MainPage_headerLinks = Elem<MainPage['headerLinks']>;`,
  ArticlesPage: `
export type ArticlesPage_articleSections_articles = Elem<Elem<ArticlesPage['articleSections']>['articles']>;`,
  QuestionPageData: `
export type QuestionPageData_questionCategory_questions = Elem<Elem<QuestionPageData['questionCategory']>['questions']>;`,
  QuestionsPageData: `
export type QuestionsPageData_questionCategories = Elem<QuestionsPageData['questionCategories']>;
export type QuestionsPageData_questions = Elem<QuestionsPageData['questions']>;`,
  FaqPageData: `
export type FaqPageData_faq_actualTopics_questions = Elem<Elem<Elem<FaqPageData['faq']>['actualTopics']>['questions']>;
export type FaqPageData_questionCategories = Elem<FaqPageData['questionCategories']>;`,
};

const operationConfig = {
  omitOperationSuffix: true,
  preResolveTypes: true,
  enumsAsTypes: true,
  skipTypename: false,
  // Match the old `apollo client:codegen --useReadOnlyTypes`: readonly fields/arrays,
  // and nullable-not-optional response fields (`X | null` rather than `X?: ... | undefined`)
  // so the generated data lines up with the consumers' `readonly ... | null` props.
  immutableTypes: true,
  avoidOptionals: { field: true },
  scalars,
};

const generates: CodegenConfig['generates'] = {};
for (const [page, operation] of Object.entries(pages)) {
  generates[`src/components/pages/${page}/__generated__/${operation}.ts`] = {
    documents: `src/components/pages/${page}/graphql.ts`,
    plugins: [
      { add: { placement: 'prepend', content: preamble } },
      'typescript-operations',
      ...(nestedAliases[operation]
        ? [{ add: { placement: 'append', content: nestedAliases[operation] } }]
        : []),
    ],
    config: operationConfig,
  };
}

const config: CodegenConfig = {
  schema: process.env.CMS_GRAPHQL_API_URL ?? 'https://medsupport.kz/cms/graphql',
  ignoreNoDocuments: true,
  generates,
};

export default config;
