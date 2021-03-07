import * as ink from "https://deno.land/x/ink/mod.ts"
import * as cow from 'https://deno.land/x/cowsay/mod.ts'

const cowsay = cow.say({ text: "https://brunnerliv.io", cow: "cat2" });
console.log(cowsay);
console.log();
console.log("==== Latest Articles ====");
console.log();

ink.terminal.log("<b>Create your first module with Deno</b> (2020-02-21)");
ink.terminal.log("<i>In this article, we want to have a look at how to get started with your first module using Deno. We will focus on the general structure and patterns which have emerged from the Deno community thus far.</i>");
ink.terminal.log("<blue>https://brunnerliv.io/articles/create-your-first-module-with-deno</blue>\n");
ink.terminal.log("<b>Create an icon web font for your design system</b> (2020-01-03)");
ink.terminal.log("<i>Create an icon web font for your design system using Github Actions.</i>");
ink.terminal.log("<blue>https://brunnerliv.io/articles/icon-web-font</blue>\n");
ink.terminal.log("<b>Advanced NestJS: Dynamic Providers</b> (2019-08-17)");
ink.terminal.log("<i>Learn how to use dynamic providers with NestJS!</i>");
ink.terminal.log("<blue>https://brunnerliv.io/articles/advanced-nestjs-dymaic-providers</blue>\n");


console.log();
console.log("======== Social =========");
console.log();

ink.terminal.log("🐦 <blue>https://twitter.com/BrunnerLivio/</blue>");
ink.terminal.log("🐙 <blue>https://github.com/BrunnerLivio/</blue>");
ink.terminal.log("🖊️ <blue>https://dev.to/BrunnerLivio/</blue>");
ink.terminal.log("👨 <blue>https://www.linkedin.com/in/livio-brunner-151667165/</blue>");
