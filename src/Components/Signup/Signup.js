import React, { useState } from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';

export default function Signup() {
  const [username,setUsername] =useState('')
  const [email,setEmail] =useState('')
  const [phone,setPhone] =useState('')
  const [password,setPassword] =useState('')


  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log('username='+username,'email='+email,'phone='+phone,'password='+password)
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>

        <form onSubmit={handleSubmit}>
          <label>Username</label>                         {/*Username */}
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            placeholder='Your Username'
          />
          <br />
          <label>Email</label>                            {/*Email */}
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder='Your Email'
          />
          <br />
          <label>Phone</label>                            {/*Phone */}
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            placeholder='Your Phone Number'
          />
          <br />
          <label>Password</label>                         {/*Password */}
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder='Enter your password'
          />
          <br />
          <br />
          <button>Signup</button>                        {/*Signup Button */}
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
