import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Login() {
    const [email, setEmail] = useState("")
    const [passward, setPassward] = useState("")

    let Submit = () => {
        console.log(`email:${email}`);
        console.log(`Passward:${passward}`);

    }

    return (
        <>
            <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
            >
                <Form.Control onChange={(e) => setEmail((e.target.value))} type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control onChange={(e) => setPassward((e.target.value))} type="password" placeholder="Password" />
            </FloatingLabel>
            <br />
            <button onClick={Submit} className='btn btn-warning'>Submit</button>
        </>
    );
}

export default Login;