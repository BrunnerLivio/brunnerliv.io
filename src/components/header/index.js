import React, { useContext } from "react"
import styled from "styled-components"
import { sm, md, lg } from "../breakpoints"

import Clouds from "./clouds"
import Stars from "./stars"
import Sunset from "./sunset"
import Mountain from "./mountain"
import { ThemeContext } from "../layout"

const HeaderWrapper = styled.header`
  margin: 0;
  background-color: var(--header-background);
  background-repeat: no-repeat;
  transition: background-color ease-in-out 0.5s;
  width: 100%;
  position: relative;
  padding: 0;
  height: 160px;
  ${sm`
    min-height: 200px;
  `}
  ${md`
    min-height: 250px;
  `}
  ${lg`
    min-height: 300px;
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
  const darkMode = useContext(ThemeContext)
  return (
    <HeaderWrapper>
      <HeaderContent>{children}</HeaderContent>
      <Mountain shadow={darkMode} />
      <Clouds opacity={darkMode ? 0 : 1} />
      <HeaderBackground>
        <Stars
          opacity={darkMode ? 1 : 0}
          direction={darkMode ? "up" : "down"}
        />
        <Sunset opacity={darkMode ? 0.38 : 0} />
      </HeaderBackground>
    </HeaderWrapper>
  )
}

export default Header
