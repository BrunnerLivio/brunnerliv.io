import React from "react"

import SEO from "../components/seo"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faGithubAlt,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import { faPen } from "@fortawesome/free-solid-svg-icons"
import theme from "../theme/theme"
import color from "color"

const EgoSection = styled.section`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0;
  flex-direction: column;
  margin-top: 64px;
  min-height: 300px;
  h1 {
    font-size: 3em;
    color: ${props => props.theme.text};
  }
  p {
    color: ${props =>
      color(props.theme.text)
        .alpha(0.7)
        .toString()};
  }
`

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
`

const SocialButton = styled.a`
  background: ${props => props.theme.text};
  width: 30px;
  height: 30px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  border: 0;
  cursor: pointer;
  &:hover {
    background: ${props =>
      color(props.theme.text)
        .alpha(0.7)
        .toString()};
  }
`

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <EgoSection>
      <h1>Livio Brunner</h1>
      <p>Likes Open Source, Node.js and Dogs.</p>
      <Wrapper>
        <SocialButton href="https://github.com/brunnerlivio" target="_blank">
          <FontAwesomeIcon
            size="1x"
            color={theme.primaryDark}
            icon={faGithubAlt}
          />
        </SocialButton>
        <SocialButton href="https://twitter.com/brunnerlivio" target="_blank">
          <FontAwesomeIcon
            size="1x"
            color={theme.primaryDark}
            icon={faTwitter}
          />
        </SocialButton>
        <SocialButton href="https://dev.to/brunnerlivio" target="_blank">
          <FontAwesomeIcon size="1x" color={theme.primaryDark} icon={faPen} />
        </SocialButton>
        <SocialButton
          href="https://www.linkedin.com/in/livio-brunner-151667165/"
          target="_blank"
        >
          <FontAwesomeIcon
            size="1x"
            color={theme.primaryDark}
            icon={faLinkedin}
          />
        </SocialButton>
      </Wrapper>
    </EgoSection>
  </>
)

export default IndexPage
