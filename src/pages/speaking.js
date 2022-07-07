import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Seo from "../components/seo"
import Content from "../components/content"
import Talk from "../components/talk"

const TalkList = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 0px 0;
`

const Talks = ({ data }) => {
  const talks = data.site.siteMetadata.talks

  return (
    <>
      <Seo title="Speaking" />
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
