import React, { useState } from 'react'
import Input_ from '../../Components/Input/Input__.jsx'
import styles from '../../Components/Input/Input.module.css'


const Login_screen = () => {

    const [Login, setLogin] = useState ({
        username:"",
        userpassward:""
    })

    const [loginArray, SetloginArray] = useState([])


    let Login_func = () => {
        SetloginArray([...loginArray, Login])
        console.log(loginArray)
    }


    return (
        <div>
            <div className={styles.formContainer}>
                <p className={styles.title}>Login</p>

                <Input_ ONCHANGE={(e)=> setLogin({...Login, username: e.target.value})} label="Email" placholder="Enter a email..." type="email" />
                <Input_ ONCHANGE={(e)=> setLogin({...Login, userpassward: e.target.value})} label="Passward" placholder="Enter a Passward..." type="password" />

                <button onClick={Login_func} className={styles.sign}>Sign in</button>
            </div>
        </div>
    )
}

export default Login_screen
