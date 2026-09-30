import { getCollection } from "astro:content";

/** Published posts, newest first. */
export const getPosts = async () =>
  (await getCollection("blog", ({ data }) => import.meta.env.DEV || !data.draft)).toSorted(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
