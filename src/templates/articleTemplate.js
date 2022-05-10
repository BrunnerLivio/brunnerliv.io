import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { sm, md } from "../components/breakpoints";

import Seo from "../components/seo"
import Me from "../components/me"
import NeonText from "../components/neon-text"

const Article = styled.article`
  padding: 1.3125rem;
  max-width: calc(100vw - 1rem);
  margin-top: 16px;
  ${sm`
    margin-top: 0;
  `}
  ${md`
    width: 900px;
  `}
  font-family: var(--sans-serif);

  & > div > p + p {
    margin-top: 4vmin;
  }

  pre {
    margin-left: 0 !important;
    padding: 1.3125rem !important;
    font-size: 14px !important;
    border-radius: 0 !important;
    overflow-x: auto !important;
    margin-top: 4em !important;
    margin-bottom: 4em !important;

    ${sm`
      border-radius: 3px !important;
    `}
    ${md`
      font-size: 1.2em !important;
    `}
  }

  .language-text {
    font-size: 0.9em;
    margin-left: 8px;
    margin-right: 8px;
  }

  .gatsby-highlight {
    margin-top: 16px;
    margin-bottom: 16px;
    margin-left: -1.3125rem;
    margin-right: -1.3125rem;
  }

  h2 {
    line-height: 1.5em;
    font-size: 2.4em;
    margin-top: 3em;
    font-weight: 700;
    font-weight: 600;
    font-family: var(--sans-serif);
    color: var(--title-text);
  }

  h3 {
    line-height: 2em;
    font-size: 1.8em;
    font-weight: 600;
    margin-top: 2em;
    font-weight: normal;
    margin-bottom: 0.5em;
    font-family:  var(--sans-serif);
    color: var(--title-text);
  }

  p, li {
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.6em;
  }
  
  ul {
    margin: 2em 1em;
  }

  a {
    font-size: 1em;
  }

  img {
    margin: 2em auto;
  }

  table {
    margin: 3em 0;
    font-family: var(--sans-serif);
    font-size: 1.3rem;
    line-height: 1.6em;

    th:empty  {
      display: none;
    }

    tr:nth-child(odd) {
      background: rgba(0, 0, 0, 0.2);
    }

    td {
      padding: 1em;
    }

    td,th {
      border: 0;
    }
  }
 
`

// const CoverImage = styled.img`
//   box-shadow: 27.1px 62.5px 125px -25px rgba(50, 50, 93, 0.5),
//     16.2px 37.5px 75px -37.5px rgba(0, 0, 0, 0.6);
//   transform: scale(1);
//   opacity: 0;
//   transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
//   margin: 32px 0 48px 0;
//   ${breakpoint("md")`
//     margin: 86px 0 126px 0;
//     min-height: 350px;
//   `};
//   &.mounted {
//     ${breakpoint("lg")`
//       transform: scale(1.2);
//     `}
//     opacity: 1;
//   }
// `
const ArticleTitle = styled.h1`
  margin-bottom: 2em;
  font-weight: normal;
  text-align: center;
`
// const ArticlePreview = styled.p`
//   margin: 8px 0;
//   font-size: 18px;
//   margin-bottom: 4em;
//   ${breakpoint("md")`
//     font-size: 22px !important;
//   `};
// `

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  // const [hasMounted, setHasMounted] = useState(false)
  // const coverImageRef = useRef(null)

  // useEffect(() => {
  //   const onLoad = () => setHasMounted(true)
  //   const coverImage = coverImageRef.current
  //   coverImage.addEventListener("load", onLoad)
  //   return () => {
  //     coverImage.removeEventListener("load", onLoad)
  //   }
  // })
  return (
    <>
      <Seo title={frontmatter.title} />
      <Article>
        <ArticleTitle>
          <NeonText text={frontmatter.title}></NeonText>
        </ArticleTitle>
        {/* <ArticlePreview>{frontmatter.description}</ArticlePreview> */}
        {/* <CoverImage
          ref={coverImageRef}
          className={hasMounted ? "mounted" : ""}
          src={frontmatter.cover_image}
          alt={`Cover of the article ${frontmatter.title}`}
        /> */}
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <script src="https://utteranc.es/client.js"
                repo="brunnerlivio/articles"
                issue-term="title"
                label="comments 💬"
                theme="preferred-color-scheme"
                crossorigin="anonymous"
                async>
        </script>
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
