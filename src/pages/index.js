import React from "react"

import SEO from "../components/seo"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"

import { graphql } from "gatsby"
import ArticleLink from "../components/article-link"

const ArticleList = styled.main`
  margin-top: 28px;
  padding: 20px;
  width: 100%;
  ${breakpoint("md")`
    width: 740px;
  `}
  h1 {
    margin-bottom: 2rem;
    color: ${props => props.theme.text};
  }
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
      <ArticleList>{posts}</ArticleList>
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
