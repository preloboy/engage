// import { useState } from 'react'
import { useState } from 'react';
import './App.css'
import Login from './components/login';

function App() {
  // const [count, setCount] = useState(0)
  const [loggedIn, setLoggedIn] = useState(null)

  return (
    <>
      <Login></Login>
    </>
  )
}

export default App
