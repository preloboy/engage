// import { useState } from 'react'
// import { useState } from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import './App.css'
import Dashboard from './components/dashboard/dashboard';

function App() {
  // const [count, setCount] = useState(0)
  // const [loggedIn, setLoggedIn] = useState(null)
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Dashboard />
      </ThemeProvider>

    </>
  )
}

export default App
