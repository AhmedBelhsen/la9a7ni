import './Login.css'
import React, { useState } from 'react'
import './Register.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { auth } from '../Config/Config';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const Login =()=>{
  
      const[email,setEmail]=useState("");
      const[password,setPassword]=useState("")
      const Navigate=useNavigate();
  
  
      const handleSubmit= async (e) =>{
          e.preventDefault()
          try {
             const UserCreate= await signInWithEmailAndPassword(auth,email,password)
              console.log("Login Successfully ")
              Navigate('/home');
  
          }catch(err){
              console.log(err)
          }
      }
    return (
      <div className="signin">
          <form  className='signinform' onSubmit={handleSubmit} >
          <div className="heading-container">
                    <h2>Login</h2>
                    <hr/>
                    <img src={"Assets/Vaccine.png"} alt="Vaccine" className="heading-image"/>
                </div>
              <label htmlFor='email'>Email :
                  <input type="text" placeholder='Email'onChange={(e)=>setEmail(e.target.value)} />
              </label>
              <label htmlFor="password">Password :
                  <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}></input>
              </label>
              <button type="submit" >Login</button>
              <br/> <hr/>
              <p>Don't have an account ? <Link to="/Register">Register</Link></p>
          </form>
        
      </div>
    )
  }
export default Login

