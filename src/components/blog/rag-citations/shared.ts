// Mirrors packages/assistant/src/sourceAttribution in the thesis prototype.
export const SOURCE_MARKER_RE = /\[src:[^\]]*\]/g;
export const WELL_FORMED_HANDLE_RE = /^\[src:[^\]\s]+\]$/;
export const CITE_PLACEHOLDER_RE = /\[\[cite:(\d+)\]\]/g;

export type Source = {
  handle: string;
  label: string;
  category: string;
  url: string;
  page?: number;
  quote: string;
};

export type Resolved = Source & { ref: number };

export type Dropped = { marker: string; reason: "malformed" | "unknown" };

export function resolve(text: string, registry: Map<string, Source>) {
  let nextRef = 1;
  const refByHandle = new Map<string, number>();
  const resolved = new Map<number, Resolved>();
  const dropped: Dropped[] = [];

  const content = text.replace(SOURCE_MARKER_RE, (marker) => {
    if (!WELL_FORMED_HANDLE_RE.test(marker)) {
      dropped.push({ marker, reason: "malformed" });
      return "";
    }
    const handle = marker.slice(1, -1);
    const source = registry.get(handle);
    if (!source) {
      dropped.push({ marker, reason: "unknown" });
      return "";
    }
    let ref = refByHandle.get(handle);
    if (ref === undefined) {
      ref = nextRef++;
      refByHandle.set(handle, ref);
      resolved.set(ref, { ...source, ref });
    }
    return `[[cite:${ref}]]`;
  });

  return { content, sources: [...resolved.values()], dropped };
}

export const sha8 = async (input: string) => {
  const bytes = new TextEncoder().encode(input);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(digest)]
    .slice(0, 4)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
};

export const REGISTRY: Source[] = [
  {
    handle: "src:0a9f90c8",
    label: "Caritas Schweiz Jahresrechnung (p.21)",
    category: "NGO report",
    url: "https://www.caritas.ch/jahresbericht.pdf",
    page: 21,
    quote: "Von den Einnahmen sind 90,7 Prozent in die Projekte geflossen …",
  },
  {
    handle: "src:b71d0a44",
    label: "Caritas Schweiz Jahresrechnung (p.21)",
    category: "NGO report",
    url: "https://www.caritas.ch/jahresbericht.pdf",
    page: 21,
    quote: "Der Verwaltungsaufwand betrug 9,3 Prozent der Gesamtausgaben …",
  },
  {
    handle: "src:3e1c77d2",
    label: "Über uns",
    category: "NGO website",
    url: "https://www.caritas.ch/ueber-uns",
    quote: "Caritas Schweiz ist seit 1901 in der Schweiz und in rund 20 Ländern tätig …",
  },
];
