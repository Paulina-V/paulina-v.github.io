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
      <div className="flex w-full flex-col items-center gap-4 rounded-xl border border-dashed border-rule-strong bg-surface px-6 py-12">
        {/* Decorative stand-in for a demo that isn't recorded yet.
            Silent and muted, so browsers allow it to autoplay. */}
        <div className="h-24 w-24 overflow-hidden rounded-full border border-rule-strong bg-surface-2">
          <video
            className="h-full w-full object-cover"
            src="/demos/still-cooking.mp4"
            autoPlay
            loop
            muted
            playsInline
            aria-hidden
          />
        </div>

        <span className="flex items-center gap-2 font-mono text-[11px] leading-none tracking-wide text-olive uppercase">
          <span
            aria-hidden
            className="h-1.5 w-1.5 rounded-full bg-sage animate-simmer"
          />
          Demo still cooking
        </span>
      </div>
    );
  }

  // A phone screen recording is far taller than it is wide, so it gets its
  // own frame rather than being cropped into the 16:9 box.
  if (resolved.kind === "video" && resolved.orientation === "portrait") {
    return (
      <figure className="flex flex-col gap-3">
        <div className="flex justify-center rounded-xl border border-rule bg-surface px-6 py-8">
          <video
            className="h-[min(560px,70vh)] w-auto rounded-[26px] border border-rule-strong bg-black shadow-[0_18px_40px_-20px_rgba(28,21,32,0.45)]"
            src={resolved.src}
            poster={resolved.poster}
            controls
            playsInline
            preload="metadata"
          />
        </div>

        {resolved.caption ? (
          <figcaption className="text-center font-mono text-[11px] text-ink-muted">
            {resolved.caption}
          </figcaption>
        ) : null}
      </figure>
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
