import { useEffect, useState } from "react";
import { sha8 } from "./shared";
import { Frame, Mono, Panel } from "./ui";

const field =
  "rounded-plate border border-hairline bg-code-bg/60 px-3 py-2 font-mono text-[13px] text-body focus:border-link focus:outline-none";

export default function HandleDemo() {
  const [type, setType] = useState("ngo_report");
  const [url, setUrl] = useState("https://www.caritas.ch/jahresbericht.pdf");
  const [page, setPage] = useState("21");
  const [passage, setPassage] = useState("Von den Einnahmen sind 90,7 Prozent in die Projekte geflossen.");
  const [out, setOut] = useState({ id: "", handle: "" });

  useEffect(() => {
    let live = true;
    (async () => {
      const base = `rag:${type}:${await sha8(url)}`;
      const withPage = page.trim() ? `${base}#p${page.trim()}` : base;
      const id = `${withPage}#s${await sha8(passage.replace(/\s+/g, " ").trim())}`;
      const handle = `src:${await sha8(id)}`;
      if (live) setOut({ id, handle });
    })();
    return () => {
      live = false;
    };
  }, [type, url, page, passage]);

  return (
    <Frame>
      <div className="grid gap-3 sm:grid-cols-[auto_1fr_auto]">
        <select value={type} onChange={(e) => setType(e.target.value)} className={field}>
          <option value="ngo_report">ngo_report</option>
          <option value="ngo_website">ngo_website</option>
          <option value="donation_report">donation_report</option>
        </select>
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className={field}
          aria-label="Source URL"
        />
        <input
          value={page}
          onChange={(e) => setPage(e.target.value)}
          className={`${field} w-20`}
          placeholder="page"
          aria-label="Page"
        />
      </div>
      <textarea
        value={passage}
        onChange={(e) => setPassage(e.target.value)}
        rows={2}
        className={field}
        aria-label="Passage text"
      />
      <Panel title="internal id — stable, never shown to the model">
        <Mono>{out.id}</Mono>
      </Panel>
      <Panel title="handle — what the model sees and copies">
        <Mono>[{out.handle}]</Mono>
      </Panel>
      <p className="text-muted m-0">
        Change one character of the passage or the page and both values change. Retrieve the same passage
        twice in one turn and you get the same handle, so duplicates collapse without any coordination.
      </p>
    </Frame>
  );
}
