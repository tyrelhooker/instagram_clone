import React from 'react';
import useUser from '../../hooks/use-user';
import User from './User';

export default function Sidebar() {
  
  // Nest object destructure from returned value in use-user hook
  const { 
    user: { docId, userId, following, username, fullName }
  } = useUser();
  
  return (
    <div className='p-4'>
      <User username={username} fullName={fullName} />
    </div>
  )
}

Sidebar.whyDidYouRender = true;