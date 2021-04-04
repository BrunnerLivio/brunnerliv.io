import styled from "styled-components"
import color from "color"
import React, { useContext } from "react"
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"

const textShadow = (theme) => `
0px 4px 0 rgba(0,0,0,0.3),
0 0 5px ${color(theme.accentLight).fade(0.5).toString()},
0 0 20px ${color(theme.accent).fade(0.5).toString()},
0 0 30px ${color(theme.accentDark).darken(0.2).fade(0.5)},
0 0 15px ${color(theme.accent).fade(0.5).toString()},
0 0 68px ${color(theme.accentDark).fade(0.2)}`

const NeonTextContent = styled.span`
  text-transform: uppercase;
  letter-spacing: 3px;
  color: ${(props) =>
    props.theme.name === "dark"
      ? color(props.theme.accentLight).fade(0.5).toString()
      : props.theme.accentDark};

  font-family: "Neon", "Roboto", "Arial", Helvetica, sans-serif;
  font-size: 1.5em;
  font-weight: 700;
  position: absolute;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  top: 0;
`

const BlinkingNeonText = styled(NeonTextContent)`
  text-shadow: ${(props) => textShadow(props.theme)};
  letter-spacing: 3px;
  color: ${(props) =>
    props.theme.name === "dark"
      ? color(props.theme.accentLight).lighten(0.1)
      : props.theme.accentDark} !important;
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
    font-size: 1.5em;
    font-weight: 900;
  }
`

const NeonText = ({ text }) => {
  const themeContext = useContext(ThemeManagerContext)

  if (themeContext.isDark) {
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
