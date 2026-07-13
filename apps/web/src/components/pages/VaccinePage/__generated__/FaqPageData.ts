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
export type FaqPageDataVariables = Exact<{
  locale: Scalars['String']['input'];
}>;


export type FaqPageData = { readonly __typename?: 'Query', readonly faq: { readonly __typename?: 'Faq', readonly relevantTopicsText: string, readonly readMoreText: string, readonly showAllQuestions: string, readonly bannerTitle: string, readonly bannerSubtitle: string, readonly actualTopics: { readonly __typename?: 'ComponentActualTopicsActualTopics', readonly questions: ReadonlyArray<{ readonly __typename?: 'Question', readonly id: string, readonly title: string, readonly question_category: { readonly __typename?: 'QuestionCategory', readonly id: string } | null } | null> | null } | null, readonly bannerImage: { readonly __typename?: 'UploadFile', readonly url: string, readonly name: string } | null, readonly sponsor: { readonly __typename?: 'ComponentPartnerPartner', readonly title: string, readonly link: string, readonly image: { readonly __typename?: 'UploadFile', readonly url: string, readonly name: string } | null } | null } | null, readonly questionCategories: ReadonlyArray<{ readonly __typename?: 'QuestionCategory', readonly title: string, readonly id: string } | null> | null, readonly headerButtons: ReadonlyArray<{ readonly __typename?: 'HeaderButtons', readonly buttons: ReadonlyArray<{ readonly __typename?: 'ComponentButtonButton', readonly title: string, readonly link: string } | null> | null } | null> | null, readonly footerSections: ReadonlyArray<{ readonly __typename?: 'FooterSections', readonly sections: ReadonlyArray<{ readonly __typename?: 'ComponentFooterSectionFooterSection', readonly title: string, readonly links: ReadonlyArray<{ readonly __typename?: 'ComponentLinkLink', readonly title: string | null, readonly link: string | null, readonly image: { readonly __typename?: 'UploadFile', readonly url: string, readonly name: string } | null } | null> | null } | null> | null } | null> | null, readonly headerLinks: ReadonlyArray<{ readonly __typename?: 'HeaderLinks', readonly links: ReadonlyArray<{ readonly __typename?: 'ComponentLinkLink', readonly title: string | null, readonly link: string | null } | null> | null } | null> | null };


export type FaqPageData_faq_actualTopics_questions = Elem<Elem<Elem<FaqPageData['faq']>['actualTopics']>['questions']>;
export type FaqPageData_questionCategories = Elem<FaqPageData['questionCategories']>;