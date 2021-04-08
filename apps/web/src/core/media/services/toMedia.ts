export const toMedia = (pixels: number | string, point = 'min-width'): string =>
  `@media(${point}: ${Number(pixels)}px)`;
