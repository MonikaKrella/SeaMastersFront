import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Game from './components/pages/Game/Game';
import GlobalStyles from './components/layout/Gobal/Global';
import Home from './components/pages/Home/Home';
import MainButton from './components/atoms/MainButton/MainButton';
import Nav from './components/layout/Nav/Nav';
import Rules from './components/pages/Rules/Rules';
import { Container } from './components/layout/Container/Container.styled';

const theme = {
  colors: {
    header: '#5688cb',
    body: '#fafad2',
    footer: '#A4B4CA',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Nav />
        <Container>
          <Routes>
            <Route path="/" element={<Game />} />
            <Route path="/home" element={<Home />} />
            <Route path="/rules" element={<Rules />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
