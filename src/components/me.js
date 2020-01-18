import React from "react"
import styled from "styled-components"
import meImage from "../images/me.jpeg"
import breakpoint from "styled-components-breakpoint"

const MeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 3rem;
  margin-top: 32px;
  ${breakpoint("sm")`
    margin-top: 0;
  `}
  p {
    margin: 0;
  }
`

const Avatar = styled.img`
  border-radius: 100%;
  background: ${meImage};
  margin: 0 0.875rem 0 0;
`

const Me = () => (
  <MeWrapper>
    <Avatar src={meImage} alt="A picture of Livio Brunner" width="62" />
    <div>
      <p>Personal Blog by Livio Brunner.</p>
      <p>Open source enthusiast.</p>
    </div>
  </MeWrapper>
)

export default Me
