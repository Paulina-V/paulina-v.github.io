import { publishedProjects } from "@/content/projects";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";

export function Projects() {
  if (publishedProjects.length === 0) return null;

  return (
    <section id="projects" className="flex flex-col gap-10">
      <SectionHeading title="Projects" />

      <ul className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {publishedProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </ul>
    </section>
  );
}
