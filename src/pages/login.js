import React, { lazy, useEffect, useState } from 'react';
import iphonePhoto from '../assets/images/iphone-with-profile.jpg';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

import * as ROUTES from '../constants/routes';
// const SignUp = lazy(() => import('./signup'));




export default function Login() {

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const invalid = emailAddress === '' || password < 1;
  
  let opacity; 

  

  console.log(invalid);

  useEffect(() => {
    document.title = 'Login - Instagram'
  }, []);

  const submit = e => {
    e.preventDefault();
  }

  const handleEmailInputChange = (event) => {
    setEmailAddress(event.target.value);
  }

  const handlePasswordInputChange = (event) => {
    setPassword(event.target.value);
  }

  if (invalid) {
    opacity = 'opacity-50';
  } else {
    opacity = 'opacity-100';
  }

  // if (valid.email && valid.password) {
  //   console.log(valid.email, valid.password);
  //   opacity = 'opacity-100';
  // } else {
  //   // console.log(valid.email)
  //   // console.log('not working')
  //   opacity = 'opacity-50';
  // }



  return (
    <div className='container flex mx-auto max-w-screen-md border-2 border-red-500 p-4 items-center h-screen bg-gray-50'>
      
      <div className='flex w-3/5 mx-auto'>
        <img src={iphonePhoto} alt='iPhone with Instagram app' />
      </div>

      <div className='flex flex-col w-2/5'>
        <div className='flex flex-col justify-center w-full rounded border p-4 mb-4 bg-white'>
          <h1 className='flex justify-center w-full'>
            <img src={logo} alt='Instagram logo' className='w-6/12 m-3'/>
          </h1>
          <form method='POST'>
            <input 
              aria-label="Enter your email adress"
              className='border rounded w-full p-4 mb-2 text-sm'
              type='text' 
              name='emailAddress' 
              placeholder='email address'
              onChange={handleEmailInputChange}
              value={emailAddress}
            />
            <input
              aria-label="Enter your password"
              className='border rounded w-full p-4 mb-2 text-sm' 
              type='password' 
              name='password' 
              placeholder='password'
              onChange={handlePasswordInputChange}
              value={password}
            />
            <button
              className={`px-4 py-1 text-white font-semibold rounded bg-blue-300 min-w-full ${opacity}`}
              type='submit' 
              value='Submit'>
              Log in
            </button>
          </form>
        </div>

        <div className='flex justify-center items-center flex-col w-full rounded border p-4 bg-white'>
          <p className='text-sm'> 
            Don't have an account? {' '}
            <Link to={ROUTES.SIGN_UP}>
              Sign up
            </Link> 
          </p>
        </div>
      </div>
    </div>
  )
}