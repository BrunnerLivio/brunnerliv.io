const path = require(`path`)
const siteMetadata = require("./content/site-metadata")
const writeDenoCard = require("./tools/write-deno-card")
const { getNpmStats } = require("./tools/get-npm-stats")

let npmStatsPromise = null
async function getNpmStatsCached() {
  if (!npmStatsPromise) {
    npmStatsPromise = getNpmStats()
  }
  return await npmStatsPromise
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/articleTemplate.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              title
              description
              path
              date
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  const npmStats = await getNpmStatsCached()
  writeDenoCard(
    result.data.allMarkdownRemark.edges,
    siteMetadata.social,
    npmStats
  )
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  const stats = await getNpmStatsCached()

  createNode({
    ...stats,
    id: "npm-stats",
    internal: {
      type: "npmStats",
      contentDigest: createContentDigest(stats),
    },
  })
}
