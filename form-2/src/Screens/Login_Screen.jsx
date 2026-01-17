import React, { use, useState } from 'react'
import Input from '../Components/Input/Input__'
import styles from './Login_Screen.module.css'

const Login_Screen = () => {

  const [formdata, setformdata] = useState({
    username: "",
    userpassword: ""
  })

  const [dataobj, setdataobj] = useState([
  ])
  
  
  let submit = () => {
    setdataobj([...dataobj, formdata]);
    setformdata({
      username:"",
      userpassword:""
    })
    
    console.log(dataobj)
  }
  return (
    <>

      {/* Name */}
      <Input label="Name" placeholder="Enter a Name..." type="text" value={formdata.username}
        ONCHANGE={(e) => setformdata({ ...formdata, username: e.target.value })}
      />

      {/* Password */}
      <Input label="Password" placeholder="Enter a Password..." type="password" 
      value={formdata.userpassword}
        ONCHANGE={(e) => setformdata({ ...formdata, userpassword: e.target.value })}
      />

      <br /><br />
      <button onClick={submit} className={styles.button}>Submit</button>
    </>
  )
}

export default Login_Screen
