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
export type MainPageVariables = Exact<{
  locale: Scalars['String']['input'];
}>;


export type MainPage = { readonly __typename?: 'Query', readonly headerBanners: ReadonlyArray<{ readonly __typename?: 'HeaderBanners', readonly banners: ReadonlyArray<{ readonly __typename?: 'ComponentBannerBanner', readonly title: string, readonly subtitle: string, readonly buttonLink: string | null, readonly buttonTitle: string | null, readonly image: { readonly __typename?: 'UploadFile', readonly url: string, readonly name: string } | null } | null> | null } | null> | null, readonly headerButtons: ReadonlyArray<{ readonly __typename?: 'HeaderButtons', readonly buttons: ReadonlyArray<{ readonly __typename?: 'ComponentButtonButton', readonly title: string, readonly link: string } | null> | null } | null> | null, readonly footerSections: ReadonlyArray<{ readonly __typename?: 'FooterSections', readonly sections: ReadonlyArray<{ readonly __typename?: 'ComponentFooterSectionFooterSection', readonly title: string, readonly links: ReadonlyArray<{ readonly __typename?: 'ComponentLinkLink', readonly title: string | null, readonly link: string | null, readonly image: { readonly __typename?: 'UploadFile', readonly url: string, readonly name: string } | null } | null> | null } | null> | null } | null> | null, readonly headerLinks: ReadonlyArray<{ readonly __typename?: 'HeaderLinks', readonly links: ReadonlyArray<{ readonly __typename?: 'ComponentLinkLink', readonly title: string | null, readonly link: string | null } | null> | null } | null> | null, readonly homePageSpecialSection: { readonly __typename?: 'HomePageSpecialSections', readonly title: string, readonly interactiveCard: ReadonlyArray<{ readonly __typename?: 'ComponentInteractiveCardInteractiveCard', readonly id: string, readonly title: string, readonly description: string, readonly link: string, readonly buttonText: string } | null> | null } | null };


export type MainPage_headerBanners = Elem<MainPage['headerBanners']>;
export type MainPage_footerSections = Elem<MainPage['footerSections']>;
export type MainPage_footerSections_sections = Elem<MainPage_footerSections['sections']>;
export type MainPage_headerButtons = Elem<MainPage['headerButtons']>;
export type MainPage_headerLinks = Elem<MainPage['headerLinks']>;