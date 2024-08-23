import './Login.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../Config/Config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes } from '../configs/routes';

// Define validation schema
const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { email, password } = data;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login Successfully");
      navigate(Routes.GETVACCINATED);
    } catch (err) {
      console.error(err);
      // Display a user-friendly error message
      if (err.code === 'auth/wrong-password') {
        toast.error('Incorrect password. Please try again.');
      } else if (err.code === 'auth/user-not-found') {
        toast.error('No user found with this email.');
      } else {
        toast.error('Please verify your login details');
      }
    }
  };

  return (
    <div className="signin">
      <form className='signinform' onSubmit={handleSubmit(onSubmit)}>
        <div className="heading-container">
          <h2>Login</h2>
          <hr />
          <img src={"Assets/Vaccine.png"} alt="Vaccine" className="heading-image" />
        </div>
        <label htmlFor='email'>
          Email:
          <br/>
          <input type="text" placeholder='Email' {...register('email')} />
          {errors.email && <p>{errors.email.message}</p>}
        </label>
        <label htmlFor="password">
          Password:
          <br/>

          <input
            type="password"
            placeholder='Password'
            {...register('password')}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </label>
        <button type="submit">Login</button>
        <br />
        <hr />
        <p>Don't have an account? <Link to={Routes.SIGNUP}>Register</Link></p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
