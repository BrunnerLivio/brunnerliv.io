import * as ink from "https://deno.land/x/ink/mod.ts"
import * as cow from 'https://deno.land/x/cowsay/mod.ts'

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