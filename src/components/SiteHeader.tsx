import Link from "next/link";
import { profile } from "@/content/profile";

const NAV = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
];

export function SiteHeader() {
  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-ground/85 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 sm:gap-6 sm:px-6">
        <Link
          href="/#top"
          className="font-display text-base font-semibold tracking-tight text-ink transition-colors hover:text-iris"
        >
          {/* Full name needs ~150px; below 640px the nav needs that room,
              so the wordmark falls back to initials rather than overflowing. */}
          <span className="sm:hidden">{initials}</span>
          <span className="hidden sm:inline">{profile.name}</span>
        </Link>

        <nav aria-label="Sections">
          <ul className="flex items-center gap-3 sm:gap-6">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-mono text-[10px] tracking-wide text-ink-muted uppercase transition-colors hover:text-iris sm:text-xs"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
