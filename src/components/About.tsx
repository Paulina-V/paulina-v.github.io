import { profile } from "@/content/profile";
import { Portrait } from "@/components/Portrait";

export function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="grid items-start gap-10 sm:gap-14 md:grid-cols-[minmax(0,1fr)_auto] md:gap-16">
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-4">
            <p className="font-mono text-xs tracking-[0.16em] text-olive uppercase">
              {profile.label}
            </p>

            <h1 className="font-display text-4xl leading-[1.05] font-semibold tracking-tight text-ink sm:text-5xl">
              {profile.name}
            </h1>

            {profile.status ? (
              <p className="flex items-center gap-2.5 text-sm text-iris">
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-sage"
                />
                {profile.status}
              </p>
            ) : null}
          </div>

          {/* Contact sits high on purpose — it's the action the page exists for. */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-iris px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-iris-deep"
            >
              {profile.email}
            </a>

            <ul className="flex flex-wrap items-center gap-x-4 gap-y-2">
              {profile.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noreferrer noopener"
                        : undefined
                    }
                    className="text-sm text-ink-muted underline decoration-lilac decoration-2 underline-offset-4 transition-colors hover:text-iris hover:decoration-iris"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex max-w-[58ch] flex-col gap-4 text-[17px] leading-relaxed text-ink-muted">
            {profile.about.map((sentence) => (
              <p key={sentence}>{sentence}</p>
            ))}
          </div>

          {profile.footnote ? (
            <p className="flex max-w-[58ch] gap-3 border-t border-rule pt-4 text-[13.5px] leading-relaxed text-ink-muted/85">
              <span aria-hidden className="mt-[7px] h-px w-4 shrink-0 bg-sage" />
              {profile.footnote}
            </p>
          ) : null}
        </div>

        <div className="md:pt-2">
          <Portrait />
        </div>
      </div>
    </section>
  );
}
