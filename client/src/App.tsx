import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ColorMode from './theme/ColorMode.tsx';
import { ColorModeContext } from './components/layout/ThemeToggle.tsx';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './pages/Layout.tsx';
import Home from './pages/Home.tsx';

function App() {
  const { theme, colorMode } = ColorMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
