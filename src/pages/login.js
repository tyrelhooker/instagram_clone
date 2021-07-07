import React, { lazy, useEffect } from 'react';
import iphonePhoto from '../assets/images/iphone-with-profile.jpg';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

import * as ROUTES from '../constants/routes';
// const SignUp = lazy(() => import('./signup'));

// =====================
// Login.js page
// =====================

// =====================
// Structure
// =====================
// - div (parent)
// 	- div (child)
// 	- div (child)
// 		- div (child of child)
// 		- div (child of child)


// A container div that holds children
// 	- div
// 		- image of src /images/iphone-with-profile.jpg & alt tag of "iPhone with Instagram app"

// 	- div to wrap the following children
// 		- div -> (another div to wrap the form (see below for further details of the form)
// 		- div -> a paragraph with a React router link that allows to the user to navigate to 'Sign up' - use the ROUTES file to link to this particular page

// A form for the user to login with a method of POST

// An input box for the user to enter their email address with a placeholder value of Email Address

// An input box for the user to enter their password with a placeholder value of Password

// A button so that the user can submit the form

// References:
// 	- Tailwind container: https://tailwindcss.com/docs/container
// 	- Tailwind flex: https://tailwindcss.com/docs/flex

// # Challenge

// Add a document title of 'Login - Instagram' 

// Hint: Think about what React hook you'd use to apply the title - make sure that the hook chosen only runs on first render



export default function Login() {
  useEffect(() => {
    document.title = 'Login - Instagram'
  }, []);
  
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
            />
            <input
              aria-label="Enter your password"
              className='border rounded w-full p-4 mb-2 text-sm' 
              type='password' 
              name='password' 
              placeholder='password' 
            />
            <button
              className='px-4 py-1 text-white font-semibold rounded bg-blue-300 min-w-full' 
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