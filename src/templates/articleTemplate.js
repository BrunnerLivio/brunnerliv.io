import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"

import SEO from "../components/seo"
import Me from "../components/me"

const Article = styled.article`
  padding: 1.3125rem;
  max-width: calc(100vw - 1rem);
  margin-top: 16px;
  ${breakpoint("sm")`
    margin-top: 0;
  `}
  ${breakpoint("md")`
    width: 740px;
  `}
  pre {
    margin-left: 0 !important;
    padding: 1.3125rem !important;
    font-size: 14px !important;
    border-radius: 0 !important;
    overflow-x: auto !important;

    ${breakpoint("sm")`
      border-radius: 3px !important;
    `}
    ${breakpoint("md")`
      font-size: 16px !important;
    `}
  }

  p > .language-text {
    background: none;
    color: ${props => props.theme.text};
  }

  .gatsby-highlight {
    margin-top: 16px;
    margin-bottom: 16px;
    margin-left: -1.3125rem;
    margin-right: -1.3125rem;

  }

  p {
    line-height: 28px;
    font-size: 18px;
  }
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <SEO title={frontmatter.title} />
      <Article>
        <h1>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Article>
      <Me />
    </>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
