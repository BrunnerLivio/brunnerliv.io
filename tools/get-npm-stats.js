// @ts-check
const NpmApi = require("npm-api")
const stats = require("download-stats")

const npm = new NpmApi()

const BLACKLIST = ["@nestjs"]
const WHITELIST = ["@nestjs/terminus"]

function getDownloadsOfPackage(repoName) {
  return new Promise((resolve, reject) => {
    const results = []
    stats
      .get(new Date("2015-01-01"), new Date(), repoName)
      .on("error", reject)
      .on("data", data => results.push(data))
      .on("end", () => resolve(results))
  })
}

async function getTotalDownloadsOfPackage(repoName) {
  const downloads = await getDownloadsOfPackage(repoName)
  return downloads.map(a => a.downloads).reduce((a, b) => a + b, 0)
}

const isInBlackList = value =>
  BLACKLIST.some(blacklist => value.includes(blacklist))
const isInWhitelist = value =>
  WHITELIST.some(whitelist => value.includes(whitelist))

async function getNpmStats() {
  const repos = await npm.maintainer("brunnerlivio").repos()

  const allStats = []
  for (const repo of repos) {
    if (!isInBlackList(repo) || isInWhitelist(repo)) {
      console.log(`Getting stats of ${repo}`)
      const downloads = await getTotalDownloadsOfPackage(repo)
      allStats.push({ repo, downloads })
    } else {
      console.log(`Skipping ${repo}`)
    }
  }

  return {
    totalDownloads: allStats.map(a => a.downloads).reduce((a, b) => a + b, 0),
    totalRepos: allStats.length,
    repos: allStats.sort((a, b) => b.downloads - a.downloads),
  }
}

module.exports = { getNpmStats }
