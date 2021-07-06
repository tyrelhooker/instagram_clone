import React from 'react';
import iphonePhoto from '../assets/images/iphone-with-profile.jpg';
import logo from '../assets/images/logo.png';

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

export default function Login() {
  return (
    <div className='container mx-auto border-2 border-red-500 px-4 flex items-center space-x-4'>
      <div className='border-2 border-blue-500 max-w-lg'>
        <img 
          className='mx-auto' 
          src={iphonePhoto} 
          alt='iPhone with Instagram app' 
        />
      </div>
      <div className='border-2 border-gray-400 mx-auto max-w-sm px-4 py-4' >
        <img 
          className='mx-auto' 
          src={logo} 
          alt='Instagram logo' 
        />
        <div>
          <form className='space-y-2'>
            <input 
              className='border-2 border-gray-300 rounded min-w-full'
              type='text' 
              name='emailAddress' 
              placeholder='email address' 
            />
            <input
              className='border-2 border-gray-300 rounded min-w-full' 
              type='text' 
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
        
      </div>
    </div>
  )
}