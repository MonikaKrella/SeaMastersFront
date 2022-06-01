import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    header: '#5688cb',
    body: '#ccccca',
  },
};

const GlobalStyles = createGlobalStyle`
body {
  
  height: 100vh;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

div#root {
background-color: #ccccca;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;

export default GlobalStyles;
