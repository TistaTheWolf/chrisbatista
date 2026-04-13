import { useState } from 'react'
import './App.css'
import { createTheme, ThemeProvider } from '@mui/material'
import { DarkModeToggle } from './components/DarkModeToggle';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

export const App = () => {
 const [count, setCount] = useState(0)

  return (

     <ThemeProvider theme={darkTheme}>
      <main>This app is using the dark mode</main>
      <DarkModeToggle />
    </ThemeProvider>
    
  )
}