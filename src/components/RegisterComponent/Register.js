import './Register.css'
import { useState } from 'react';
import axios from 'axios';
import { _userapiurl } from '../../api.url';

function Register()
{
    const[name , setName ] = useState(""); 
    const[email , setEmail ] = useState(""); 
    const[password , setPassword ] = useState("");
    const[address , setAddress ] = useState("");  
    const[mobile, setMobile ] = useState("");
    const[city , setCity ] = useState("");
    const[gender , setGender ] = useState("");
    const[output , setOutput ] = useState("");
    
    const handelSubmit =()=>{
        const userDetails={"name":name,"email":email,"password":password,"mobile":mobile,"address":address,"city":city,"gender":gender};
        // console.log(userDetails);
        // alert("Test");

        axios.post(_userapiurl+"save",userDetails).then((response)=>{
        setOutput("User Registered Succesfully");
        setName("");
        setEmail("")
        setPassword("");
        setMobile("");
        setAddress(""); 
        setCity("");
        setGender("")
        }).catch((error)=>{
          console.log(error);
          setOutput("Error In Registration"+ error.message);
        });
        
    }
    return(
        <>
        <div class="backregister">
        <div id='Register-form'>
        <form id='registerr'>
  <div class="form-group">
    <h1 >Registration Form</h1>
    <font color='blue'>{output}</font>
    <br/>
    <label for="name">Name</label>
    <input type="name" class="form-control" value={name} onChange={e => setName(e.target.value)}/>
  </div>
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" value={email} onChange={e => setEmail(e.target.value)}/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" value={password} onChange={e => setPassword(e.target.value)}/>
  </div>
  <div class="form-group">
    <label for="mobile">Mobile:</label>
    <input type="text" class="form-control" value={mobile} onChange={e => setMobile(e.target.value)}/>
  </div>
  <div class="form-group">
    <label for="address">Address</label>
    <textarea class='form-control' rows={"3"} value={address} onChange={e => setAddress(e.target.value)}></textarea>
  </div>
  <div class='form-group'>
    <label for="city">City</label>
    <br/>
    <select class='form-control' value={city} onChange={e => setCity(e.target.value)}>
        <option>Select City</option>
        <optgroup label='MP'>
            <option>Indore</option>
            <option>Ratlam</option>
            <option>Bhopal</option>
            </optgroup>
    </select>
  </div>
  <div class='form-group'>
    <label for='gender'>Gender</label>
    <br/>
    &nbsp;&nbsp;
    Male&nbsp;&nbsp;<input type='radio' name='gender' value='male' onChange={e => setGender(e.target.value)}/>
    <br/>
    Female&nbsp;&nbsp;<input type='radio' name='gender' value='female' onChange={e => setGender(e.target.value)}/>
  </div>
  <button type="button" class="btn btn-primary" onClick={handelSubmit}>Submit</button>
</form>
</div>
</div>
        </>
    );
};

export default Register;