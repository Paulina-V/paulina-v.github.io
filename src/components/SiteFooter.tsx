import { profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-rule bg-surface">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <p className="font-display text-sm font-semibold text-ink">
            {profile.name}
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="text-sm text-ink-muted transition-colors hover:text-iris"
          >
            {profile.email}
          </a>
        </div>

        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
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
                className="font-mono text-xs tracking-wide text-ink-muted uppercase transition-colors hover:text-iris"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
