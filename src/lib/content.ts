/**
 * Authoring notes live in the content files as TODO:/WRITE:/CHECK: lines
 * so they're visible while editing. These helpers keep them from ever
 * reaching the rendered page — an unwritten section simply doesn't
 * appear, rather than publishing a note-to-self.
 */

const PLACEHOLDER = /^\s*(TODO|WRITE|CHECK)\b\s*[:—-]/i;

export function isPlaceholder(text: string): boolean {
  return PLACEHOLDER.test(text);
}

/** Returns the text, or undefined if it's an authoring note. */
export function published(text: string | undefined): string | undefined {
  if (!text || isPlaceholder(text)) return undefined;
  return text;
}

/** Drops authoring notes from a list, e.g. paragraphs or stack entries. */
export function publishedAll(items: readonly string[]): string[] {
  return items.filter((item) => !isPlaceholder(item));
}
