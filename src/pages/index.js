import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { md, lg } from "../components/breakpoints"

import Seo from "../components/seo"
import ArticleLink from "../components/article-link"

const Main = styled.main`
  padding: 20px;
  width: 100%;
  margin: 0;
  ${md`
    width: 740px;
  `}

  ${lg`
    width: 940px;
  `}
`
const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const posts = edges
    .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map((edge, index) => <ArticleLink key={index} post={edge.node} />)
  return (
    <>
      <Seo title="Home" />

      <Main>{posts}</Main>
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
