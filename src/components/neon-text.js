import styled from "styled-components"
import color from "color"
import React, { useContext } from "react"
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"

const textShadow = (theme) => `
0 0 5px ${theme.accent},
0 0 20px ${theme.accent},
0 0 30px ${color(theme.accentDark).darken(0.2)},
0 0 15px ${theme.accent},
0 0 68px ${color(theme.accentDark)}`

const NeonTextContainer = styled.span`
  text-transform: uppercase;
  letter-spacing: -0.2px;
  color: ${(props) =>
    props.theme.name === "dark"
      ? color(props.theme.accentLight).lighten(0.1)
      : props.theme.accentDark};
  text-shadow: ${(props) =>
    props.theme.name === "dark" ? textShadow(props.theme) : "none"};
  font-family: "Exo", sans-serif;
  font-style: italic;
  font-weight: 100;
`

const BlinkingNeonTextContainer = styled(NeonTextContainer)`
  animation: ${(props) => "blink " + props.animationTime + "s infinite"};
  animation-delay: ${(props) => props.animationDelay}s;
`

const NeonText = ({ text }) => {
  const themeContext = useContext(ThemeManagerContext)

  if (!themeContext.isDark) {
    return (
      <BlinkingNeonTextContainer
        animationDelay={Math.floor(Math.random() * 6) + 0}
        animationTime={Math.floor(Math.random() * 9) + 2}
      >
        {text}
      </BlinkingNeonTextContainer>
    )
  }

  return <NeonTextContainer>{text}</NeonTextContainer>
}

export default NeonText
