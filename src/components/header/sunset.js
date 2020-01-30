import styled from "styled-components"
import color from "color"

const Sunset = styled.section`
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  bottom: 0;
  background-image: linear-gradient(
    180deg,
    hsla(0, 0%, 100%, 0),
    ${props =>
        color(props.theme.accent)
          .fade(0.95)
          .toString()}
      5%,
    ${props =>
        color(props.theme.accent)
          .fade(0.6)
          .toString()}
      15%,
    ${props => props.theme.accent}
  );
  background-repeat: repeat-x;
  opacity: 0.38;
  z-index: 1;
`

export default Sunset
