import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { profile } from "@/content/profile";

/**
 * Renders the portrait once the image file actually exists in public/,
 * and a designed monogram placeholder until then — so dropping the photo
 * in is the only step, and a missing file degrades instead of 404-ing.
 *
 * This is a Server Component, so the check runs at build time.
 */
function portraitExists(src: string): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", src));
  } catch {
    return false;
  }
}

export function Portrait() {
  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  const portrait =
    profile.portrait && portraitExists(profile.portrait.src)
      ? profile.portrait
      : null;

  return (
    <div className="relative w-full max-w-[280px]">
      {/* Offset accent frame — decorative use of the palette */}
      <div
        aria-hidden
        className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-lilac bg-sage-tint"
      />

      <div className="relative aspect-square overflow-hidden rounded-2xl border border-rule-strong bg-surface-2">
        {portrait ? (
          <Image
            src={portrait.src}
            alt={portrait.alt}
            fill
            sizes="280px"
            className="object-cover"
            priority
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-lilac-tint">
            <span
              aria-hidden
              className="font-display text-5xl font-semibold text-iris/70"
            >
              {initials}
            </span>
            <span className="px-4 text-center font-mono text-[10px] leading-relaxed tracking-wide text-ink-muted uppercase">
              Save photo to
              <br />
              public/portrait.jpg
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
