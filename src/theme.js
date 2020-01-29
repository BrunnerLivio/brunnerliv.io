const color = require("color")

const lightTheme = {
  name: "dark",
  primaryLight: color("#4038a5")
    .lighten(0.7)
    .toString(),
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
  textSecondary: color("#FFFFFF")
    .alpha(0.7)
    .toString(),
  linkHover: color("#FFFFFF")
    .alpha(0.6)
    .toString(),
  breakpoints: {
    xs: 0,
    xsm: 400,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
}

const darkTheme = {
  name: "light",
  primary: "#eceff1",
  primaryDark: "#b0bec5",
  primaryDarker: color("#FFFFFF")
    .darken(0.2)
    .toString(),
  accent: "#404fa6",
  accentDark: color("#404fa6")
    .darken(0.08)
    .toString(),
  accentLight: "#9fa8da",
  text: "#000000",
  textSecondary: color("#000000")
    .alpha(0.7)
    .toString(),
  textInvert: "#FFFFFF",
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
}

module.exports = { lightTheme, darkTheme }
