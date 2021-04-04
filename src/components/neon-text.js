import styled from "styled-components"
import color from "color"
import React, { useContext } from "react"
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"

const neonShadow = (c) => `
0 0 5px ${color(c).fade(0.5).toString()},
0 0 20px ${color(c).fade(0.5).toString()},
0 0 30px ${color(c).darken(0.2).fade(0.5)},
0 0 15px ${color(c).fade(0.5).toString()},
0 0 68px ${color(c).fade(0.2)}`

const NeonTextBase = styled.span`
  text-transform: uppercase;
  letter-spacing: 3px;
  font-family: "Neon", "Roboto", "Arial", Helvetica, sans-serif;
  font-size: 1.5em;
  font-weight: 700;
`

const UnactivatedNeonText = styled(NeonTextBase)`
  color: ${(props) =>
    props.color
      ? props.color
      : props.theme.name === "dark"
      ? color(props.theme.accentLight).fade(0.5).toString()
      : props.theme.accentDark};
`

const UnactivatedNeonTextWithPosition = styled(UnactivatedNeonText)`
  position: absolute;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  top: 0;
`

const ActivatedNeonText = styled(NeonTextBase)`
  text-shadow: ${(props) =>
    "0px 4px 0 rgba(0,0,0,0.3), " +
    neonShadow(props.color || props.theme.accent)};
  color: ${(props) => color(props.color || props.theme.accent).lighten(0.24)};
`

const BlinkingNeonText = styled(ActivatedNeonText)`
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
`

const HiddenText = styled(NeonTextBase)`
  visibility: hidden;
`

const NeonText = ({ text }) => {
  const themeContext = useContext(ThemeManagerContext)

  if (themeContext.isDark) {
    return (
      <NeonTextContainer>
        {/* The hidden text is used since the elements are position absolute in order to still have auto-height */}
        <HiddenText>{text}</HiddenText>
        <UnactivatedNeonTextWithPosition>
          {text}
        </UnactivatedNeonTextWithPosition>
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
      <HiddenText>{text}</HiddenText>
      <UnactivatedNeonTextWithPosition>{text}</UnactivatedNeonTextWithPosition>
    </NeonTextContainer>
  )
}

export default NeonText
export {
  NeonTextBase,
  NeonTextContainer,
  UnactivatedNeonText,
  ActivatedNeonText,
  BlinkingNeonText,
  neonShadow,
}
