import React from "react"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"

import Stars from "./stars"
import Sunset from "./sunset"
import Mountain from "./mountain"
import VHS from "./vhs"

const HeaderWrapper = styled.header`
  margin: 0;
  background: var(--primary);
  background: radial-gradient(
    circle,
    var(--primary),
    var(--primary-dark)
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

const Header = ({ children }) => (
  <HeaderWrapper>
    <VHS />
    <HeaderContent>{children}</HeaderContent>
    <Mountain />
    <HeaderBackground>
      <Stars />
      <Sunset />
    </HeaderBackground>
  </HeaderWrapper>
)

export default Header
