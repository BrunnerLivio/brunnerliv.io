export const monthYear = (d: Date) =>
  d.toLocaleDateString("en-US", { month: "short", year: "numeric", timeZone: "UTC" });

export const longDate = (d: Date) =>
  d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
