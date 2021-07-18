import React from 'react';
import useUser from '../../hooks/use-user';
import UserContext from '../../context/user';

export default function Sidebar() {
  // Destructure from returned value in use-user hook with a default value set to empty object in case user is empty
  const { user: { docId, userId, following, username, fullName } = {} } = useUser();
  
  return (
    <div className='p-4'>
      <p>This is the Sidebar</p>
    </div>
    
  )
}