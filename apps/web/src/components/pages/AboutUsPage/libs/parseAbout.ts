export interface AboutBlock {
  readonly heading: string;
  readonly body: string;
}

export interface AboutContent {
  /** Everything before the first `####` heading — the lede and mission statement. */
  readonly intro: string;
  readonly blocks: ReadonlyArray<AboutBlock>;
}

export interface AboutStat {
  readonly value?: string;
  readonly label: string;
}

export interface AboutProject {
  readonly title: string;
  readonly meta?: string;
  readonly body: string;
}

/**
 * The CMS stores the whole About page as a single markdown field. Splitting it on its
 * `####` headings lets the page render the interesting blocks (results, projects,
 * volunteers) as designed sections while anything unrecognised still falls through to
 * prose — so a CMS edit can never drop content off the page.
 */
export function parseAbout(content: string): AboutContent {
  const parts = content.split(/^####\s+/m);
  const [intro, ...rest] = parts;

  const blocks = rest.map((part) => {
    const newline = part.indexOf('\n');
    const heading = (newline === -1 ? part : part.slice(0, newline)).trim();
    const body = newline === -1 ? '' : part.slice(newline + 1).trim();
    return { heading: heading.replace(/^\*+|[:*\s]+$/g, '').trim(), body };
  });

  return { intro: intro.trim(), blocks };
}

export const findBlock = (blocks: ReadonlyArray<AboutBlock>, pattern: RegExp) =>
  blocks.find((block) => pattern.test(block.heading));

/** `- 40 000+ подписчиков в Instagram` → `{ value: '40 000+', label: 'подписчиков…' }`. */
export function parseStats(body: string): ReadonlyArray<AboutStat> {
  return splitBullets(body)
    .bullets.map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const match = /^([\d\s  ]+\+?)\s+(.+)$/.exec(line);
      if (!match) return { label: line };
      return { value: match[1].trim(), label: match[2].trim() };
    });
}

/**
 * Splits a bullet list from any prose that follows it. A bullet's description sits on a
 * following `<br/>` line, so those continue the current item; the first ordinary
 * paragraph after the list (e.g. the volunteer thank-you) ends it and is returned as
 * `trailing` rather than being parsed as another bullet.
 */
export function splitBullets(body: string): { bullets: ReadonlyArray<string>; trailing: string } {
  const bullets: string[] = [];
  const trailing: string[] = [];
  let current: string[] | null = null;
  let ended = false;

  for (const line of body.split('\n')) {
    const isBullet = /^[-*]\s+/.test(line);

    if (ended) {
      trailing.push(line);
    } else if (isBullet) {
      if (current) bullets.push(current.join('\n'));
      current = [line.replace(/^[-*]\s+/, '')];
    } else if (current && (line.trim() === '' || /^<br\s*\/?>/i.test(line.trim()))) {
      current.push(line);
    } else if (current && line.trim() !== '') {
      ended = true;
      trailing.push(line);
    }
  }

  if (current) bullets.push(current.join('\n'));

  return { bullets, trailing: trailing.join('\n').trim() };
}

/** `- **UNICEF Kazakhstan, 2021–2022**<br/>Научный контент…` → title / meta / body. */
export function parseProjects(body: string): ReadonlyArray<AboutProject> {
  return splitBullets(body)
    .bullets.map((entry) => entry.trim())
    .filter(Boolean)
    .map((entry) => {
      const match = /^\*\*(.+?)\*\*\s*(?:<br\s*\/?>)?\s*([\s\S]*)$/.exec(entry);
      if (!match) return { title: '', body: entry };

      const full = match[1].trim();
      // Trailing years are split out so they can be set as a separate badge.
      const withYear = /^(.*?),\s*([\d]{4}(?:[–—-][\d]{4})?)$/.exec(full);
      return {
        title: withYear ? withYear[1].trim() : full,
        meta: withYear ? withYear[2].trim() : undefined,
        body: match[2].replace(/<br\s*\/?>/g, ' ').trim(),
      };
    })
    .filter((project) => project.title || project.body);
}

/** The volunteer roll is one long bolded, comma-separated run. */
export function parseNames(body: string): ReadonlyArray<string> {
  return body
    .replace(/\*\*/g, '')
    .split(',')
    .map((name) => name.trim())
    .filter(Boolean);
}
