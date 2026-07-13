// Legacy runtime flag set on the Node process object in some browser checks.
declare namespace NodeJS {
  interface Process {
    browser?: boolean;
  }
}
