import React, { useState } from 'react'

import './Register.css'
import { Link, useNavigate } from 'react-router-dom'
import { app , auth ,db} from '../Config/Config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Register = () => {

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("")
    const [fullName, setFullName] = useState("");
    const Navigate =useNavigate()


    const handleSubmit= async (e) =>{
        toast("You have to register ")

        e.preventDefault()
        try {
           const UserCreate= await createUserWithEmailAndPassword(auth,email,password)
           const user=UserCreate.user;
            console.log("user created")

            await setDoc(doc(db, "users", user.uid), {
                fullName: fullName,
                email: email,
            });
            Navigate("/home")
        }catch(err){
            console.log(err)
        }


    }
  return (
    <div className="signup">
        <form  className='signupform' onSubmit={handleSubmit} >
            <h2>Register </h2>
            <label htmlFor='FullName'>Full Name :
                <input type="text" placeholder='Full Name' onChange={(e)=>setFullName(e.target.value)}/>
            </label>
            <label htmlFor='email'>Email :
                <input type="text" placeholder='Email'onChange={(e)=>setEmail(e.target.value)}/>
            </label>
            <label htmlFor="password">Password :
                <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}></input>
            </label>
            <button type="submit">Create Account</button>
            <br/> <hr/>
            <p>Already registered ? <Link to="/Login">Login</Link></p>
        </form>
        <ToastContainer />
    </div>
  )
}
export default Register
