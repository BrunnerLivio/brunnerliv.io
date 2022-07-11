import { createGlobalStyle } from "styled-components"
import { sm, md } from "./breakpoints"
import color from "color"

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-light: ${color("#4038a5").lighten(0.7).toString()};
    --primary-light-fade-55: ${color("#4038a5")
      .lighten(0.7)
      .fade(0.55)
      .toString()};
    --primary: #eceff1;
    --primary-dark: #b0bec5;
    --primary-darker: #eceff1;
    --header-background: #9FC0F7;

    --accent: #404fa6;
    --accent-dark: ${color("#404fa6").darken(0.08).toString()};
    --accent-light: #9fa8da;
    --accent-fade-95: ${color("#404fa6").fade(0.95).toString()};
    --accent-fade-60: ${color("#404fa6").fade(0.6).toString()};

    --text: #0a2540;
    --text-secondary: ${color("#000000").alpha(0.7).toString()};
    --text-invert: #FFFFFF;

    --neon-text-color: var(--accent-dark);
    --neon-blinking-text-color: ${color("#9fa8da").lighten(0.1)};

    /* SHARED */
    --sans-serif: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;
    --serif:  Georgia,Times,serif;
  }
  :root.dark {
    --primary-light: hsl(244, 49%, 60%);
    --primary-light-fade-55: ${color("#4038a5")
      .lighten(0.7)
      .fade(0.55)
      .toString()};
    --primary: hsl(244, 49%, 38%);
    --primary-dark:  hsl(244, 49%, 28%);
    --primary-darker: hsl(244, 49%, 25%);
    --header-background: var(--primary-darker);

    --accent: #FF7779;
    --accent-fade-50: ${color("#FF7779").fade(0.5).toString()};
    --accent-fade-60: ${color("#FF7779").fade(0.6).toString()};
    --accent-fade-95: ${color("#FF7779").fade(0.95).toString()};

    --accent-dark: ${color("#FF7779").darken(0.08).toString()};
    --accent-dark-fade-20: ${color("#FF7779")
      .darken(0.08)
      .fade(0.2)
      .toString()};
    --accent-dark-fade-50: ${color("#FF7779")
      .darken(0.08)
      .darken(0.2)
      .fade(0.5)
      .toString()};

    --accent-light: #FFA5A7;
    --accent-light-fade-50: ${color("#FFA5A7").fade(0.5).toString()};

    --text: ${color("#FFFFFF").alpha(0.85).toString()};
    --title-text: #FFFFFF;
    --text-secondary: ${color("#FFFFFF").alpha(0.7).toString()};
    --text-invert: #000000;
    --link-hover: ${color("#FFFFFF").alpha(0.6).toString()};

    --neon-text-color: ${color("#FFA5A7").fade(0.5).toString()};
    --neon-blinking-text-color: ${color("#FFA5A7").lighten(0.1).toString()};
  }

  body {
    background-color: var(--primary);
    color: var(--text);
    transition: color 0.5s ease-in-out, background-color 0.5s ease-in-out;
    font-family: 'Roboto', sans-serif;
  }

  ::selection {
    background: var(--accent-light);
    color: var(--primary);
  }
  ::-moz-selection {
    background: var(--accent-light);
    color: var(--primary);
  }

  blockquote {
    border-left: 2px var(--accent) solid;
    padding: 1em 2em;
    margin: 32px 0;
    font-style: italic;
  }

  h1 {
    margin: 0.67em 0;
    color: inherit;
    font-weight: normal;
    text-rendering: optimizeLegibility;
    font-size: 1.7em;
    ${sm`
        font-size: 2em;
      `}
    ${md`
font-size: 2.5em;
    `}
    font-weight: bold;
  }

  a {
    color: var(--text);
    transition: color 0.5s ease-in-out;
    font-weight: 600;
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

  @keyframes float {
    0% {
      transform: translateX(-150px);
    }
  }

  @keyframes rotate {
    0% {
     transform: rotate(0deg);
    }
  }
`

export default GlobalStyle
