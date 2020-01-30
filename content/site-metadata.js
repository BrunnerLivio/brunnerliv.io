const projects = require("./projects.json")
const navigation = require("./navigation.json")

module.exports = {
  title: `brunnerliv.io`,
  description: `The personal website of Livio Brunner.`,
  author: `@BunnerLivio`,
  navigation: navigation,
  projects: projects,
  social: {
    twitter: {
      username: "brunnerlivio",
      path: "https://twitter.com/BrunnerLivio/",
    },
    github: {
      username: "brunnerlivio",
      path: "https://github.com/BrunnerLivio/",
    },
    dev: {
      username: "brunnerlivio",
      path: "https://dev.to/BrunnerLivio/",
    },
    linkedIn: {
      username: "Livio Brunner",
      path: "https://www.linkedin.com/in/livio-brunner-151667165/",
    },
  },
}
