const fs = require("fs")
const nunjucks = require("nunjucks")


function getArticle(node) {
  return `ink.terminal.log("<b>${node.frontmatter.title}</b> (${node.frontmatter.date})");
ink.terminal.log("<i>${node.frontmatter.description}</i>");
ink.terminal.log("<blue>https://brunnerliv.io${node.frontmatter.path}</blue>\\n");
`
}
function getSocial(socialData) {
  return `ink.terminal.log("🐦 <blue>${socialData.twitter.path}</blue>");
ink.terminal.log("🐙 <blue>${socialData.github.path}</blue>");
ink.terminal.log("🖊️ <blue>${socialData.dev.path}</blue>");
ink.terminal.log("👨 <blue>${socialData.linkedIn.path}</blue>");
`
}

const writeDenoCard = (articles, social, npm) => {
  let denoCardTemplate = fs.readFileSync(
    __dirname + "/deno-card-template.ts",
    "utf8"
  )

  const path = __dirname + "/../static/me.ts"
  console.log(`Writing deno card to ${path}`)

  fs.writeFileSync(
    path,
    nunjucks.renderString(denoCardTemplate, {
      articles,
      social,
      npm,
    })
  )
}

module.exports = writeDenoCard
