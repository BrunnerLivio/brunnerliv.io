import React from "react"
import styled from "styled-components"
import Stars from "./stars"
import breakpoint from "styled-components-breakpoint"
import MountainPaths from "./mountain"

const Mountain = styled.svg`
  width: 100%;
  height: 350px;
  bottom: 0;
  position: absolute;
  margin-bottom: -140px;
  z-index: 2;
  ${breakpoint("sm")`
    height: 500px;
  `}
`

const HeaderWrapper = styled.header`
  margin: 0;
  background: ${props => props.theme.primary};
  background: radial-gradient(
    circle,
    ${props => props.theme.primary},
    ${props => props.theme.primaryDark}
  );
  background-repeat: no-repeat;
  width: 100%;
  position: relative;
  padding: 0;
  height: 120px;
  ${breakpoint("sm")`
    height: 40vh;
    min-height: 300px;
  `}
  overflow: hidden;
`

const Sunset = styled.section`
  width: 100%;
  height: 90%;
  display: block;
  position: absolute;
  bottom: 0;
  background-image: linear-gradient(
    180deg,
    hsla(0, 0%, 100%, 0),
    ${props => props.theme.accent}
  );
  background-repeat: repeat-x;
  opacity: 0.38;
  z-index: 1;
`

const _Header = () => (
  <HeaderWrapper>
    <Sunset />
    <Stars />
    <Mountain svg x="0px" y="0px" viewBox="0 0 457.76 251.52">
      <MountainPaths></MountainPaths>
    </Mountain>
  </HeaderWrapper>
)

// Do not rerender if not needed
const Header = React.memo(_Header, () => true)

export default Header
