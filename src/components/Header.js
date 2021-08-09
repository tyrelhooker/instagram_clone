import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'
import FirebaseContext from '../context/firebase';
import UserContext from '../context/user';
import * as ROUTES from '../constants/routes';

export default function Header() {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);

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
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 mr-6" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor">
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
                      />
                  </svg>
                </Link>

                <button
                  type='button'
                  title='Log Out' 
                  className='bg-blue-500 rounded text-white px-4 py-1.5 mr-6' 
                  onClick={() => firebase.auth().signOut()}
                  onKeyDown={(e) => e.key === 'enter' && firebase.auth().signOut()}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
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
                    className='bg-blue-500 rounded text-white font-bold px-4 py-1.5'>
                    Log In
                  </button>
                </Link>

                <Link to={ROUTES.SIGN_UP} aria-label='Sign Up'>
                  <button 
                    type='button'
                    className='bg-white rounded text-blue font-bold px-4 py-1.5'>
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