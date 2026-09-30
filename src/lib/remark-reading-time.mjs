// https://docs.astro.build/en/recipes/reading-time/
import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";

export function remarkReadingTime() {
  return function (tree, { data }) {
    const readingTime = getReadingTime(toString(tree));
    data.astro.frontmatter.minutesRead = readingTime.text; // "3 min read"
    data.astro.frontmatter.minutes = Math.max(1, Math.round(readingTime.minutes));
  };
}
