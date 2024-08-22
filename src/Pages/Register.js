import React from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { app, auth, db } from '../Config/Config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Define validation schema
const schema = yup.object().shape({
  fullName: yup.string().required('Full Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { email, password, fullName } = data;
    toast("You have to register");

    try {
      const userCreate = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCreate.user;
      console.log("User created");

      await setDoc(doc(db, "users", user.uid), {
        fullName: fullName,
        email: email,
      });

      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="signup">
      <form className='signupform' onSubmit={handleSubmit(onSubmit)}>
        <h2>Register</h2>
        <label htmlFor='fullName'>
          Full Name:
          <br/>
          <input
            type="text"
            placeholder='Full Name'
            {...register('fullName')}
          />
          {errors.fullName && <p>{errors.fullName.message}</p>}
        </label>
        <label htmlFor='email'>
          Email:
          <br/>
          <input
            type="text"
            placeholder='Email'
            {...register('email')}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </label>
        <label htmlFor='password'>
          Password:
          <br/>
          <input
            type="password"
            placeholder='Password'
            {...register('password')}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </label>
        <button type="submit">Create Account</button>
        <br />
        <hr />
        <p>Already registered? <Link to="/Login">Login</Link></p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
