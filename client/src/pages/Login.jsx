import React from "react";
import {Link} from "react-router-dom";

const Login = () =>{
    return(
        <div className="auth">
            <h1>Login</h1>
        <form>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <button>Login</button>
                <p>Invalid credentials</p>
                <span>Don't have an account? <br></br><Link to="/register">Register</Link></span>  {/*"./register" instead of "/register" takes us to /login/register.*/}
            </form>
        </div>
    )
}

export default Login;
