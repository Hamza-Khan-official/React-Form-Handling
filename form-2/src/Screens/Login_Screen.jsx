import React from 'react'
import Input from '../Components/Input/Input__'
import styles from './Login_Screen.module.css'

const Login_Screen = () => {
  return (
    <>

      {/* Name */}
      <Input label="Name" placeholder="Enter a Name..." type="text" value=""
        ONCHANGE=""
      />

      {/* Password */}
      <Input label="Password" placeholder="Enter a Password..." type="password" value=""
        ONCHANGE=""
      />

      <br /><br />
      <button className={styles.button}>Submit</button>
    </>
  )
}

export default Login_Screen
