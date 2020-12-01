import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
    color: #fafafa
  }

  body {
    font-family: 'Helvetica neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: Montserrat, 'Helvetica neue', Helvetica, Arial, sans-serif;
  }

  #root {
    background-color: #0b0b0b;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Time, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
