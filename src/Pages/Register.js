import React from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../Config/Config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Routes } from '../configs/routes';

// Define validation schema
const schema = yup.object().shape({
  fullName: yup.string().required('Full Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export const Register = () => {
  const {  register,  handleSubmit,  formState: { errors },} = useForm({resolver: yupResolver(schema), });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { email, password, fullName } = data;

    try {
      const userCreate = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCreate.user;
      console.log("User created");

      await setDoc(doc(db, "users", user.uid), {
        fullName: fullName,
        email: email,
      });

      toast.success("Account created successfully");
      navigate("/home");
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        toast.error("Email already exists");
      } else if (err.code === 'auth/invalid-email') {
        toast.error("Invalid email address");
      } else if (err.code === 'auth/weak-password') {
        toast.error("Password is too weak");
      } else {
        toast.error("Failed to create account");
      }
      console.log(err);
    }
  };

  const showValidationErrors = () => {
    if (errors.fullName) {
      toast.error(errors.fullName.message);
    }
    if (errors.email) {
      toast.error(errors.email.message);
    }
    if (errors.password) {
      toast.error(errors.password.message);
    }
  };

  return (
    <div className="signup">
      <form className='signupform' onSubmit={handleSubmit((data) => {  showValidationErrors();   onSubmit(data);
        })}
      >
        <h2>Register</h2>
        <label htmlFor='fullName'>
          Full Name:
          <br/>
          <input type="text" placeholder='Full Name' {...register('fullName')}
          />
        </label>
        <label htmlFor='email'>
          Email:
          <br/>
          <input  type="text"  placeholder='Email'  {...register('email')}/>
        </label>
        <label htmlFor='password'>
          Password:
          <br/>
          <input type="password" placeholder='Password' {...register('password')} />
        </label>
        <button type="submit">Create Account</button>
        <br />
        <hr />
        <p>Already registered? <Link to={Routes.LOGIN}>Login</Link></p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
