import type { Project } from "@/lib/types";

/**
 * ───────────────────────────────────────────────────────────────
 *  Populated from your July résumé.
 *
 *  Order matters — the grid reads left to right, so index 0 is
 *  your best real estate.
 *
 *  The top three have case-study scaffolding started from your
 *  résumé bullets. The prompts marked WRITE are the parts only
 *  you can answer, and they're the parts interviewers read.
 *
 *  Add `links` (repo, live demo) to each one — none are in yet.
 * ───────────────────────────────────────────────────────────────
 */
export const projects: Project[] = [
  {
    slug: "medical-billing-auditor",
    name: "AI Medical Billing Auditor",
    tagline:
      "Reads a medical bill, finds the overcharges, and drafts the dispute letter for you.",
    stack: ["Python", "OpenAI API", "ChromaDB", "scikit-learn"],
    year: "2026",
    accent: "iris",
    demo: { kind: "none" },
    sections: [
      {
        heading: "Context",
        body: [
          "Medical bills are hard to check. Charges arrive as CPT codes most people can't read, and comparing them against a fair price means knowing what Medicare pays for the same procedure.",
          "This tool takes a photo of a bill and returns a plain-language risk assessment: which line items look overcharged or duplicated, and a dispute letter you can actually send.",
        ],
      },
      {
        heading: "How it works",
        body: [
          "OCR extracts text from the uploaded bill, then an LLM extraction step pulls out structured CPT codes and charges.",
          "Each code is compared against a 10,000-row Medicare price database through a custom RAG pipeline with selectable hash and semantic embeddings.",
          "A random forest classifier, trained with feature engineering on Reddit billing complaints and synthetic bills, predicts a LOW/MED/HIGH risk rating at 0.995 macro F1.",
        ],
      },
      {
        heading: "The interesting decision",
        body: [
          "WRITE: You built the RAG pipeline with selectable hash vs. semantic embeddings — that choice is the case study. Why make it selectable instead of picking one? What did each get right and wrong on CPT codes specifically? This is the strongest technical decision on your résumé; give it a real paragraph.",
        ],
      },
      {
        heading: "What broke",
        body: [
          "WRITE: Something in the OCR or extraction step surely failed on real bills — bad scans, odd layouts, codes that didn't parse. Pick one, and say how you found it and what you did.",
        ],
      },
      {
        heading: "In hindsight",
        body: [
          "WRITE: 0.995 macro F1 on partly synthetic training data is a number worth being honest about. What would you want to validate before trusting it on real bills?",
        ],
      },
    ],
  },
  {
    slug: "oogasalad",
    name: "OOGASalad Game Creation Platform",
    tagline:
      "A no-code visual editor for building physics-based track games.",
    stack: ["Java", "JavaFX", "JSON"],
    year: "2026",
    accent: "sage",
    // CHECK: team size and your role — this was a team project.
    role: "Team project",
    demo: { kind: "none" },
    sections: [
      {
        heading: "Context",
        body: [
          "A data-driven authoring platform that lets someone design a physics-based track game through a visual editor, without writing code.",
        ],
      },
      {
        heading: "The interesting decision",
        body: [
          "Mid-project, the data model was redesigned to separate reusable game catalogs from per-level configuration — which meant renegotiating the contracts between the authoring, data, and engine layers while the team was already building against them.",
          "WRITE: This is the best story on your résumé and it deserves the most space on this page. What was wrong with the original model? How did you convince the team mid-flight? What did the renegotiation cost, and was it worth it? Interviewers ask 'tell me about a hard technical decision' — this is that answer.",
        ],
      },
      {
        heading: "Engineering",
        body: [
          "Built the full JSON pipeline — loaders, validators, registries — bridging authored game data to a physics engine with SAT collision detection.",
        ],
      },
      {
        heading: "What broke",
        body: [
          "WRITE: A pivot of that size breaks things. What was the worst of it, and how did you find it?",
        ],
      },
    ],
  },
  {
    slug: "visa-appointment-monitor",
    name: "BLS Visa Appointment Monitor",
    tagline:
      "Watches a visa portal that's almost never open, and texts you the moment it is.",
    stack: ["Python", "Selenium", "2Captcha API", "SMTP"],
    year: "2025",
    accent: "olive",
    demo: { kind: "none" },
    sections: [
      {
        heading: "Context",
        body: [
          "Spanish visa appointments through the BLS portal are released unpredictably and taken within minutes. Checking manually means refreshing a multi-step login flow several times a day for weeks, and expediting services charge a few hundred dollars to do it for you.",
          "This tool does the checking: it logs in, navigates the booking flow, and sends an SMS the moment a slot opens.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "Secured an appointment in 24 days across roughly 575 automated checks, saving about $250 in expediting fees.",
        ],
      },
      {
        heading: "The interesting decision",
        body: [
          "The portal defends itself: image-grid CAPTCHAs, honeypot fields, and a multi-step login that breaks naive automation.",
          "WRITE: How did you detect the honeypots without tripping them? What made the session handling hard? The adversarial framing is what makes this project memorable — lean into it.",
        ],
      },
      {
        heading: "In hindsight",
        body: [
          "WRITE: Worth a sentence on scope — this ran against your own appointment at human-ish rates, not as a scraper hammering a public service. Some interviewers will ask; having a crisp answer ready turns a possible objection into a good conversation.",
        ],
      },
    ],
  },
  {
    slug: "cell-society",
    name: "Cell Society",
    tagline:
      "An extensible framework for cellular automata — Game of Life, spreading fire, and agent-based models.",
    stack: ["Java", "JavaFX"],
    year: "2025",
    accent: "lilac",
    role: "Team project",
    demo: { kind: "none" },
    sections: [
      {
        heading: "Context",
        body: [
          "A simulation framework built so new rule sets could be added without touching the engine — a reflection-based rule factory supporting Game of Life, Spreading Fire, and agent-based simulations.",
        ],
      },
      {
        heading: "Architecture",
        body: [
          "A localized exception hierarchy decouples model-layer errors from UI display across a three-layer architecture.",
          "WRITE: Reflection buys extensibility and costs type safety and debuggability. Say why it was the right trade here.",
        ],
      },
    ],
  },
  {
    slug: "trip-price-aggregator",
    name: "Hotel & Flight Price Aggregator",
    tagline:
      "Compares total trip cost across a group of travelers and alerts on big price drops.",
    stack: ["Python", "Flask", "React"],
    year: "2026",
    accent: "iris",
    status: "cooking",
    demo: { kind: "none" },
    sections: [
      {
        heading: "Context",
        body: [
          "Planning a trip for a group means everyone pricing flights and hotels separately, then trying to compare totals across different dates and destinations.",
          "This aggregates the whole cost in one place — integrating the Amadeus and Hotels.com APIs to compare total trip price across a group, with automated email alerts on large price drops.",
        ],
      },
      {
        heading: "Where it stands",
        body: [
          "WRITE: Say plainly what works today and what's next. A work-in-progress reads as honest when you're specific about the boundary, and vague when you're not.",
        ],
      },
    ],
  },
  {
    slug: "apple-watch-metrics",
    name: "Apple Watch Metrics",
    // TODO: what does it do, and who for? One line, no stack.
    tagline: "TODO: one line on what it does and who it's for.",
    // TODO: three or four technologies.
    stack: ["TODO"],
    year: "2026",
    accent: "sage",
    // Remove this line once it ships.
    status: "cooking",
    demo: { kind: "none" },
    sections: [
      {
        heading: "Context",
        body: [
          "WRITE: What are you pulling off the watch, and what question are you trying to answer with it?",
        ],
      },
    ],
  },
];

export const publishedProjects = projects.filter((p) => p.published !== false);

export function getProject(slug: string): Project | undefined {
  return publishedProjects.find((p) => p.slug === slug);
}
