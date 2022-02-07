import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    body {
        font-family: 'Outfit';
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    h1 {
        color: purple !important; // the important is just to show that the style works!
    }

    @font-face {
        src: url("../assets/fonts/Outfit.woff2") format("woff2"), url("../assets/fonts/Outfit.woff") format("woff"), url("../assets/fonts/Outfit.ttf") format("ttf") ;
        font-family: "Outfit";
    }

  // anything else you would like to include
`;

export default GlobalStyle;
