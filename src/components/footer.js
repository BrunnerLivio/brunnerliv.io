import React from "react"
import styled from "styled-components"

import NeonIcon from "./neon-icon";
import {
  faTwitter,
  faGithubAlt,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import { faPen } from "@fortawesome/free-solid-svg-icons"

const EgoSection = styled.section`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0;
  flex-direction: column;
  margin-top: 2em;
  margin-bottom: 8em;
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
  gap: 2em;
  flex-wrap: wrap;
`

const SocialButton = styled.a`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  border: 0;
  cursor: pointer;
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
          <NeonIcon size="2x" icon={faGithubAlt} />
        </SocialButton>
        <SocialButton
          href="https://twitter.com/brunnerlivio"
          target="_blank"
          rel="noreferrer"
          aria-label="Goto Livios Twitter"
        >
          <NeonIcon size="2x" icon={faTwitter} />
        </SocialButton>
        <SocialButton
          href="https://dev.to/brunnerlivio"
          target="_blank"
          rel="noreferrer"
          aria-label="Goto Livios Articles on dev.to"
        >
          <NeonIcon size="2x" icon={faPen} />
        </SocialButton>
        <SocialButton
          href="https://www.linkedin.com/in/livio-brunner-151667165/"
          target="_blank"
          rel="noreferrer"
          aria-label="Goto Livios LinkedIn"
        >
          <NeonIcon size="2x" icon={faLinkedin} />
        </SocialButton>
      </Wrapper>
    </EgoSection>
  </>
)

export default Footer
