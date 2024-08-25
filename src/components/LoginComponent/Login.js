import './Login.css'
import { useState } from 'react';
import axios from 'axios';
import { _userapiurl } from '../../api.url';
import { useNavigate } from 'react-router-dom';


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = () => {
    const userDetails = { "email":email,"password":password };

    axios.post(_userapiurl+"login", userDetails)
      .then(response => {
        var users = response.data.userDetails;
        localStorage.setItem("token",response.data.token);
        localStorage.setItem("_id",users._id);
        localStorage.setItem("name",users.name);
        localStorage.setItem("email",users.email);
        localStorage.setItem("mobile",users.mobile);
        localStorage.setItem("address",users.address);
        localStorage.setItem("city",users.city);
        localStorage.setItem("gender",users.gender);
        localStorage.setItem("info",users.info);
        localStorage.setItem("role",users.role);
        users.role=="admin"?navigate("/admin"):navigate("/user")
        setOutput("Login Successful");
        console.log(response.data);
      }).catch(error => {
        setOutput("Error in Login or Invalid user" + error.message);
        setEmail("");
        setPassword("");
        console.log(error);
      });
  };

  return (
    <>
      <section id="login" className="Login">
        <div className="Login-Box">
          <h2 style={{color:'white'}}>Login</h2>
          <br/>
          <form id="login-form">
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              className="login-control" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input 
              type="password" 
              id="password" 
              className="login-control" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
            />
            <br />
            <button 
              type="button" 
              className="btn" 
              id="login-btn" 
              onClick={handleSubmit}
            >
              Login
            </button>
          </form>
          <p id="error-msg">{output}</p>
        </div>
      </section>
    </>
  );
}

export default Login;
