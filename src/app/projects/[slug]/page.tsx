import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { publishedProjects, getProject } from "@/content/projects";
import { published, publishedAll } from "@/lib/content";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StackList } from "@/components/StackList";
import { ProjectDemo } from "@/components/ProjectDemo";

/** Every project is known at build time, so prerender them all. */
export function generateStaticParams() {
  return publishedProjects.map((project) => ({ slug: project.slug }));
}

/** Any slug not in the content file should 404 rather than render. */
export const dynamicParams = false;

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);

  if (!project) return {};

  // Never let an authoring note become the social-card description.
  const description =
    published(project.tagline) ?? `${project.name} — a project by Paulina Vvedenskaya.`;

  return {
    title: project.name,
    description,
    openGraph: { title: project.name, description },
  };
}

export default async function ProjectPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = getProject(slug);

  if (!project) notFound();

  // Sections whose paragraphs are all authoring notes are dropped entirely,
  // so an unwritten write-up shows nothing rather than a note-to-self.
  const sections = (project.sections ?? [])
    .map((section) => ({ ...section, body: publishedAll(section.body) }))
    .filter((section) => section.body.length > 0);

  return (
    <>
      <SiteHeader />

      <main id="main" className="mx-auto max-w-3xl px-6">
        <article className="flex flex-col gap-10 py-14 sm:py-16">
          <Link
            href="/#projects"
            className="inline-flex w-fit items-center gap-2 font-mono text-xs tracking-wide text-ink-muted uppercase transition-colors hover:text-iris"
          >
            <span aria-hidden>←</span> All projects
          </Link>

          <header className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <p className="font-mono text-xs tracking-[0.16em] text-olive uppercase">
                {project.year}
                {project.role ? ` · ${project.role}` : ""}
              </p>

              <h1 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {project.name}
              </h1>

              {published(project.tagline) ? (
                <p className="max-w-[60ch] text-lg leading-relaxed text-ink-muted">
                  {project.tagline}
                </p>
              ) : null}
            </div>

            <StackList items={publishedAll(project.stack)} />

            {project.links && project.links.length > 0 ? (
              <ul className="flex flex-wrap items-center gap-x-4 gap-y-2">
                {project.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-sm font-medium text-iris underline decoration-lilac decoration-2 underline-offset-4 transition-colors hover:decoration-iris"
                    >
                      {link.label} <span aria-hidden>↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </header>

          <ProjectDemo demo={project.demo} />

          {sections.length > 0 ? (
            <div className="flex flex-col gap-9">
              {sections.map((section) => (
                <section key={section.heading} className="flex flex-col gap-3">
                  <h2 className="font-display text-xl font-semibold tracking-tight text-ink">
                    {section.heading}
                  </h2>
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="max-w-[65ch] leading-relaxed text-ink-muted"
                    >
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}
            </div>
          ) : (
            <p className="rounded-xl border border-dashed border-rule-strong bg-surface px-6 py-8 text-center text-[15px] text-ink-muted">
              Write-up still cooking.
            </p>
          )}
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
