import { useState } from "react";
import { Badge, Frame, Mono, Panel } from "./ui";

const STAGES = [
  {
    title: "User input",
    who: "browser",
    note: "The router classifies the turn as an organisation lookup and hands it to the lookup agent, the only agent with retrieval tools.",
    body: <Mono>{`"Wie viel von meiner Spende geht an den Zweck bei Caritas Schweiz?"`}</Mono>,
  },
  {
    title: "Tool calls",
    who: "lookup agent",
    note: "The model writes the search query itself and picks k. Nothing about citations has happened yet.",
    body: (
      <Mono>{`find_organisation("Caritas Schweiz")
search_ngo_reports({ query: "Anteil der Spenden für Projekte", ngo_id: "org-123", k: 4 })`}</Mono>
    ),
  },
  {
    title: "Retrieval output",
    who: "server → model",
    note: "The tool returns two things. The text is what the model reads: each passage under an opaque handle, plus a guide listing the handles it may copy. The artifact is structured data the model never sees.",
    body: (
      <div className="flex flex-col gap-3">
        <Panel title="content (visible to the model)">
          <Mono>{`[src:0a9f90c8]
Von den Einnahmen sind 90,7 Prozent in die Projekte geflossen …

---

[src:b71d0a44]
Der Verwaltungsaufwand betrug 9,3 Prozent der Gesamtausgaben …

Citable sources — to cite a grounded claim, append the exact
bracketed source handle shown here:
[src:0a9f90c8] — Caritas Schweiz Jahresrechnung (p.21)
[src:b71d0a44] — Caritas Schweiz Jahresrechnung (p.21)`}</Mono>
        </Panel>
        <Panel title="artifact (hidden from the model)">
          <Mono>{`[{ id: "rag:ngo_report:7c2e…#p21#s91af…", handle: "src:0a9f90c8",
   category: "ngo_report", label: "Caritas Schweiz Jahresrechnung (p.21)",
   url: "https://…/jahresbericht.pdf", page: 21,
   quote: "Von den Einnahmen sind 90,7 Prozent …" }, …]`}</Mono>
        </Panel>
      </div>
    ),
  },
  {
    title: "Model output",
    who: "lookup agent",
    note: "The model copies the handle after the claim it supports. That is the only thing it can do with a handle: copy it or leave it out.",
    body: <Mono>{`Von den Einnahmen flossen 90,7 % in die Projekte [src:0a9f90c8].`}</Mono>,
  },
  {
    title: "Server output",
    who: "server",
    note: "After the reply is complete, every marker is checked against the handles registered from this turn's tool artifacts. Known handles become numbered placeholders; anything else is removed.",
    body: (
      <div className="flex flex-col gap-3">
        <Mono>{`Von den Einnahmen flossen 90,7 % in die Projekte [[cite:1]].`}</Mono>
        <Panel title="sources">
          <Mono>{`[{ ref: 1, category: "ngo_report", page: 21,
   label: "Caritas Schweiz Jahresrechnung", url: "https://…/jahresbericht.pdf#page=21",
   quote: "Von den Einnahmen sind 90,7 Prozent in die Projekte geflossen …" }]`}</Mono>
        </Panel>
      </div>
    ),
  },
  {
    title: "Client output",
    who: "browser",
    note: "Placeholders render as neutral numbered badges. Clicking one opens the source details: label, category, and the exact passage that was retrieved.",
    body: (
      <div className="flex flex-col gap-3">
        <p className="m-0">
          Von den Einnahmen flossen 90,7 % in die Projekte. <Badge refs={[1]} />
        </p>
        <Panel title="Quellen für diese Aussage">
          <div className="flex gap-3">
            <Badge refs={[1]} />
            <div>
              <div className="text-text">Caritas Schweiz Jahresrechnung (p.21)</div>
              <div className="text-meta text-muted font-mono">NGO report</div>
              <blockquote className="border-hairline text-muted mt-2 border-l-2 pl-3 italic">
                Von den Einnahmen sind 90,7 Prozent in die Projekte geflossen …
              </blockquote>
            </div>
          </div>
        </Panel>
      </div>
    ),
  },
];

export default function PipelineTrace() {
  const [i, setI] = useState(0);
  const stage = STAGES[i];
  return (
    <Frame>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Pipeline stages">
        {STAGES.map((s, n) => (
          <button
            key={s.title}
            type="button"
            role="tab"
            aria-selected={n === i}
            onClick={() => setI(n)}
            className={`rounded-pill text-meta border px-3 py-1 font-mono tracking-[0.12em] uppercase ${
              n === i ? "border-link text-text" : "border-border text-muted hover:text-text"
            }`}
          >
            {n + 1} · {s.title}
          </button>
        ))}
      </div>
      <div className="text-meta text-muted font-mono">{stage.who}</div>
      {stage.body}
      <p className="text-muted m-0">{stage.note}</p>
      <div className="text-meta flex justify-between font-mono">
        <button
          type="button"
          disabled={i === 0}
          onClick={() => setI(i - 1)}
          className="text-link disabled:text-border"
        >
          ← previous
        </button>
        <button
          type="button"
          disabled={i === STAGES.length - 1}
          onClick={() => setI(i + 1)}
          className="text-link disabled:text-border"
        >
          next →
        </button>
      </div>
    </Frame>
  );
}
