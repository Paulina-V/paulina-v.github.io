type Props = {
  /** Small mono label above the heading. */
  eyebrow: string;
  title: string;
  /** Optional one-line intro under the heading. */
  intro?: string;
};

export function SectionHeading({ eyebrow, title, intro }: Props) {
  return (
    <div className="flex flex-col gap-3">
      <p className="flex items-center gap-3 font-mono text-xs tracking-[0.16em] text-olive uppercase">
        <span aria-hidden className="h-px w-8 bg-lilac" />
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {intro ? (
        <p className="max-w-xl text-ink-muted">{intro}</p>
      ) : null}
    </div>
  );
}
