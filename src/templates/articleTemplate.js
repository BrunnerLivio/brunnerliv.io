import React, { useEffect, useState, useRef } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"

import SEO from "../components/seo"
import Me from "../components/me"
import NeonText from "../components/neon-text"

const Article = styled.article`
  padding: 1.3125rem;
  max-width: calc(100vw - 1rem);
  margin-top: 16px;
  ${breakpoint("sm")`
    margin-top: 0;
  `}
  ${breakpoint("md")`
    width: 900px;
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
    color: ${(props) => props.theme.text};
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

const CoverImage = styled.img`
  box-shadow: 27.1px 62.5px 125px -25px rgba(50, 50, 93, 0.5),
    16.2px 37.5px 75px -37.5px rgba(0, 0, 0, 0.6);
  transform: scale(1);
  opacity: 0;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  margin: 32px 0 48px 0;
  ${breakpoint("md")`
    margin: 86px 0 126px 0;
    min-height: 350px;
  `};
  &.mounted {
    ${breakpoint("lg")`
      transform: scale(1.2);
    `}
    opacity: 1;
  }
`
const ArticleTitle = styled.h1`
  text-align: center;
  margin-bottom: 32px;
  font-weight: normal;
`
const ArticlePreview = styled.p`
  text-align: center;
  margin: 8px 0;
  font-size: 18px;
  ${breakpoint("md")`
    font-size: 22px !important;
  `};
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const [hasMounted, setHasMounted] = useState(false)
  const coverImageRef = useRef(null)

  useEffect(() => {
    const onLoad = () => setHasMounted(true)
    const coverImage = coverImageRef.current
    coverImage.addEventListener("load", onLoad)
    return () => {
      coverImage.removeEventListener("load", onLoad)
    }
  })
  return (
    <>
      <SEO title={frontmatter.title} />
      <Article>
        <ArticleTitle>
          <NeonText>{frontmatter.title}</NeonText>
        </ArticleTitle>
        <ArticlePreview>{frontmatter.description}</ArticlePreview>
        <CoverImage
          ref={coverImageRef}
          className={hasMounted ? "mounted" : ""}
          src={frontmatter.cover_image}
          alt={`Cover of the article ${frontmatter.title}`}
        />
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
        description
        cover_image
      }
    }
  }
`
