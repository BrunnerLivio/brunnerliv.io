import type { ReactNode } from "react";

export const Badge = ({ refs, onClick }: { refs: number[]; onClick?: () => void }) => (
  <button
    type="button"
    onClick={onClick}
    className="border-border text-text hover:border-link hover:text-link mx-0.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full border px-1.5 align-text-top font-mono text-[11px]"
    aria-label={`Sources ${refs.join(", ")}`}
  >
    {refs.join(", ")}
  </button>
);

/** Renders text with [[cite:N]] placeholders as inline badges. */
export const CitedText = ({ text, onBadge }: { text: string; onBadge?: (refs: number[]) => void }) => {
  const parts: ReactNode[] = [];
  const re = /((?:\[\[cite:\d+\]\][ ,]*)+)/g;
  let last = 0;
  for (const m of text.matchAll(re)) {
    parts.push(text.slice(last, m.index));
    const refs = [...m[0].matchAll(/\[\[cite:(\d+)\]\]/g)].map((x) => Number(x[1]));
    const uniq = [...new Set(refs)].toSorted((a, b) => a - b);
    parts.push(<Badge key={m.index} refs={uniq} onClick={() => onBadge?.(uniq)} />);
    last = m.index + m[0].length;
  }
  parts.push(text.slice(last));
  return <>{parts}</>;
};

export const Panel = ({
  title,
  children,
  className = "",
}: {
  title?: string;
  children: ReactNode;
  className?: string;
}) => (
  <div className={`rounded-plate border-hairline bg-code-bg/60 border p-4 ${className}`}>
    {title && <div className="text-meta text-muted mb-2 font-mono tracking-[0.16em] uppercase">{title}</div>}
    {children}
  </div>
);

export const Mono = ({ children }: { children: ReactNode }) => (
  <pre className="text-body m-0 overflow-x-auto font-mono text-[13px] leading-relaxed whitespace-pre-wrap">
    {children}
  </pre>
);

export const Frame = ({ children }: { children: ReactNode }) => (
  <div className="not-prose rounded-plate border-hairline text-body my-2 flex flex-col gap-3 border p-4 text-[15px] leading-normal">
    {children}
  </div>
);
