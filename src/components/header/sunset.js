import styled from "styled-components"

const Sunset = styled.section`
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  bottom: 0;
  background-image: linear-gradient(
    180deg,
    hsla(0, 0%, 100%, 0),
    var(--accent-fade-95)
      5%,
    var(--accent-fade-60)
      15%,
    var(--accent)
  );
  background-repeat: repeat-x;
  opacity: 0.38;
  z-index: 1;
`

export default Sunset
