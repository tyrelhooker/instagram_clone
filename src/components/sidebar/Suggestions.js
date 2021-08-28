import React, { memo, useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import { getSuggestedProfiles } from '../../services/firebase';

// Pass in userId so you dont return a bunch of random profiles, but suggested profiles not following
const Suggestions = ({ userId }) => {
  const [profiles, setProfiles] = useState(null);

  // Each time the userId changes b/c can have an empty userId
  useEffect(() => {
    async function suggestedProfiles() {
      const response = await getSuggestedProfiles(userId);
      setProfiles(response);
    }
    // Need to check if you have a userId before calling suggestedProfiles b/c it could be empty
    if (userId) {
      suggestedProfiles();
    }
  }, [userId])

  return (
    !profiles ? 
      (
        <Skeleton count={3} height={61} />
      ) : (
        profiles.map((profile) => 
          <Link to={`/p/${profile.username}`} className='grid grid-cols-4 gap-4 mb-4 items-center'>
            <div>
              <img
                className='rounded-full w-8 flex mr-3'
                src={`/images/avatars/${profile.username}.jpg`}
                alt={`Suggested profile ${profile.username}`}
              />
            </div>
            <div className='col-span-3'>
              <p className='font-bold text-sm'>{profile.username}</p>
              <p className='text-sm'>{profile.fullName}</p>
            </div>
          </Link>
        )
      )
  )
}

export default memo(Suggestions);
