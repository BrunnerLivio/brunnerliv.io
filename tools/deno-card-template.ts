import * as cow from "https://cdn.deno.land/cowsay/versions/1.1/raw/mod.ts";
import * as ink from "https://cdn.deno.land/ink/versions/1.3/raw/mod.ts";

const cowsay = cow.say({ text: "https://brunnerliv.io", cow: "cat2" });
console.log(cowsay);
console.log();
console.log("==== Latest Articles ====");
console.log();

${ articles }

console.log();
console.log("======== Social =========");
console.log();

${ social }