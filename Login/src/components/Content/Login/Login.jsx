import { useState } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';


function Login() {
    const [error, setError] = useState({})
    
    function handleSubmit(e) {
        e.preventDefault()
        validateOutput(e.target[1].value, e.target[2].value)
    }

    function validateOutput(emailValue, passwordValue) {
        const regex = new RegExp('/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i');
        if (regex.test(emailValue)) {
            setError({ ...error, "email": "Invalid email  !" })
        }
        else {
            delete error["email"]
            setError({...error})
        }
        if (passwordValue.length < 8) {
            console.log("Invalid password  ! ");
            setError({ ...error, "password": "Invalid password  ! " })
        } else {
            delete error["password"]
            setError({...error})
        }
    }

    return (
        <div className="loginOuter">
            <div className="loginInner">
                <form id='myForm' onSubmit={handleSubmit}>
                    <h1><Link to={"/"}><button><i class="bi bi-arrow-left" /></button></Link> Login In</h1>
                    <input type="email" id='1' placeholder='Email.....' />
                    {error["email"] ? <span>{error["email"]}</span> : <></>}
                    <input type="password" id='2' placeholder='Password.....' />
                    {error["password"] ? <span>{error["password"]}</span> : <></>}
                    <button type='submit'>Login <i class="bi bi-arrow-right loginBtn " /></button>
                </form>
            </div>
        </div>
    );
}

export default Login;

