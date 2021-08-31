import React, { memo, useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import SuggestedProfile from './Suggested-profile';
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
        <Skeleton count={1} height={150} />
      ) : profiles.length > 0 ? 
        (
          <div className='flex flex-col'>
            <div className='flex items-center align-items justify-between mb-2 mt-2'>
              <p className='font-bold text-gray-700'>Suggestions for you</p>
            </div>
            <div className='grid gap-5 mt-4'>
              {profiles.map((profile) => (
                <SuggestedProfile
                  key={profile.docId}
                  userDocId={profile.docId}
                  username={profile.username}
                  fullName={profile.fullName}
                  profileId={profile.userId}
                  userId={userId}
                />
              ))}
            </div>
          </div>
        ) : null
  )
}

export default memo(Suggestions);
