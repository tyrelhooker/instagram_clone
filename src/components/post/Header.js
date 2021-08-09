import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ content: {username} }) {
  return (
    <div className='flex text-center items-center my-2'>
      <Link to={`/p/${username}`} className='pr-2'>
        <img
          className='flex rounded-full h-8 w-8'
          src={`/images/avatars/${username}.jpg`}
          alt={`${username} profile avatar`}
        />
      </Link>
      {username}
    </div>
  )
}