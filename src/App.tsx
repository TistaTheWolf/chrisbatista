import './App.css';
import { createTheme, ThemeProvider } from '@mui/material';
import { HomePage } from './pages/HomePage';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

export const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <HomePage />
    </ThemeProvider>
  );
};
