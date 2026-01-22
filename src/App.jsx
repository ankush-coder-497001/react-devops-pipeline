import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const appName = import.meta.env.VITE_APP_NAME;
  const apiUrl = import.meta.env.VITE_API_URL;

  console.log("App:", appName);
  console.log("API:", apiUrl);


  return (
    <>
      <h1>{appName}</h1>
    </>
  )
}

export default App
