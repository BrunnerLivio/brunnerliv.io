const fs = require("fs")
const template = require("lodash.template")

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

const writeDenoCard = (nodes, socialData) => {
  let denoCard = template(
    fs.readFileSync(__dirname + "/deno-card-template.ts", "utf8")
  )

  const articles = nodes.map(({ node }) => getArticle(node)).join("")
  const social = getSocial(socialData)

  fs.writeFileSync(__dirname + "/../static/me.ts", denoCard({ articles, social }))
}

module.exports = writeDenoCard
