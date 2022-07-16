import React, { useContext } from "react"
import styled from "styled-components"
import { sm, md } from "../breakpoints"
import { WeatherContext } from "./weather/weatherProvider"

const CloudsWrapper = styled.div`
  width: 100%;
  height: 100%;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  opacity: ${(props) => props.opacity};
  transition: 0.5s ease-in-out opacity;
`

const CloudWrapper = styled.svg`
  animation: float linear infinite forwards reverse;
  animation-duration: ${(props) => props.speed * 0.5}s;
  background-repeat: no-repeat;
  position: absolute;
  animation-delay: ${(props) => props.delay}s;
  top: ${(props) => props.top}px;
  z-index: ${(props) => props.zIndex || 1};
  transform: translateX(100vw);
  width: ${(props) => (props.scale || 1) * 100}px;
  height: 100px;
  filter: drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.2));

  ${(props) => `
   @media screen and (min-width: 36em) {
     animation-duration: ${props.speed * 0.7}s;
   }`}

  ${(props) => `
   @media screen and (min-width: 48em) {
     animation-duration: ${props.speed * 0.8}s;
   }`}

   ${(props) => `
   @media screen and (min-width: 62em) {
     animation-duration: ${props.speed}s;
   }`}


  &:nth-child(n + 6) {
    display: none;
    ${sm`
    display: block;
    `}
  }

  &:nth-child(n + 7) {
    display: none;
    ${md`
      display: block;
    `}
  }
`

const Cloud = (props) => {
  const { state } = useContext(WeatherContext)

  const hasRain =
    state.weather?.includes("Rain") || state.weather?.includes("Drizzle")

  let fill = ""
  if (state.darkMode) {
    fill = hasRain ? "var(--primary-darkest)" : "var(--primary-darkerer)"
  } else {
    fill = hasRain ? "#bcbcbc" : "#fff"
  }
  return (
    <CloudWrapper
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 24"
    >
      <path
        fill={fill}
        d="M33.85 14.388c-.176 0-.343.034-.513.054a6.272 6.272 0 00-5.993-8.124c-.38 0-.752.039-1.113.104C24.874 2.677 21.293 0 17.083 0c-5.379 0-9.739 4.361-9.739 9.738 0 .418.035.826.084 1.229a6.378 6.378 0 00-1.155-.11 6.273 6.273 0 00-.001 12.544c.214 0 27.156.109 27.577.109a4.561 4.561 0 00.001-9.122z"
      />
    </CloudWrapper>
  )
}

const Clouds = () => {
  const { state } = useContext(WeatherContext)

  const hasClouds = state.weather?.includes("Clouds")
  return (
    <CloudsWrapper opacity={hasClouds ? 1 : 0}>
        <Cloud top={0} speed={120} scale={1} delay={0} />
        <Cloud top={40} speed={110} scale={0.7} delay={30} />
        <Cloud top={80} speed={75} scale={0.3} delay={-40} />
        <Cloud top={100} speed={100} scale={1.1} zIndex={9} delay={-5} />
        <Cloud top={150} speed={170} scale={1.2} delay={-120} />
        <Cloud top={230} speed={140} scale={0.9} delay={-80} zIndex={9} />
        <Cloud top={270} speed={80} scale={0.6} delay={-30} />
        <Cloud top={300} speed={90} scale={0.8} delay={-80} />
    </CloudsWrapper>
  )
}

export default Clouds
