#!/usr/bin/env -S deno run
import * as cow from "https://cdn.deno.land/cowsay/versions/1.1/raw/mod.ts";
import * as ink from "https://deno.land/x/ink/mod.ts";

const cowsay = cow.say({ text: "Welcome to my website in ✨ Deno ✨ - https://brunnerliv.io", cow: "cat2" });
console.log(cowsay);
console.log();
console.log("======= Latest Articles =======");
console.log();

{% for article in articles %}
console.log(ink.html("<ink style='background-color: #4038a5;color: #FF7779;font:bold;'>{{article.node.frontmatter.title}} ({{article.node.frontmatter.date}})</ink>"));
ink.terminal.log("<i>{{article.node.frontmatter.description}}</i>");
ink.terminal.log("<blue>https://brunnerliv.io{{article.node.frontmatter.path}}</blue>\n");
{% endfor %}

console.log();
console.log("======== Package Downloads via npm =========");
console.log();

ink.terminal.log("<blue>{{npm.totalDownloads}}</blue> Downloads")
console.log()


ink.terminal.log("🐦 <blue>{{social.twitter.path}}</blue> | 🐙 <blue>{{social.github.path}}</blue> | 🖊️ <blue>{{social.dev.path}}</blue> | 👨 <blue>{{social.linkedIn.path}}</blue>");

