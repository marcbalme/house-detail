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
        color: ${appStyles.colors.indigo} !important;
    }

    @font-face {
        src: url("/assets/fonts/Outfit-Regular.woff2") format("woff2"),url("../assets/fonts/Outfit-Regular.woff") format("woff"), url("../assets/fonts//Outfit-Regular.ttf") format("ttf") ;
        font-family: "Outfit";
        font-weight: normal;
    }

    @font-face {
        src: url("/assets/fonts/Outfit-Bold.woff2") format("woff2"),url("../assets/fonts/Outfit-Bold.woff") format("woff"), url("../assets/fonts//Outfit-Bold.ttf") format("ttf") ;
        font-family: "Outfit";
        font-weight: bold;
    }
`;

export default GlobalStyle;
