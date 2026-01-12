import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Login from './Components/Login/Login';
import Input from './Screens/Login_screen/Login_screen.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Input />
    </>
  )
}

export default App
