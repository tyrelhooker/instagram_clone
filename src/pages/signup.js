import React, { useEffect, useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';

export default function SignUp() {
  const { firebase } = useContext(FirebaseContext);

  const [userName, setUserName] = useState('');
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = !userName || !fullName || !emailAddress || !password;

  useEffect( () => {
    document.title = 'Signup - Instagram';
  }, []);

  // The handlers use destructuring to pull out target from event.target.value
  const handleUserNameInputChange = ({target}) => {
    let name = target.value.replace(/\s+/g, '').toLowerCase();
    setUserName(name);
  };
  
  const handleFullNameInputChange = ({target}) => {
    setFullName(target.value);
  };

  const handleEmailInputChange = ({target}) => {
    let email = target.value.toLowerCase();
    setEmailAddress(email);
  }

  const handlePasswordInputChange = ({target}) => {
    setPassword(target.value);
  }

  const handleUserSignup = async (event) => {
    event.preventDefault();
    try {
      await firebase.auth().createUserWithEmailAndPassword(emailAddress, password)
      
      const createdUser = await firebase.auth().currentUser
      console.log(createdUser);
      
      await createdUser.updateProfile({
        displayName: userName
      })

      await firebase.firestore().collection('users').add({
        userId: createdUser.uid,
        username: userName.toLowerCase(),
        fullName,
        emailAddress: emailAddress.toLowerCase(),
        following: [],
        followers: [],
        dateCreated: Date.now()
      }) 
    } 
    catch (error) {
      setError(error.message);
    } 
    finally {
      console.log('Update successful');
      setUserName('');
      setFullName('');
      setEmailAddress('');
      setPassword('');
    }
  }

  return (
    <div className='container flex mx-auto max-w-xs h-screen items-center'>
      <div className='flex flex-col'> 
        <div className='flex flex-col w-full border rounded bg-white justify-center p-4 mb-4'>
          <h1 className='flex justify-center w-full'>
            <img src={logo} alt='Instagram Logo' className='w-6/12 my-3' />
          </h1>

          {error && 
            <p className='mb-4 text-xs text-red-500'>
              {error}
            </p>
          }

          <form onSubmit={handleUserSignup} method='POST'>
            <input
              aria-label='Enter your username'
              className='border rounded w-full p-4 mb-2 text-sm bg-gray-50'
              type='text'
              name='username'
              placeholder='Username'
              onChange={handleUserNameInputChange}
              value={userName}
            />
            <input
              aria-label='Enter your full name'
              className='border rounded w-full p-4 mb-2 text-sm bg-gray-50'
              type='text'
              name='fullName'
              placeholder='Full Name'
              onChange={handleFullNameInputChange}
              value={fullName}
            />
            <input
              aria-label='Enter your Email Address'
              className='border rounded w-full p-4 mb-2 text-sm bg-gray-50'
              type='text'
              name='emailAddress'
              placeholder='Email Address'
              onChange={handleEmailInputChange}
              value={emailAddress}
            />
            <input
              aria-label='Enter your Password'
              className='border rounded w-full p-4 mb-2 text-sm bg-gray-50'
              type='password'
              name='password'
              placeholder='Password'
              onChange={handlePasswordInputChange}
              value={password}
            />
            <button
              disabled={isInvalid}
              className={`rounded bg-blue-500 text-white font-bold w-full px-4 py-1 h-8 ${isInvalid && 'cursor-not-allowed opacity-50'}`}
              type='submit'
              value='Submit'
            >
              Sign Up
            </button>
          </form>
        </div>
        
        <div className='flex flex-col justify-center items-center border rounded w-full p-4 bg-white'>
          <p className='text-sm'>
            Have an account? {' '}
            <Link to={ROUTES.LOGIN}>
              Login in
            </Link>
          </p>
        </div>
        

      </div>

    </div>
  )
}