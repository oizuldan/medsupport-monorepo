const regexp = /!\[([\w\s\d.]+)\]\(((?:\/|https?:\/\/)[\w\d./?=#]+)\)/g;
export const transformMarkdownImages = (c: string): string =>
  c.replace(regexp, (_: string, g1: string, g2: string) => `<img src="${g2}" alt="${g1}" />`);
