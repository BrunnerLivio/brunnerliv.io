const projects = require("./projects.json")
const navigation = require("./navigation.json")
const talks = require("./talks.json")

module.exports = {
  title: `Livio Brunner`,
  description: `Personal website by Livio Brunner. Livio scripts in Java (=JavaScript) with two spaces and semicolon. He is not the best at writing page descriptions nor at making jokes.`,
  author: `@BunnerLivio`,
  navigation: navigation,
  projects: projects,
  talks: talks,
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
