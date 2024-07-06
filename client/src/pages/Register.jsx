import React from "react";
import {Link} from "react-router-dom";

const Register = () =>{
    return(
        <div className="auth">
            <h1>Register</h1>
        <form>
                <input required type="text" placeholder="Username"/>
                <input required type="password" placeholder="Password"/>
                <input required type="email" placeholder="Email"/>
                <button>Register</button>
                <p>Invalid credentials</p>
                <span>Do you have an account? <br></br><Link to="/login">Login</Link></span>
            </form>
        </div>
    )
}

export default Register;
