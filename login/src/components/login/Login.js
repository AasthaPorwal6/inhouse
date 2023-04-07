// import React, { useState } from "react"
// import "./login.css"
// import axios from "axios"
// import { useNavigate } from 'react-router-dom';



// const Login = () => {
 
//     const navigate = useNavigate();

//     const [ user, setUser ] = useState({
//         SmartId: "",
//         password: ""
//     })

//     const handleChange = e => {
//         const { name,value } = e.target
//         setUser({
//             ...user,
//             [name]: value
//         })
//     }

//     // const login = () => {
//     //     axios.post("http://localhost:9002/login",user)
//     //     // .then(res => alert(res.data.message))
//     //     // const handleRegisterClick = () => navigate("/components/register/register.js");


//     // }
//     const login = () => {
//         axios.post("http://localhost:9002/login", user)
//           .then(res => {
//             alert(res.data.message);
//             navigate('/student_homepage');
//           })
//           .catch(error => console.log(error));
//       };
      


//     return (
//         <div className="login"> 
//         {console.log(user)}
//          <h1>Login</h1>
//             <input type="text" name="SmartId" value={user.SmartId} onChange={handleChange} placeholder="Enter your Smart Id"></input>
//             <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
//             <div className="button" onClick={ login }>Login</div>
//             <div>or</div>
//             <div className="button" onClick={() => navigate("/register")}>Register</div>
//         </div>
//     )
// }

// export default Login

import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    SmartId: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios
      .post("http://localhost:9002/login", user)
      .then((res) => {
        alert(res.data.message);
        navigate("/Student_homepage");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="login">
      {console.log(user)}
      <h1>Login</h1>
      <input
        type="text"
        name="SmartId"
        value={user.SmartId}
        onChange={handleChange}
        placeholder="Enter your Smart Id"
      />
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Enter your Password"
      />
      <div className="button" onClick={login}>
        Login
      </div>
      
      </div>
   
  );
};

export default Login;

