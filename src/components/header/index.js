import React, { useContext } from "react"
import styled from "styled-components"
import { sm, md, lg } from "../breakpoints"

import Stars from "./stars"
import Sunset from "./sunset"
import Mountain from "./mountain"
import Vhs from "./vhs"
import { ThemeContext } from "../layout"

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
  ${sm`
    min-height: 160px;
  `}
  ${md`
    min-height: 200px;
  `}
  ${lg`
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

const Header = ({ children }) => {
  const darkMode = useContext(ThemeContext);
  return (<HeaderWrapper>
    <Vhs />
    <HeaderContent>{children}</HeaderContent>
    <Mountain />
    <HeaderBackground>
      <Stars direction={darkMode ? "up" : "down"} />
      <Sunset />
    </HeaderBackground>
  </HeaderWrapper>)
}

export default Header
