import React, { useContext } from "react"
import styled from "styled-components"
import { md, lg } from "../breakpoints"
import useIsClient from "../hooks/useIsClient"

import Clouds from "./clouds"
import Stars from "./stars"
import Mountain from "./mountain"
import Rain from "./rain"
import { WeatherContext } from "./weather/weatherProvider"
import DarkModeToggle from "./toggles/dark-mode-toggle"
import LocationToggle from "./toggles/location-toggle"
import WeatherSettings from "./toggles/weather-settings"

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
  background: ${(props) =>
    props.rain
      ? "var(--header-background--rainy)"
      : "var(--header-background)"};
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
`

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
`

function getWeather(userLocation) {
  return new Promise((resolve, reject) => {
    let weatherCache = null
    try {
      weatherCache =
        typeof window !== "undefined" &&
        JSON.parse(sessionStorage.getItem("weather-cache"))
    } catch (e) {}

    if (weatherCache) {
      return resolve(weatherCache)
    }

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${userLocation.lat}&lon=${userLocation.lon}&appid=9c41d9e7901b6a542535bb8b793cf038&units=metric`
    )
      .then((res) => res.json())
      .then(({ weather }) => weather.map((w) => w.main))
      .then((weather) => {
        sessionStorage.setItem("weather-cache", JSON.stringify(weather))
        resolve(weather)
      })
  })
}

function getLocation() {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined" || !window.navigator) {
      return reject()
    }

    let locationCache = null
    try {
      locationCache =
        typeof window !== "undefined" &&
        JSON.parse(sessionStorage.getItem("user-location"))
    } catch (e) {}

    if (locationCache) {
      return resolve(locationCache)
    }

    navigator.geolocation.getCurrentPosition((position) => {
      const coords = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      }
      sessionStorage.setItem("user-location", JSON.stringify(coords))
      resolve(coords)
    })
  })
}

const Header = () => {
  const { isClient } = useIsClient()
  const {
    state = {},
    setDarkMode,
    setController,
    setWeather,
  } = useContext(WeatherContext)

  const hasRain =
    state.weather?.includes("Rain") || state.weather?.includes("Drizzle")

  function activateLocation() {
    getLocation()
      .then((coords) => getWeather(coords))
      .then((weather) => {
        setController("location")
        const h = new Date().getHours()
        setDarkMode(h > 16 || h < 8)
        setWeather(weather)
      })
      .catch((err) => {
        console.error({ msg: "What", err })
      })
  }

  return (
    <HeaderWrapper rain={hasRain}>
      {isClient && (
        // Somehow it does not want to render correctly on the server..
        <>
          <HeaderContent>
            <ToggleContainer>
              <LocationToggle
                active={state.controller === "location"}
                onClick={() => activateLocation()}
              />
              <DarkModeToggle
                checked={state.darkMode}
                active={state.controller === "darkMode"}
                onChange={() => {
                  setController("darkMode")
                  setDarkMode(!state.darkMode)
                }}
              />
              <WeatherSettings active={state.controller === "settings"} />
            </ToggleContainer>
          </HeaderContent>
          <Mountain />
          <Clouds />
          <HeaderBackground opacity={state.darkMode ? 1 : 0}>
            <Stars />
          </HeaderBackground>
          <Rain />
        </>
      )}
    </HeaderWrapper>
  )
}

export default Header
