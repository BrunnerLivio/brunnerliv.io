import { Menu, MenuItem } from "@szhsin/react-menu"
import React, { useContext } from "react"
import styled from "styled-components"

import "@szhsin/react-menu/dist/index.css"
import "@szhsin/react-menu/dist/transitions/slide.css"
import { WeatherContext } from "./weather/weatherProvider"

const Button = styled.button`
  position: relative;
  z-index: 999;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  outline: none;
  border: none;
  fill: var(--text);
  cursor: pointer;

  ${(props) =>
    props.active
      ? `
    fill: var(--accent);
  `
      : ""}

  svg {
    width: 24px;
  }
`

function WeatherSettings({ active }) {
  const { state, setDarkMode, toggleWeather, setController } =
    useContext(WeatherContext)
  return (
    <Menu
      menuButton={
        <Button active={active} onClick={() => setController("settings")}>
          <svg version="1.1" x="0px" y="0px" viewBox="0 0 489.802 489.802">
            <g>
              <path
                d="M20.701,281.901l32.1,0.2c4.8,24.7,14.3,48.7,28.7,70.5l-22.8,22.6c-8.2,8.1-8.2,21.2-0.2,29.4l24.6,24.9
          c8.1,8.2,21.2,8.2,29.4,0.2l22.8-22.6c21.6,14.6,45.5,24.5,70.2,29.5l-0.2,32.1c-0.1,11.5,9.2,20.8,20.7,20.9l35,0.2
          c11.5,0.1,20.8-9.2,20.9-20.7l0.2-32.1c24.7-4.8,48.7-14.3,70.5-28.7l22.6,22.8c8.1,8.2,21.2,8.2,29.4,0.2l24.9-24.6
          c8.2-8.1,8.2-21.2,0.2-29.4l-22.6-22.8c14.6-21.6,24.5-45.5,29.5-70.2l32.1,0.2c11.5,0.1,20.8-9.2,20.9-20.7l0.2-35
          c0.1-11.5-9.2-20.8-20.7-20.9l-32.1-0.2c-4.8-24.7-14.3-48.7-28.7-70.5l22.8-22.6c8.2-8.1,8.2-21.2,0.2-29.4l-24.6-24.9
          c-8.1-8.2-21.2-8.2-29.4-0.2l-22.8,22.6c-21.6-14.6-45.5-24.5-70.2-29.5l0.2-32.1c0.1-11.5-9.2-20.8-20.7-20.9l-35-0.2
          c-11.5-0.1-20.8,9.2-20.9,20.7l-0.3,32.1c-24.8,4.8-48.8,14.3-70.5,28.7l-22.6-22.8c-8.1-8.2-21.2-8.2-29.4-0.2l-24.8,24.6
          c-8.2,8.1-8.2,21.2-0.2,29.4l22.6,22.8c-14.6,21.6-24.5,45.5-29.5,70.2l-32.1-0.2c-11.5-0.1-20.8,9.2-20.9,20.7l-0.2,35
          C-0.099,272.401,9.201,281.801,20.701,281.901z M179.301,178.601c36.6-36.2,95.5-35.9,131.7,0.7s35.9,95.5-0.7,131.7
          s-95.5,35.9-131.7-0.7S142.701,214.801,179.301,178.601z"
              />
            </g>
          </svg>
        </Button>
      }
    >
      <MenuItem
        type="checkbox"
        checked={state.darkMode}
        onClick={() => setDarkMode(!state.darkMode)}
      >
        Night
      </MenuItem>
      <MenuItem
        checked={state.weather.includes("Clouds")}
        onClick={() => toggleWeather("Clouds")}
        type="checkbox"
      >
        Clouds
      </MenuItem>
      <MenuItem
        onClick={() => toggleWeather("Rain")}
        checked={state.weather.includes("Rain")}
        type="checkbox"
      >
        Rain
      </MenuItem>
    </Menu>
  )
}

export default WeatherSettings
