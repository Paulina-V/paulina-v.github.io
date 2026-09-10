import Image from "next/image";
import type { ProjectDemo as Demo } from "@/lib/types";

/**
 * The "see it in action" slot on a project detail page.
 *
 * Set `demo` in content/projects.ts to one of:
 *   { kind: "video", src: "/demos/thing.mp4", poster?, caption? }
 *   { kind: "embed", src: "https://...", title, caption? }   // YouTube, Loom, live app
 *   { kind: "image", src: "/demos/thing.png", alt, caption? }
 *   { kind: "none" }                                          // shows the placeholder
 */
export function ProjectDemo({ demo }: { demo?: Demo }) {
  const resolved: Demo = demo ?? { kind: "none" };

  if (resolved.kind === "none") {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-rule bg-surface-2">
        {/* Decorative placeholder standing in for a demo that isn't
            recorded yet. Muted and silent, so it can autoplay. */}
        <video
          className="h-full w-full object-cover"
          src="/demos/still-cooking.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden
        />

        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 via-ink/10 to-transparent p-4">
          <span className="flex items-center gap-2 rounded-full border border-sage/60 bg-ground/90 px-3 py-1.5 font-mono text-[11px] leading-none tracking-wide text-olive uppercase backdrop-blur-sm">
            <span
              aria-hidden
              className="h-1.5 w-1.5 rounded-full bg-sage animate-simmer"
            />
            Still cooking
          </span>
        </div>
      </div>
    );
  }

  return (
    <figure className="flex flex-col gap-3">
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-rule bg-surface-2">
        {resolved.kind === "video" ? (
          <video
            className="h-full w-full object-cover"
            src={resolved.src}
            poster={resolved.poster}
            controls
            playsInline
            preload="metadata"
          />
        ) : null}

        {resolved.kind === "embed" ? (
          <iframe
            className="h-full w-full"
            src={resolved.src}
            title={resolved.title}
            loading="lazy"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : null}

        {resolved.kind === "image" ? (
          <Image
            src={resolved.src}
            alt={resolved.alt}
            fill
            sizes="(min-width: 768px) 720px, 100vw"
            className="object-cover"
          />
        ) : null}
      </div>

      {resolved.caption ? (
        <figcaption className="font-mono text-[11px] text-ink-muted">
          {resolved.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
