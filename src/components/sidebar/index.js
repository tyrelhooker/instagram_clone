import React from 'react';
import useUser from '../../hooks/use-user';

export default function Sidebar() {
  // Destructure from returned value in use-user hook with a default value set to empty object in case user is empty
  const { user: { docId, userId, following, username, fullName } = {} } = useUser();

  // const { user } = useUser;
  // const { docId } = user;
  console.log('sidebar', '==>', fullName);
  
  return (
    <p>This is the Sidebar</p>
  )
}