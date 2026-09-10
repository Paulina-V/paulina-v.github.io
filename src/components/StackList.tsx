type Props = {
  items: readonly string[];
  /** "chip" for cards and detail pages, "inline" for dense timeline rows. */
  variant?: "chip" | "inline";
  label?: string;
};

export function StackList({ items, variant = "chip", label = "Tech stack" }: Props) {
  if (items.length === 0) return null;

  if (variant === "inline") {
    return (
      <p className="font-mono text-xs text-ink-muted">
        <span className="sr-only">{label}: </span>
        {items.join(" · ")}
      </p>
    );
  }

  return (
    <ul aria-label={label} className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-rule bg-surface-2 px-2.5 py-1 font-mono text-[11px] leading-none text-ink-muted"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
