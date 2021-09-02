import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  getUserByUserId,
  updateUserFollowing,
  updateFollowedUserFollowers
} from '../../services/firebase';

export default function SuggestedProfile({ userDocId, username, fullName, profileId, userId }) {
  const [followed, setFollowed] = useState(false);

  async function handleFollowUser() {
    setFollowed(true);

    const [{ docId }] = await getUserByUserId(userId)

    console.log('sug-prof docId', docId)
    console.log('sug-prof profileId', profileId);

    await updateUserFollowing({ profileId, userId, docId });
    await updateFollowedUserFollowers({ userDocId, userId, profileId })
  };

  return (
    !followed ?
    (
      <div className='flex flex-row items-center justify-between'>
        <Link to={`/p/${username}`} className='flex items-center justify-between'>
          <div>
            <img
              className='flex rounded-full w-8 mr-3'
              src={`/images/avatars/${username}.jpg`}
              alt={`Suggested profile ${username}`}
            />
          </div>
          <div className='col-span-3'>
            <p className='font-bold text-sm'>{username}</p>
            <p className='text-sm'>{fullName}</p>
          </div>
        </Link>
        <div className='flex'>
          <button
            className='text-sm font-bold text-blue-500'
            type='button'
            onClick={handleFollowUser}
          >
            Follow
          </button>
        </div>
      </div>

    ) : null
  )

}