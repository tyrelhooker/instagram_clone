// import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ username }) {
  return (
    <div className='flex border-b items-center h-4 p-4 py-9'>
      <Link to={`/p/${username}`} className='flex items-center'>
        <img
          className='flex rounded-full h-8 w-8 mr-3'
          src={`/images/avatars/${username}.jpg`}
          alt={`${username} profile avatar`}
        />
      </Link>
      <p className='font-bold'>{username}</p>
    </div>
  )
}