import './App.css';
import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { PageHeader } from './components/common';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const Home = lazy(() =>
  import('./pages/index').then((module) => ({ default: module.HomePage }))
);
const Blog = lazy(() =>
  import('./pages/index').then((module) => ({ default: module.BlogPage }))
);

export const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <PageHeader />

      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
};
