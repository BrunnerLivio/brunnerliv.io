import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import SEO from "../components/seo"
import breakpoint from "styled-components-breakpoint"

const Article = styled.article`
  padding: 20px;
  width: calc(100vw - 20px);
  margin-top: 16px;
  ${breakpoint("sm")`
    margin-top: 0;
  `}
  ${breakpoint("md")`
    width: 740px;
  `}
  pre {
    font-size: 12px !important;
    ${breakpoint("sm")`
      font-size: 14px !important;
    `}
    ${breakpoint("md")`
      font-size: 16px !important;
    `}
    overflow-x: auto;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }

  .gatsby-highlight {
    margin: 32px 0;
  }

  p {
    line-height: 26px;
    font-size: 1rem;
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
