import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${theme.fontFamily};
    background-color: ${theme.colors.light};
    color: ${theme.colors.dark};
    letter-spacing: 0.01em;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
  
  button {
    border: none;
    background-color: unset;
    cursor: pointer;
  }
  
  section {
    padding: 80px 0;
    
    @media ${theme.media.tablet} {
      padding: 60px 0;
    }
    
    @media ${theme.media.mobile} {
      padding: 35px 0;
    }
  }

  .lock {
    overflow: hidden;
  }
  
`