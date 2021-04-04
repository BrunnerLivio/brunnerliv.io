import { createGlobalStyle } from "styled-components"
import breakpoint from "styled-components-breakpoint"

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.primaryDarker};
    color: ${(props) => props.theme.text};
  }

  ::selection {
    background: ${(props) => props.theme.accentLight};
    color: ${(props) => props.theme.primary};
  }
  ::-moz-selection {
    background: ${(props) => props.theme.accentLight};
    color: ${(props) => props.theme.primary};
  }

  blockquote {
    border-left: 2px ${(props) => props.theme.accent} solid;
    padding: 12px;
    margin: 32px 0;
  }

  h1 {
    margin: 0.67em 0;
    color: inherit;
    font-weight: normal;
    text-rendering: optimizeLegibility;
    font-size: 1.7em;
    ${breakpoint("sm")`
        font-size: 2em;
      `}
    ${breakpoint("md")`
        font-size: 2.5em;
      `}
    font-weight: bold;
  }

  a {
    color: ${(props) => props.theme.accent};
    &:hover {
      text-decoration: none;
    }
  }

  @keyframes blink {
    0%,
    10%,
    20% {
      opacity: 0.1;
    }

    9%,
    11%,
    19%,
    21%,
    23%,
    25%,
    54%,
    56%,
    99%,
    100% {
      opacity: 1;
    }
  }
`

export default GlobalStyle
