import styled from "styled-components"
import color from "color"

const textShadow = (theme) => `
0 0 5px ${theme.accent},
0 0 15px ${theme.accent},
0 0 20px ${theme.accent},
0 0 40px ${theme.accent},
0 0 60px ${color(theme.accentDark).darken(0.2)},
0 0 10px ${theme.accent},
0 0 98px ${color(theme.accentDark)}`

const NeonText = styled.span`
  text-transform: uppercase;
  letter-spacing: -0.2px;
  color: ${(props) =>
    props.theme.name === "dark"
      ? color(props.theme.accentLight).lighten(0.1)
      : props.theme.accentDark};
  text-shadow: ${(props) =>
    props.theme.name === "dark" ? textShadow(props.theme) : "none"};
`

export default NeonText
