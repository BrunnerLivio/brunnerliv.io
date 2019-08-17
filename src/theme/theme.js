import color from "color"

export default {
  primary: "#4038a5",
  primaryDark: "#38248b",
  primaryDarker: color("#4038a5")
    .darken(0.4)
    .toString(),
  accent: "#FF7779",
  accentDark: color("#FF7779")
    .darken(0.08)
    .toString(),
  accentLight: "#FFA5A7",
  text: "#FFFFFF",
  textInvert: "#000000",
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
}

// WIP: Light Theme
// export default {
//   primary: '#eceff1',
//   primaryDark: '#b0bec5',
//   primaryDarker: color('#FFFFFF').darken(0.2).toString(),
//   accent: '#5c6bc0',
//   accentDark: color('#5c6bc0').darken(0.08).toString(),
//   accentLight: '#9fa8da',
//   text: '#000000',
//   textInvert: '#FFFFFF',
//   breakpoints: {
//     xs: 0,
//     sm: 576,
//     md: 768,
//     lg: 992,
//     xl: 1200
//   },
// };
