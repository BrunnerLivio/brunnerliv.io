import { useEffect, useRef, useState } from "react";
import { REGISTRY, resolve } from "./shared";
import { CitedText, Frame, Panel } from "./ui";

const REPLY =
  "Von den Einnahmen flossen 90,7 % in die Projekte [src:0a9f90c8]. Der Verwaltungsaufwand lag bei 9,3 % [src:b71d0a44]. Die Organisation ist seit 1901 tätig [src:3e1c77d2] und ist nach eigenen Angaben ZEWO-zertifiziert [src:ghost].";

// Same masks the UI applies to streamed deltas.
const SOURCE_HANDLE_RE = /\[src:[^\]]*(\]|$)/g;

const chunks = (s: string) => s.match(/.{1,4}/g) ?? [];

export default function StreamingDemo() {
  const [streamed, setStreamed] = useState("");
  const [done, setDone] = useState(false);
  const [showRaw, setShowRaw] = useState(false);
  const timer = useRef<number | null>(null);
  const registry = new Map(REGISTRY.map((s) => [s.handle, s]));

  const stop = () => {
    if (timer.current) window.clearInterval(timer.current);
    timer.current = null;
  };
  const play = () => {
    stop();
    setStreamed("");
    setDone(false);
    const parts = chunks(REPLY);
    let n = 0;
    timer.current = window.setInterval(() => {
      n++;
      setStreamed(parts.slice(0, n).join(""));
      if (n >= parts.length) {
        stop();
        window.setTimeout(() => setDone(true), 400);
      }
    }, 45);
  };
  useEffect(() => stop, []);

  const final = resolve(REPLY, registry);
  const masked = streamed.replace(SOURCE_HANDLE_RE, "");

  return (
    <Frame>
      <div className="text-meta flex flex-wrap items-center gap-4 font-mono">
        <button
          type="button"
          onClick={play}
          className="rounded-pill border-link text-text hover:text-link border px-3 py-1 tracking-[0.12em] uppercase"
        >
          {streamed ? "replay" : "play"}
        </button>
        <label className="text-muted flex items-center gap-2">
          <input type="checkbox" checked={showRaw} onChange={(e) => setShowRaw(e.target.checked)} /> show raw
          stream
        </label>
        <span className="text-muted">{done ? "final event received" : streamed ? "streaming…" : "idle"}</span>
      </div>
      {showRaw && (
        <Panel title="raw deltas from the model">
          <p className="text-body m-0 font-mono text-[13px] whitespace-pre-wrap">{streamed || " "}</p>
        </Panel>
      )}
      <Panel title="what the user sees">
        <p className="m-0 min-h-12 whitespace-pre-wrap">
          {done ? <CitedText text={final.content} /> : masked}
          {!done && streamed && <span className="text-link animate-pulse">▍</span>}
        </p>
      </Panel>
      <p className="text-muted m-0">
        While streaming, handles are masked out by a regex, including a half-arrived one at the end of the
        buffer. When the final event lands, the streamed text is replaced by the resolved version and all
        badges appear at once. The invented <code className="text-code">[src:ghost]</code> never shows up in
        either view.
      </p>
    </Frame>
  );
}
