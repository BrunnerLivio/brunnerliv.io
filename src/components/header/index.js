import React from "react"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"

import Stars from "./stars"
import Sunset from "./sunset"
import Mountain from "./mountain"

const HeaderWrapper = styled.header`
  margin: 0;
  background: ${(props) => props.theme.primary};
  background: radial-gradient(
    circle,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.primaryDark}
  );
  background-repeat: no-repeat;
  width: 100%;
  position: relative;
  padding: 0;
  height: 120px;
  ${breakpoint("sm")`
    min-height: 160px;
  `}
  ${breakpoint("md")`
    min-height: 200px;
  `}
  ${breakpoint("lg")`
    min-height: 250px;
  `}
  overflow: hidden;
`

const HeaderContent = styled.div`
  position: absolute;
  right: 16px;
  top: 16px;
  z-index: 4;
`
const HeaderBackground = styled.div`
  position: fixed;
  z-index: 0;
  top: 0;
  width: 100vw;
  height: 380px;
  left: 0;
  overflow: hidden;
`

function drawVhsLines(color) {
  let boxShadow = []

  for (let i = 0; i <= 380; i += 8) {
    boxShadow.push(`0 ${i}px 0 ${color}`)
  }

  return boxShadow.join(",")
}

const VHSLines = styled.div`
  position: absolute;
  width: 100%;
  background: ${(props) => props.color};
  top: 4px;
  height: 1px;
  box-shadow: ${(props) => drawVhsLines(props.color)};
`

const Header = ({ children }) => (
  <HeaderWrapper>
    <VHSLines color="rgba(0,0,0,0.2)" />
    <HeaderContent>{children}</HeaderContent>
    <Mountain />
    <HeaderBackground>
      <Stars />
      <Sunset />
    </HeaderBackground>
  </HeaderWrapper>
)

export default Header
