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
      <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-rule-strong bg-surface px-6 text-center">
        <p className="font-display text-base font-semibold text-ink">
          Demo goes here
        </p>
        <p className="max-w-sm font-mono text-[11px] leading-relaxed text-ink-muted">
          Set <span className="text-iris">demo</span> on this project in
          content/projects.ts — video, embed, or image.
        </p>
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
