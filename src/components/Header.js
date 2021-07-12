import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';

export default function Header() {
  const { firebase } = useContext(FirebaseContext);

  return (
    <header className='h-16 bg-white border-b mb-8'>
      <div className='container mx-auto max-width-lg h-full'>
        <div className='flex justify-between h-full'>
          
          <div className='flex text-center items-center cursor-pointer'>
            <h1>
              <Link to={ROUTES.DASHBOARD} aria-label='Dashboard'>
                <img src={logo} alt='Instagram logo' className='bg-white w-8/12' />
              </Link>
            </h1>
          </div>
          
          <div className='flex text-center items-center'>
            <button className='bg-blue-500 rounded text-white  px-4 py-1.5'>
                Log in
            </button>
            <button className='bg-white rounded px-4 py-1.5'>
              Sign Up
            </button>
          </div>


        </div>
      </div>
    </header>
  )
}