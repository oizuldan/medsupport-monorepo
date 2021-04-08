export enum CoverStrategies {
  Visibility,
  // TODO: figure out the usage with: "avoid using properties like display: none. This doesn't allow Popper to read its dimensions which can cause jitter issues."
  // DisplayNone,
  // TODO: figure out how to fix the bug in which popper computes styles before content mount.
  // Unmount,
}
