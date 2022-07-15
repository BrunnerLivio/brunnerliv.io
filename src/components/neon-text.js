import styled from "styled-components"
import React, { useContext } from "react"
import { WeatherContext } from "./weather/weatherProvider"

const NeonTextContent = styled.span`
  text-transform: uppercase;
  letter-spacing: 3px;
  color: var(--neon-text-color);
  transition: color 0.5s ease-in-out;

  font-family: "Neon", "Roboto", "Arial", Helvetica, sans-serif;
  font-size: 1.4em;
  font-weight: 700;
  position: absolute;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  top: 0;
`

const BlinkingNeonText = styled(NeonTextContent)`
  text-shadow: 0px 4px 0 rgba(0, 0, 0, 0.3), 0 0 5px var(--accent-light-fade-50),
    0 0 20px var(--accent-fade-50), 0 0 30px var(--accent-dark-fade-50),
    0 0 15px var(--accent-fade-50), 0 0 68px var(--accent-dark-fade-20);
  letter-spacing: 3px;
  color: var(--neon-blinking-text-color) !important;
  animation: ${(props) => "blink " + props.animationTime + "s"};
  animation-delay: ${(props) => props.animationDelay}s;
  animation-iteration-count: 2;
  animation-fill-mode: forwards;
  opacity: 0.1;
  position: absolute;
  z-index: 2;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  top: 0;
`

const NeonTextContainer = styled.div`
  position: relative;
  width: 100%;
  .hidden-text {
    visibility: hidden;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-family: "Neon", "Roboto", "Arial", Helvetica, sans-serif;
    font-size: 1.4em;
    font-weight: 900;
  }
`

const NeonText = ({ text }) => {
  const { state } = useContext(WeatherContext)

  if (state.darkMode) {
    return (
      <NeonTextContainer>
        {/* The hidden text is used since the elements are position absolute in order to still have auto-height */}
        <span className="hidden-text">{text}</span>
        <NeonTextContent>{text}</NeonTextContent>
        <BlinkingNeonText
          animationDelay={Math.random() * 2 + 1}
          animationTime={1}
        >
          {text}
        </BlinkingNeonText>
      </NeonTextContainer>
    )
  }

  return (
    <NeonTextContainer>
      <span className="hidden-text">{text}</span>
      <NeonTextContent>{text}</NeonTextContent>
    </NeonTextContainer>
  )
}

export default NeonText
