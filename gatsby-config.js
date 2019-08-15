module.exports = {
  siteMetadata: {
    title: `brunnerliv.io`,
    description: `The personal website of Livio Brunner.`,
    author: `@BunnerLivio`,
    navigation: [
      {
        to: "/",
        name: "Home",
      },
      {
        to: "/projects",
        name: "Projects",
      },
      {
        to: "https://dev.to/brunnerlivio",
        name: "Articles",
      }
    ],
    projects: [
      {
        sourceCode: "https://github.com/BrunnerLivio/brunnerliv.io",
        name: "brunnerliv.io",
        description: "My personal website.",
        languages: ["JavaScript", "React"],
      },
      {
        sourceCode: "https://github.com/nestjs/terminus",
        name: "Terminus",
        description: "Integrated healthchecks for NestJS.",
        languages: ["TypeScript", "NestJS"],
      },
      {
        sourceCode: "https://github.com/Roche/lxdhub",
        name: "LXDHub",
        description:
          "Display, search and copy LXC images using a web interface.",
        languages: ["TypeScript", "NestJS"],
      },
      {
        sourceCode: "https://github.com/BrunnerLivio/try",
        name: "try",
        description: "Quickly try out npm packages inside a container.",
        languages: ["JavaScript"],
      },
      {
        sourceCode: "https://github.com/BrunnerLivio/Schochi.ch",
        name: "schochi.ch",
        description: "The official website for Schochi.",
        languages: ["JavaScript", "Vue.js"],
      },
      {
        sourceCode: "https://github.com/BrunnerLivio/mk-deps",
        name: "mk-deps",
        description:
          "Cli tool for installing runtime dependencies of a debian package",
        languages: ["Python"],
      },
    ],
    contributions: [
      {
        sourceCode: "https://github.com/angular/dgeni",
        name: "Dgeni",
        description:
          "Flexible JavaScript documentation generator used by AngularJS, Protractor and other JS projects.",
        languages: ["JavaScript", "TypeScript"],
      },
      {
        sourceCode: "https://github.com/nestjs/nest",
        name: "NestJS",
        description:
          "A progressive Node.js framework for building efficient and scalable server-side applications.",
        languages: ["TypeScript", "NestJS"],
      },
      {
        sourceCode: "https://github.com/molior-dbs/molior",
        name: "Molior",
        description:
          "A debian build system.",
        languages: ["TypeScript", "Python"],
      },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    // `gatsby-transformer-remark`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `content`,
    //     path: `${__dirname}/src/content`,
    //   },
    // },
     {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-78529910-1",
      },
    },
    `react-static-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `brunnerliv.io`,
        short_name: `bl`,
        start_url: `/`,
        background_color: `#4038a5`,
        theme_color: `#4038a5`,
        display: `minimal-ui`,
        icon: `src/images/lb-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.js`),
      },
    },
  ],
}
