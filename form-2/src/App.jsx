import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Input from './Screens/Login_Screen';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Login From</h1>
      <Input/>
      
    </>
  )
}

export default App
