import { useMemo, useState } from "react";
import { REGISTRY, resolve } from "./shared";
import { CitedText, Frame, Panel } from "./ui";

const DEFAULT = `Von den Einnahmen flossen 90,7 % in die Projekte [src:0a9f90c8]. Der Verwaltungsaufwand lag bei 9,3 % [src:b71d0a44]. Die Organisation ist seit 1901 tätig [src:3e1c77d2] und arbeitet in rund 20 Ländern [src:3e1c77d2].

Sie ist ZEWO-zertifiziert [src:ghost] und hat 2023 ihr Budget erhöht [src:score=0.31 (page 15)].`;

export default function CitationResolver() {
  const [text, setText] = useState(DEFAULT);
  const registry = useMemo(() => new Map(REGISTRY.map((s) => [s.handle, s])), []);
  const result = useMemo(() => resolve(text, registry), [text, registry]);

  return (
    <Frame>
      <Panel title="registry — handles returned by this turn's tool calls">
        <div className="flex flex-wrap gap-2">
          {REGISTRY.map((s) => (
            <span
              key={s.handle}
              className="rounded-pill border-border text-meta text-text border px-2 py-0.5 font-mono"
            >
              [{s.handle}] <span className="text-muted">{s.label}</span>
            </span>
          ))}
        </div>
      </Panel>
      <label className="flex flex-col gap-2">
        <span className="text-meta text-muted font-mono tracking-[0.16em] uppercase">
          model output — edit me
        </span>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={6}
          spellCheck={false}
          className="rounded-plate border-hairline bg-code-bg/60 text-body focus:border-link w-full border p-3 font-mono text-[13px] leading-relaxed focus:outline-none"
        />
      </label>
      <Panel title="what the user sees">
        <p className="m-0 whitespace-pre-wrap">
          <CitedText text={result.content} />
        </p>
      </Panel>
      <div className="grid gap-3 sm:grid-cols-2">
        <Panel title="sources, numbered by first appearance">
          <ol className="m-0 flex list-none flex-col gap-1 p-0">
            {result.sources.map((s) => (
              <li key={s.ref} className="flex gap-2">
                <span className="text-meta text-muted font-mono">{s.ref}</span>
                <span>
                  {s.label} <span className="text-meta text-muted font-mono">{s.category}</span>
                </span>
              </li>
            ))}
            {result.sources.length === 0 && <li className="text-muted">none</li>}
          </ol>
        </Panel>
        <Panel title="dropped">
          <ul className="m-0 flex list-none flex-col gap-1 p-0">
            {result.dropped.map((d, n) => (
              <li key={n} className="flex flex-wrap gap-2">
                <code className="text-code font-mono text-[12px]">{d.marker}</code>
                <span className="text-meta text-muted font-mono">
                  {d.reason === "unknown" ? "not in registry" : "malformed"}
                </span>
              </li>
            ))}
            {result.dropped.length === 0 && <li className="text-muted">nothing</li>}
          </ul>
        </Panel>
      </div>
    </Frame>
  );
}
