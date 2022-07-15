import React from "react"
import styled from "styled-components"
import { md, lg } from "../breakpoints"
import useIsClient from "../hooks/useIsClient"

import Clouds from "./clouds"
import Stars from "./stars"
import Sunset from "./sunset"
import Mountain from "./mountain"
import Rain from "./rain"

const HeaderWrapper = styled.header`
  margin: 0;
  background-repeat: no-repeat;
  transition: background-color ease-in-out 0.5s;
  width: 100%;
  position: relative;
  padding: 0;
  min-height: 250px;

  ${md`
    min-height: 300px;
  `}
  ${lg`
    min-height: 350px;
  `}
  overflow: hidden;
  background: var(--header-background);
`

const HeaderContent = styled.div`
  position: absolute;
  right: 16px;
  top: 16px;
  z-index: 99;
`
const HeaderBackground = styled.div`
  position: fixed;
  z-index: 0;
  top: 0;
  width: 100vw;
  height: 5000px;
  left: 0;
  overflow: hidden;
  background: var(--header-background);
`

const Header = ({ children, darkMode, weather }) => {
  const { isClient } = useIsClient()

  const hasClouds = weather?.includes("Clouds") || !darkMode
  const hasRain = weather?.includes("Rain") || weather?.includes("Drizzle")

  return (
    <HeaderWrapper>
      <HeaderContent>{children}</HeaderContent>
      {isClient && (
        // Somehow it does not want to render correctly on the server..
        <>
          <Mountain shadow={darkMode} />
          <Clouds opacity={hasClouds ? 1 : 0} />
          <HeaderBackground opacity={darkMode ? 1 : 0}>
            <Stars opacity={darkMode ? 1 : 0} />
            <Sunset />
          </HeaderBackground>
          <Rain opacity={hasRain ? 1 : 0} />
        </>
      )}
    </HeaderWrapper>
  )
}

export default Header
