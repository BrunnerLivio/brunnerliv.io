import React, { useContext } from "react"
import styled from "styled-components"
import { md, lg } from "../breakpoints"
import useIsClient from "../hooks/useIsClient"

import Clouds from "./clouds"
import Stars from "./stars"
import Sunset from "./sunset"
import Mountain from "./mountain"
import Rain from "./rain"
import { WeatherContext } from "../weather/weatherProvider"
import DarkModeToggle from "../dark-mode-toggle"
import LocationToggle from "../location-toggle"
import WeatherSettings from "../weather-settings"

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

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
`

const Header = () => {
  const { isClient } = useIsClient()
  const { dispatch, state = {}, setDarkMode } = useContext(WeatherContext)

  const hasClouds = state.weather?.includes("Clouds") || !state.darkMode
  const hasRain =
    state.weather?.includes("Rain") || state.weather?.includes("Drizzle")

  return (
    <HeaderWrapper>
      {isClient && (
        // Somehow it does not want to render correctly on the server..
        <>
          <HeaderContent>
            <ToggleContainer>
              <LocationToggle
                active={state.controller === "location"}
                onClick={() =>
                  dispatch({
                    type: "SET_CONTROLLER",
                    payload: "location",
                  })
                }
              />
              <DarkModeToggle
                checked={state.darkMode}
                active={state.controller === "darkMode"}
                onChange={() => {
                  dispatch({
                    type: "SET_CONTROLLER",
                    payload: "darkMode",
                  })
                  setDarkMode(!state.darkMode)
                }}
              />
              <WeatherSettings active={state.controller === "settings"} />
            </ToggleContainer>
          </HeaderContent>
          <Mountain shadow={state.darkMode} />
          <Clouds opacity={hasClouds ? 1 : 0} />
          <HeaderBackground opacity={state.darkMode ? 1 : 0}>
            <Stars opacity={state.darkMode ? 1 : 0} />
            <Sunset />
          </HeaderBackground>
          <Rain opacity={hasRain ? 1 : 0} />
        </>
      )}
    </HeaderWrapper>
  )
}

export default Header
