import React, { useEffect, useState, useContext } from 'react';
import iphonePhoto from '../assets/images/iphone-with-profile.jpg';
import logo from '../assets/images/logo.png';
import { Link, useHistory } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';

export default function Login() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = !emailAddress || !password;

  useEffect(() => {
    document.title = 'Login - Instagram'
  }, []);

  const handleEmailInputChange = (event) => {
    setEmailAddress(event.target.value);
  }

  const handlePasswordInputChange = (event) => {
    setPassword(event.target.value);
  }

  const handleUserLogin = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      throw error;
    }
  }

  const submit = async (event) => {
    event.preventDefault();
    try {
      await handleUserLogin(emailAddress, password);
      const loggedInUser = await firebase.auth().currentUser;

      if (!loggedInUser.displayName) {
        const setName = (userData) => {
          let name = '';
          for (const doc of userData.docs) {
            name = doc.data().username;
          }
          return name;
        }
        
        const userData = await firebase
          .firestore()
          .collection('users')
          .where('userId', "==", loggedInUser.uid)
          .get()

        await loggedInUser.updateProfile({
          displayName: setName(userData)
        })
      };

      history.push(ROUTES.DASHBOARD);
    } catch (error) {
      setEmailAddress('');
      setPassword('');
      setError(error.message);
    }
  }

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

          {error && 
            <p className='mb-4 text-xs text-red-500'>
              {error}
            </p>
          }

          <form onSubmit={submit} method='POST'>
            <input 
              aria-label="Enter your email adress"
              className='border rounded w-full p-4 mb-2 text-sm'
              type='text' 
              name='emailAddress' 
              placeholder='email address'
              onChange={handleEmailInputChange}
            />
            <input
              aria-label="Enter your password"
              className='border rounded w-full p-4 mb-2 text-sm' 
              type='password' 
              name='password' 
              placeholder='password'
              onChange={handlePasswordInputChange}
            />
            <button
              disabled={isInvalid}
              className={`px-4 py-1 text-white font-semibold rounded bg-blue-300 w-full ${isInvalid && 'cursor-not-allowed opacity-50'}`}
              type='submit' 
              value='Submit'
            >
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