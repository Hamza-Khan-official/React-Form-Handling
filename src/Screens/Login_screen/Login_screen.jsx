import React, { useState } from 'react'
import Input_ from '../../Components/Input/Input__.jsx'
import styles from '../../Components/Input/Input.module.css'
import Table from 'react-bootstrap/Table';


const Login_screen = () => {

    const [Login, setLogin] = useState({
        username: "",
        userpassward: ""
    })

    const [loginArray, SetloginArray] = useState([])


    let Login_func = () => {
        SetloginArray([...loginArray, Login])
        console.log(loginArray)
    }

    return (
        <>
            <div className={styles.formContainer}>
                <p className={styles.title}>Login</p>

                {/* INput For Email */}
                <Input_ ONCHANGE={(e) => {
                    // inputval(e)
                    setLogin({ ...Login, username: e.target.value })
                }
            }
            label="Email" placholder="Enter a email..." type="email" value={Login.username} />

                {/* INput For Passwards */}
                <Input_ ONCHANGE={(e) => setLogin({ ...Login, userpassward: e.target.value })} label="Passward" placholder="Enter a Passward..." type="password" value={Login.userpassward} />

                <button onClick={Login_func} className={styles.sign}>Sign in</button>
            </div>

            <br /><br /><br />

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>{loginArray.username}</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Larry the Bird</td>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default Login_screen
