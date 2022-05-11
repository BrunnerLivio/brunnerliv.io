import React from "react"
import styled from "styled-components"

import { FontAwesomeIcon as _FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faGithubAlt,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import { faPen } from "@fortawesome/free-solid-svg-icons"

const FontAwesomeIcon = styled(_FontAwesomeIcon)`
  color: var(--primary);
`
const EgoSection = styled.section`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0;
  flex-direction: column;
  margin-bottom: 64px;
  h1 {
    font-size: 3em;
    color: var(--text);
  }
  p {
    color: var(--text);
  }
`

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
`

const SocialButton = styled.a`
  background: var(--accent);
  width: 30px;
  height: 30px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  border: 0;
  cursor: pointer;
  box-shadow: 0px 0px 2px
       var(--accent),
    0px 0px 14px var(--accent);
  &:hover {
    background: var(--accent);
  }
`

const Footer = () => (
  <>
    <EgoSection>
      <Wrapper>
        <SocialButton
          href="https://github.com/brunnerlivio"
          target="_blank"
          rel="noreferrer"
          aria-label="Goto Livios Github"
        >
          <FontAwesomeIcon size="1x" icon={faGithubAlt} />
        </SocialButton>
        <SocialButton
          href="https://twitter.com/brunnerlivio"
          target="_blank"
          rel="noreferrer"
          aria-label="Goto Livios Twitter"
        >
          <FontAwesomeIcon size="1x" icon={faTwitter} />
        </SocialButton>
        <SocialButton
          href="https://dev.to/brunnerlivio"
          target="_blank"
          rel="noreferrer"
          aria-label="Goto Livios Articles on dev.to"
        >
          <FontAwesomeIcon size="1x" icon={faPen} />
        </SocialButton>
        <SocialButton
          href="https://www.linkedin.com/in/livio-brunner-151667165/"
          target="_blank"
          rel="noreferrer"
          aria-label="Goto Livios LinkedIn"
        >
          <FontAwesomeIcon size="1x" icon={faLinkedin} />
        </SocialButton>
      </Wrapper>
    </EgoSection>
  </>
)

export default Footer
