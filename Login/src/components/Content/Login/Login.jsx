import './Login.scss';

function Login () {
    return(
        <div className="loginOuter">
            <div className="loginInner">
                <form action="/submit-form" method='POST'>
                    <h1><button><i class="bi bi-arrow-left" /></button> Login In</h1>
                    <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder='Email.....'/>
                    <input type="password" placeholder='Password.....'/>
                    <button type='submit'>Login <i class="bi bi-arrow-right loginBtn " /></button>
                </form>
            </div>
        </div>
    );
}

export default Login;

