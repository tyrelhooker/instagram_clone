import React from 'react';
import useUser from '../../hooks/use-user';
import User from './User';
import Suggestions from './Suggestions';

export default function Sidebar() {
  
  // Nest object destructure from returned value in use-user hook
  const { 
    user: { docId, userId, following, username, fullName }
  } = useUser();
  
  return (
    <div className='p-4'>
      <User username={username} fullName={fullName} />
      <Suggestions userId={userId} following={following} docId={docId} />
    </div>
  )
}

// Sidebar.whyDidYouRender = true;