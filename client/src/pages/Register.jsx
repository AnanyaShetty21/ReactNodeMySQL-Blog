import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const Register = () =>{
    const [inputs, setInputs] = useState({
        username:"",
        password:"",
    })

    const [err, setError] = useState(null);
    const navigate = useNavigate(); //To redirect back to the login page after successful registration

    const handleChange = e =>{
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async e => {
        e.preventDefault() //Prevents the page from refreshing
        try{
            const res = await axios.post("/auth/register", inputs);
            navigate("/login");
        }catch(err){
            setError(err.response.data)
        }
        
    }

    return(
        <div className="auth">
            <h1>Register</h1>
        <form>
                <input required type="text" placeholder="Username" name="username" onChange={handleChange}/>
                <input required type="password" placeholder="Password" name="password" onChange={handleChange}/>
                <button onClick={handleSubmit}>Register</button>
                {err && <p>{err}</p>} 
                <span>Do you have an account? <br></br><Link to="/login">Login</Link></span>
            </form>
        </div>
    )
}

export default Register;
