import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"

import SEO from "../components/seo"
import ArticleLink from "../components/article-link"
import Me from "../components/me"

const Main = styled.main`
  padding: 20px;
  width: 100%;
  ${breakpoint("md")`
    width: 740px;
  `}
  
`
const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map((edge, index) => <ArticleLink key={index} post={edge.node} />)
  return (
    <>
      <SEO title="Home" />

      <Main>
        <Me />
        {posts}
      </Main>
    </>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            description
            tags
          }
        }
      }
    }
  }
`
