import { SiteHeader } from "@/components/SiteHeader";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <span id="top" />
      <SiteHeader />

      <main id="main" className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-24 py-16 sm:gap-28 sm:py-20">
          <About />
          <Experience />
          <Projects />
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
