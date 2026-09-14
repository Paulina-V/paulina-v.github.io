import type { ExperienceEntry } from "@/lib/types";

/**
 * ───────────────────────────────────────────────────────────────
 *  Populated from your July résumé. Most recent first — the
 *  timeline highlights whatever sits at index 0.
 *
 *  Two things to check, marked CHECK below:
 *   - the `summary` lines, which I inferred from your bullets
 *   - the OIT stack, where your résumé doesn't name the language
 * ───────────────────────────────────────────────────────────────
 */
export const experience: ExperienceEntry[] = [
  {
    id: "esquire",
    company: "Esquire Deposition Solutions",
    role: "Software Engineering Intern",
    start: "Jan 2026",
    end: "Aug 2026",
    location: "San Francisco, CA",
    summary:
      "Esquire provides deposition and litigation support to law firms. I worked on internal tooling for the sales team to make their workflow more efficient.",
    highlights: [
      "Built a lawsuit prioritization algorithm that scores 50,000+ active cases a day on signals like firm size, prior relationship with Esquire, revenue, and other proprietary metrics, so reps know which firms to prioritize for outbound outreach.",
      "Designed a Salesforce-native LWC dashboard with custom Apex controllers that ranks cases and tasks and pulls lawsuit information scattered across multiple systems into a single view for a 50+ rep sales team — projected to save 80,000+ hours a year and add $2.75M in revenue.",
      "Optimized slow SOQL queries and restructured data batching so the scoring algorithm could run at full daily scale.",
      "Built a manager-facing dashboard mirroring the rep dashboard, adding visibility into historical completion rates and team success metrics.",
      "Proposed and prototyped an LLM-based email integration to auto-generate personalized outbound emails from specific case attributes.",
    ],
    stack: ["Apex", "Salesforce LWC", "SOQL", "JavaScript", "LexisNexis API"],
  },
  {
    id: "duke-oit",
    company: "Duke Office of Information Technology",
    role: "Software Engineering Intern",
    start: "May 2025",
    end: "July 2025",
    location: "Durham, NC",
    // CHECK: inferred — confirm this is what the group actually does.
    summary:
      "Duke's central IT group. I worked on network security, on the system that blocks malicious traffic at the edge of the campus network.",
    highlights: [
      "Developed a Black Hole Routing site to manage 2M+ malicious IP addresses, with API token authentication.",
      "Engineered a PostgreSQL database to cross-check IP lists and trigger block/unblock requests for 3,000 IPs in under a second.",
    ],
    // CHECK: your résumé doesn't name the language here — add it.
    stack: ["PostgreSQL", "REST APIs"],
    links: [
      // CHECK: your résumé links "Source Code" here — paste the real URL.
      { label: "Source code", href: "https://github.com/paulina-v" },
    ],
  },
];
