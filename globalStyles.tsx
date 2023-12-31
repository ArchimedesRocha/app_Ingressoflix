// globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  border: none;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-size: 1.6rem;
  font-family: 'Monomaniac One', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-box-sizing: border-box;
  text-rendering: optimizeLegibility;
  //border: 1px solid red;
}

img {
  max-width: 100%;
  display: block;
  object-fit: cover;
}

html {
  width: 100vw;
  background: #020916;
  font-size: 62.5%;
  overflow-x: hidden;
  scroll-behavior: smooth;

  @include responsive(991px) {
    font-size: 50%;
  }
  @include responsive(500px) {
    font-size: 48%;
  }
}

body {
  &::-webkit-scrollbar {
    width: 5px;
    background-color: #fbfbfc;
  }

  &::-webkit-scrollbar-thumb {
    background-color: $color-brand-red;
  }
}

button,
a {
  background-color: transparent;
  cursor: pointer;
}

`;

export default GlobalStyle;
