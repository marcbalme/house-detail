import { TextSizetypes } from "../types/styles";

export const appStyles = {
  colors: {
    indigo: "#4F0B66",
    champagne: "#EEDFD0",
    charcoal: "#323E42",
    blueGray: "#8B9FB0",
    white: "#FFFFFF",
    orange: "#FF4C29",
    black: "#000000",
  },
  letterSpacing: "0.3px",
  globalRadius: "4px",
};

const size = {
  mobile: "575px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1200px",
};

export const breakpoint = {
  smallOnly: `@media screen and (max-width: ${size.mobile})`,
  mobileL: `@media screen and (min-width: ${size.mobile})`,
  tablet: `@media screen and (min-width: ${size.tablet})`,
  laptop: `@media screen and (min-width: ${size.laptop})`,
  desktop: `@media screen and (min-width: ${size.desktop})`,
};

export const textSize: TextSizetypes = {
  small: {
    mobile: 13,
    tablet: 13,
    desktop: 14,
  },
  medium: {
    mobile: 15,
    tablet: 15,
    desktop: 16,
  },
  large: {
    mobile: 16,
    tablet: 16,
    desktop: 18,
  },
};
