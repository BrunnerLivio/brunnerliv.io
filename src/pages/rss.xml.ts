import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { site } from "../site";
import { getPosts } from "../lib/posts";

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: site.title,
    description: site.description,
    site: context.site!,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: `/articles/${p.id}/`,
    })),
  });
}
