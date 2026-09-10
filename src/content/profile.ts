import type { SiteLink } from "@/lib/types";

/**
 * ───────────────────────────────────────────────────────────────
 *  EDIT ME. Everything on the home page hero comes from this file.
 * ───────────────────────────────────────────────────────────────
 */
export const profile = {
  name: "Paulina Vvedenskaya",

  /** Short label under your name. Keep it factual, not a slogan. */
  label: "CS + ECE @ Duke",

  /** Optional availability line. Set to null to hide it. */
  status: "Seeking a Summer 2027 SWE internship",

  /**
   * Sentence 1 is yours, as written. Sentences 2 and 3 are now accurate
   * to your résumé, but they're my phrasing — rewrite them in your voice.
   */
  about: [
    "I'm a junior at Duke University studying Computer Science + Electrical and Computer Engineering.",
    "I spent eight months at Esquire Deposition Solutions in San Francisco building tooling that helps their sales team prioritize 50,000 active lawsuits a day, and before that I worked on network security infrastructure at Duke's Office of Information Technology.",
    "Right now I'm looking for a software engineering internship for Summer 2027.",
  ],

  /**
   * A small, subordinate line under the About text — for things worth
   * mentioning but not worth a section. Set to null to hide it.
   */
  footnote:
    "Outside of coursework: captain and now alumni mentor for FRC Robotics Team 971, a two-time championship division finalist.",

  email: "paulina.vvedenskaya@duke.edu",

  /** Shown next to the email button. Drop any you don't want. */
  links: [
    { label: "GitHub", href: "https://github.com/paulina-v" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/paulina-v/" },
    { label: "Résumé", href: "/resume.pdf" },
  ] satisfies SiteLink[],

  /**
   * Save your headshot to public/portrait.jpg and it appears automatically —
   * no code change needed. Until that file exists, the hero falls back to a
   * designed monogram, so the layout never breaks.
   */
  portrait: {
    src: "/portrait.jpg",
    alt: "Paulina Vvedenskaya",
  } as { src: string; alt: string } | null,
};
