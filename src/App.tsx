import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import ErrorFallback from './components/pages/ErrorBoundary/ErrorFallback';
import Footer from './components/layout/Footer/Footer';
import Game from './components/pages/Game/Game';
import Nav from './components/layout/Nav/Nav';
import Rules from './components/pages/Rules/Rules';
import GlobalStyles, { theme } from './styles/Gobal/Global';
import { Container } from './styles/Container/Container.styled';

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Nav />
          <Container>
            <Routes>
              <Route path="/" element={<Game />} />
              <Route path="/rules" element={<Rules />} />
            </Routes>
          </Container>
          <Footer />
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
