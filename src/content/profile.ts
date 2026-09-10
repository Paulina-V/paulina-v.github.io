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

  /** Availability line under your name. Set a string here to show it. */
  status: null as string | null,

  /** Add more entries here and each renders as its own paragraph. */
  about: [
    "I'm a junior at Duke University studying Computer Science + Electrical and Computer Engineering.",
  ],

  /**
   * A small, subordinate line under the About text — for things worth
   * mentioning but not worth a section. Set a string here to show it.
   */
  footnote: null as string | null,

  email: "paulina.vvedenskaya@duke.edu",

  /** Shown next to the email button. Drop any you don't want. */
  links: [
    { label: "GitHub", href: "https://github.com/paulina-v" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/paulina-v/" },
    { label: "Resume", href: "/resume.pdf" },
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
