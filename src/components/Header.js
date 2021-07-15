import React, {useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';

export default function Header() {
  const { firebase } = useContext(FirebaseContext);
  // const loggedIn = null;
  // let loggedIn = 'yes';
  const user = {
    displayName: 'tj'
  }


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
            
            
            {user ? (
              <>
                <Link to={ROUTES.DASHBOARD} aria-label='Home'>
                  Dashboard
                </Link>
                <button
                  type='button'
                  title='Log Out' 
                  className='bg-blue-500 rounded text-white  px-4 py-1.5' 
                  onClick={() => { firebase.auth().signOut() }}
                  onKeyDown={(e) => e.key === 'enter' && firebase.auth().signOut()}
                >
                  Log Out
                </button>
                <div className='flex items-center cursor-pointer'>
                  <Link to={`/p/${user.displayName}`}>
                    <img
                      className='flex rounded-full h-8 w-8'
                      src={`/images/avatars/${user.displayName}.jpg`}
                      alt={`${user.displayName} profile avatar`}
                    />
                  </Link>
                </div>
              </>

              
            ) : (
              <>
                <Link to={ROUTES.LOGIN} aria-label='Login'>
                  <button 
                    type='button'
                    className='bg-blue-500 rounded text-white px-4 py-1.5'>
                    Log In
                  </button>
                </Link>
                <Link to={ROUTES.SIGN_UP} aria-label='Sign Up'>
                  <button className='bg-white rounded px-4 py-1.5'>
                    Sign Up
                  </button>
                </Link>
              </>
            )}

          </div>


        </div>
      </div>
    </header>
  )
}