import { createGlobalStyle } from "styled-components";
import { appStyles } from "./appStyles";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        letter-spacing: ${appStyles.letterSpacing};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: 'Outfit';
        background: ${appStyles.colors.white};
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    h1 {
        color: ${appStyles.colors.indigo} !important; // the important is just to show that the style works!
    }

    @font-face {
        src: url("../assets/fonts/Outfit.woff2") format("woff2"), url("../assets/fonts/Outfit.woff") format("woff"), url("../assets/fonts/Outfit.ttf") format("ttf") ;
        font-family: "Outfit";
    }

  // anything else you would like to include
`;

export default GlobalStyle;
