export type SiteLink = {
  label: string;
  href: string;
};

export type ExperienceEntry = {
  /** Stable id used as a React key. */
  id: string;
  company: string;
  role: string;
  /** Display strings, e.g. "May 2026" / "Aug 2026" / "Present". */
  start: string;
  end: string;
  location?: string;
  /** One or two sentences of context. */
  summary: string;
  /** Bullet points. Lead with impact, not responsibilities. */
  highlights: string[];
  stack: string[];
  /** Optional — e.g. a public repo for work that shipped open source. */
  links?: SiteLink[];
};

/**
 * How a project's detail page shows the work in action.
 * The detail page renders whichever kind is set, so you can start
 * with "none" and swap in a video or embed later without touching JSX.
 */
export type ProjectDemo =
  | { kind: "none" }
  | { kind: "video"; src: string; poster?: string; caption?: string }
  | { kind: "embed"; src: string; title: string; caption?: string }
  | { kind: "image"; src: string; alt: string; caption?: string };

export type ProjectSection = {
  heading: string;
  /** Each string renders as its own paragraph. */
  body: string[];
};

export type ProjectAccent = "iris" | "lilac" | "sage" | "olive";

/**
 * Optional badge on a project card.
 * "cooking" = actively being built; shows a "Still cooking" pill.
 */
export type ProjectStatus = "cooking";

export type Project = {
  /** URL segment: /projects/<slug> */
  slug: string;
  name: string;
  /** One line, shown on the card. Say what it does, not what it's built with. */
  tagline: string;
  /** Shown as chips on the card. Keep to 3-4 or the card gets noisy. */
  stack: string[];
  year: string;
  role?: string;
  /** Repo, live site, writeup, etc. */
  links?: SiteLink[];
  demo?: ProjectDemo;
  /** Long-form detail. Optional — cards work fine before this is written. */
  sections?: ProjectSection[];
  /** Rotates the card's accent color through the palette. */
  accent?: ProjectAccent;
  /** Shows a badge on the card. Omit for finished work. */
  status?: ProjectStatus;
  /** Set false to keep a project in the file but off the site. */
  published?: boolean;
};
