import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"



const Register = () => {
    const navigate = useNavigate();
    const [ user, setUser ] = useState({
        name: "",
        SmartId: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name,value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, SmartId, password, reEnterPassword } = user
        if( name && SmartId && password && password === reEnterPassword){
             axios.post("http://localhost:9002/register", user)
             .then( res => console.log(res))
        }else{
            alert("invalid!")
        }
    }

    return (

        <div className="register"> 
        <center>
        {console.log("user",user)}
        <h1>Register</h1>
        <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange } className="rinput"></input>
        <input type="text"  name="SmartId" value={user.SmartId} placeholder="enter your SmartId" onChange={ handleChange }className="rinput"></input>
        <input type="password" name="password" value={user.password}  placeholder="enter your password" onChange={ handleChange }className="rinput"></input>
        <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="re-enter your password" onChange={ handleChange }className="rinput"></input>
        <div className="rbutton" onClick={register}>Register</div>
        <div>and</div>
        <div className="rbutton" onClick={() => navigate("/login")} >Login</div>
        </center>
       </div>
    )
}

export default Register
