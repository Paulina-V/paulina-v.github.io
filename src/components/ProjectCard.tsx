import Link from "next/link";
import type { Project, ProjectAccent } from "@/lib/types";
import { published, publishedAll } from "@/lib/content";
import { StackList } from "@/components/StackList";

/**
 * Tailwind needs literal class names, so accents are looked up rather
 * than interpolated. Each project picks one in content/projects.ts.
 */
const ACCENT: Record<ProjectAccent, { border: string; mark: string }> = {
  iris: { border: "hover:border-iris", mark: "text-iris" },
  lilac: { border: "hover:border-lilac", mark: "text-lilac" },
  sage: { border: "hover:border-sage", mark: "text-sage" },
  olive: { border: "hover:border-olive", mark: "text-olive" },
};

export function ProjectCard({ project }: { project: Project }) {
  const accent = ACCENT[project.accent ?? "iris"];

  return (
    <li className="flex">
      <Link
        href={`/projects/${project.slug}`}
        className={`group flex w-full flex-col gap-4 rounded-xl border border-rule bg-ground p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-12px_rgba(28,21,32,0.18)] ${accent.border}`}
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-lg leading-snug font-semibold tracking-tight text-ink">
            {project.name}
          </h3>
          <span className="mt-1 shrink-0 font-mono text-[11px] text-ink-muted tabular-nums">
            {project.year}
          </span>
        </div>

        <p className="flex-1 text-[15px] leading-relaxed text-ink-muted">
          {published(project.tagline)}
        </p>

        <StackList items={publishedAll(project.stack)} />

        <div className="flex items-center justify-between gap-3">
          <span
            className={`flex items-center gap-1.5 font-mono text-[11px] tracking-wide uppercase ${accent.mark}`}
          >
            View project
            <span
              aria-hidden
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </span>

          {project.status === "cooking" ? (
            <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-sage bg-sage-tint px-2.5 py-1 font-mono text-[10px] leading-none tracking-wide text-olive uppercase">
              <span
                aria-hidden
                className="h-1.5 w-1.5 rounded-full bg-sage animate-simmer"
              />
              Still cooking
            </span>
          ) : null}
        </div>
      </Link>
    </li>
  );
}
