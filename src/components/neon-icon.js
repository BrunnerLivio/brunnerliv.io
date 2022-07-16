import React from "react"

import styled from "styled-components"
import { FontAwesomeIcon as _FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"
import { WeatherContext } from "./header/weather/weatherProvider"

const DarkModeAwesomeIcon = styled(_FontAwesomeIcon)`
  color: var(--accent-light);
  filter: drop-shadow(0px 4px 0px rgba(0, 0, 0, 0.2))
    drop-shadow(0px 0px 4px var(--accent-light-fade-50))
    drop-shadow(0px 0px 20px var(--accent-fade-50))
    drop-shadow(0px 0px 20px var(--accent-dark-fade-50));
  width: 1.5rem !important;

  animation: ${(props) => "blink " + props.animationTime + "s"};
  animation-delay: ${(props) => props.animationDelay}s;
  animation-iteration-count: 2;
  animation-fill-mode: forwards;

  &:hover {
    color: var(--accent-dark);
    filter: drop-shadow(0px 0px 4px var(--accent-fade-60));
  }
`

const AwesomeIcon = styled(_FontAwesomeIcon)`
  color: var(--neon-text-color);
  width: 1.5rem !important;
  &:hover {
    color: var(--accent);
  }
`

const NeonIcon = (props) => {
  const { state } = useContext(WeatherContext)

  if (state.lights) {
    return (
      <DarkModeAwesomeIcon
        animationDelay={Math.random() * 2 + 1}
        animationTime={1}
        {...props}
      />
    )
  }
  return <AwesomeIcon {...props} />
}

export default NeonIcon
