import './Register.scss';
import { Link } from 'react-router-dom';

function Register () {
    return(
        <div className="register">
            <form className="registerForm" action='#' method='post'>
            <h1><Link to={"/"}><button><i class="bi bi-arrow-left" /></button></Link> Register </h1>
                <label for="name">Name</label><h5>:</h5>
                <input type="text" id='name'/>
                <label for="age">Age</label><h5>:</h5>
                <input type="range" min='1' max='100' id='age'/>
                <label  className='CGender' for='gender'>Gender
                    <input id='gender' type="radio" name='gender' value='male'/>Male
                    <input id='gender' type="radio" name='gender' value='female'/>Female
                </label>
                <label for="email" >Email</label><h5>:</h5>
                <input type="text" id="email"/>
                <label for="password">Password</label><h5>:</h5>
                <input type="text"  id="password"/>
                <label for="R-Password">Retype-Password</label><h5>:</h5>
                <input type="text" id="R-Password"/>
                <label for="number">Phone-Number</label><h5>:</h5>
                <input type="number" id='number'/>
                <button className='registerBtn' type='submit'>Register</button>
            </form>
        </div>
    );
}

export default Register;

