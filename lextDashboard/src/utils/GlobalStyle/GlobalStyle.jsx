import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* Reset CSS */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Basic global styles */
  body {
    margin: 0;
    padding: 0;
    font-family: "Plus Jakarta Sans", sans-serif;
    line-height: 1.5;
    color: #333; /* Gunakan variabel warna jika diperlukan */
    background-color: #fff; /* Gunakan variabel warna untuk latar belakang */
  }

  /* Remove default padding and margin for common elements */
  h1, h2, h3, h4, h5, h6, p, ul, ol, dl, dd, pre, blockquote, figure {
    margin: 0;
    padding: 0;
  }

  /* Remove default list styles */
  ul, ol {
    list-style: none;
  }

  /* Ensure buttons inherit font settings */
  button {
    font-family: inherit;
  }
  
`;

export default GlobalStyle;


