/* eslint-disable */
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
type Elem<T> = NonNullable<ArrayElement<NonNullable<T>>>;
export type ArticlesPageVariables = Exact<{
  locale: Scalars['String']['input'];
}>;


export type ArticlesPage = { readonly __typename?: 'Query', readonly articleSections: ReadonlyArray<{ readonly __typename?: 'ArticleSections', readonly id: string, readonly title: string | null, readonly articles: ReadonlyArray<{ readonly __typename?: 'Article', readonly id: string, readonly title: string } | null> | null } | null> | null, readonly articlesSection: { readonly __typename?: 'ArticlesSection', readonly section: { readonly __typename?: 'ComponentSectionSection', readonly title: string } | null } | null, readonly headerButtons: ReadonlyArray<{ readonly __typename?: 'HeaderButtons', readonly buttons: ReadonlyArray<{ readonly __typename?: 'ComponentButtonButton', readonly title: string, readonly link: string } | null> | null } | null> | null, readonly footerSections: ReadonlyArray<{ readonly __typename?: 'FooterSections', readonly sections: ReadonlyArray<{ readonly __typename?: 'ComponentFooterSectionFooterSection', readonly title: string, readonly links: ReadonlyArray<{ readonly __typename?: 'ComponentLinkLink', readonly title: string | null, readonly link: string | null, readonly image: { readonly __typename?: 'UploadFile', readonly url: string, readonly name: string } | null } | null> | null } | null> | null } | null> | null, readonly headerLinks: ReadonlyArray<{ readonly __typename?: 'HeaderLinks', readonly links: ReadonlyArray<{ readonly __typename?: 'ComponentLinkLink', readonly title: string | null, readonly link: string | null } | null> | null } | null> | null };


export type ArticlesPage_articleSections_articles = Elem<Elem<ArticlesPage['articleSections']>['articles']>;