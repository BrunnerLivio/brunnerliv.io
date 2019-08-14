import color from 'color';

export default {
  primary: '#4038a5',
  primaryDark: '#38248b',
  primaryDarker: color('#4038a5').darken(0.4).toString(),
  accent: '#FF7779',
  accentLight: '#FFA5A7',
  text: '#FFFFFF',
  textInvert: '#000000',
  breakpoints: { 
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  },
};
