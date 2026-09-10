import { experience } from "@/content/experience";
import { SectionHeading } from "@/components/SectionHeading";
import { StackList } from "@/components/StackList";

export function Experience() {
  if (experience.length === 0) return null;

  return (
    <section id="experience" className="flex flex-col gap-10">
      <SectionHeading title="Experience" />

      <ol className="relative flex flex-col gap-11">
        {/* Timeline rail — decorative, fades out past the last entry */}
        <span
          aria-hidden
          className="absolute top-2 bottom-0 left-[5px] w-px bg-gradient-to-b from-lilac via-lilac to-transparent"
        />

        {experience.map((entry, index) => {
          const isCurrent = index === 0;

          return (
            <li key={entry.id} className="relative pl-8">
              {/* Node — filled for the most recent role, hollow for earlier ones */}
              <span
                aria-hidden
                className={[
                  "absolute top-1.5 left-0 h-[11px] w-[11px] rounded-full border-2",
                  isCurrent
                    ? "border-iris bg-iris ring-4 ring-lilac-tint"
                    : "border-lilac bg-ground",
                ].join(" ")}
              />

              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1.5">
                  <p className="font-mono text-xs tracking-wide text-olive">
                    {entry.start} — {entry.end}
                    {entry.location ? (
                      <span className="text-ink-muted"> · {entry.location}</span>
                    ) : null}
                  </p>

                  <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                    {entry.role}
                    <span className="text-iris"> · {entry.company}</span>
                  </h3>
                </div>

                <p className="max-w-[62ch] text-ink-muted">{entry.summary}</p>

                {entry.highlights.length > 0 ? (
                  <ul className="flex max-w-[62ch] list-none flex-col gap-2">
                    {entry.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="relative pl-5 text-[15px] leading-relaxed text-ink-muted before:absolute before:top-[0.6em] before:left-0 before:h-1.5 before:w-1.5 before:rounded-full before:bg-sage before:content-['']"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                ) : null}

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <StackList items={entry.stack} variant="inline" />

                  {entry.links?.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="font-mono text-xs text-iris underline decoration-lilac decoration-2 underline-offset-4 transition-colors hover:decoration-iris"
                    >
                      {link.label} <span aria-hidden>↗</span>
                    </a>
                  ))}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
