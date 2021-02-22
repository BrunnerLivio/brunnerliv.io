import styled from "styled-components"
import color from "color"
import React from "react"

const textShadow = (theme) => `
0 0 5px ${theme.accent},
0 0 10px ${theme.accent},
0 0 20px ${theme.accent},
0 0 30px ${color(theme.accentDark).darken(0.2)},
0 0 5px ${theme.accent},
0 0 48px ${color(theme.accentDark)}`

const NeonTextContainer = styled.span`
  text-transform: uppercase;
  letter-spacing: -0.2px;
  color: ${(props) =>
    props.theme.name === "dark"
      ? color(props.theme.accentLight).lighten(0.1)
      : props.theme.accentDark};
  text-shadow: ${(props) =>
    props.theme.name === "dark" ? textShadow(props.theme) : "none"};
`

const Blink = styled.span`
  animation: ${(props) =>
    props.theme.name === "dark"
      ? "blink " + props.animationTime+ "s infinite"
      : "none"};
  animation-delay: ${(props) => props.animationDelay}s;
`

const NeonText = ({ text }) => {
  const characters = text.split("")

  // Get how many characters can blink in a text. The longer the text the more
  // items will blink
  const amountOfPossibleCharacters = Math.round(characters.length / 14)

  // Generate a random number for each possible character which will be the
  // index which should blink
  const animatedCharacterIndexes = new Array(amountOfPossibleCharacters)
    .fill(0, 0, amountOfPossibleCharacters)
    .map(() => Math.floor(Math.random() * characters.length - 1) + 1)

  return (
    <NeonTextContainer>
      {characters.map((char, index) =>
        animatedCharacterIndexes.includes(index) ? (
          <Blink
            key={index}
            animationDelay={Math.floor(Math.random() * 5) + 0}
            animationTime={Math.floor(Math.random() * 32) + 8}
          >
            {char}
          </Blink>
        ) : (
          <span>{char}</span>
        )
      )}
    </NeonTextContainer>
  )
}

export default NeonText
