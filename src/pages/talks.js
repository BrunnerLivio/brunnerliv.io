import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import SEO from "../components/seo"
import Content from "../components/content"
import Talk from "../components/talk"
import breakpoint from "styled-components-breakpoint"

const TalkList = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 48px 0;

  ${breakpoint("sm")`
  margin: 32px 0;
    `}
`

const Talks = ({ data }) => {
  const talks = data.site.siteMetadata.talks

  return (
    <>
      <SEO title="Talks" />
      <Content>
        <TalkList>
          {(talks || []).map((talk, index) => (
            <Talk key={"Talk" + index} talk={talk}></Talk>
          ))}
        </TalkList>
      </Content>
    </>
  )
}

export default Talks
export const pageQuery = graphql`
  query TalksQuery {
    site {
      siteMetadata {
        talks {
          title
          description
          youtube
          slides
          date
        }
      }
    }
  }
`
