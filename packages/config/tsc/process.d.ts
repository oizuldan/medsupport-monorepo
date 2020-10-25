/* eslint-disable functional/prefer-type-literal,functional/prefer-readonly-type,@typescript-eslint/no-explicit-any */
declare namespace NodeJS {
  interface Process {
    browser?: boolean;
  }
}
