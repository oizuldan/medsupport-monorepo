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
export type QuestionPageDataVariables = Exact<{
  id: Scalars['ID']['input'];
  locale: Scalars['String']['input'];
}>;


export type QuestionPageData = { readonly __typename?: 'Query', readonly questionCategory: { readonly __typename?: 'QuestionCategory', readonly title: string, readonly id: string, readonly lastModifiedDate: string, readonly locale: string | null, readonly localizations: ReadonlyArray<{ readonly __typename?: 'QuestionCategory', readonly title: string } | null> | null, readonly questions: ReadonlyArray<{ readonly __typename?: 'Question', readonly id: string, readonly title: string, readonly content: string, readonly localizations: ReadonlyArray<{ readonly __typename?: 'Question', readonly id: string, readonly title: string, readonly content: string } | null> | null } | null> | null } | null, readonly questionPage: { readonly __typename?: 'QuestionPage', readonly lastModifiesText: string, readonly goToFaqButtonText: string, readonly goToAllQuestionsText: string, readonly sponsor: { readonly __typename?: 'ComponentPartnerPartner', readonly title: string, readonly link: string, readonly image: { readonly __typename?: 'UploadFile', readonly url: string, readonly name: string } | null } | null } | null, readonly headerButtons: ReadonlyArray<{ readonly __typename?: 'HeaderButtons', readonly buttons: ReadonlyArray<{ readonly __typename?: 'ComponentButtonButton', readonly title: string, readonly link: string } | null> | null } | null> | null, readonly footerSections: ReadonlyArray<{ readonly __typename?: 'FooterSections', readonly sections: ReadonlyArray<{ readonly __typename?: 'ComponentFooterSectionFooterSection', readonly title: string, readonly links: ReadonlyArray<{ readonly __typename?: 'ComponentLinkLink', readonly title: string | null, readonly link: string | null, readonly image: { readonly __typename?: 'UploadFile', readonly url: string, readonly name: string } | null } | null> | null } | null> | null } | null> | null, readonly headerLinks: ReadonlyArray<{ readonly __typename?: 'HeaderLinks', readonly links: ReadonlyArray<{ readonly __typename?: 'ComponentLinkLink', readonly title: string | null, readonly link: string | null } | null> | null } | null> | null };


export type QuestionPageData_questionCategory_questions = Elem<Elem<QuestionPageData['questionCategory']>['questions']>;