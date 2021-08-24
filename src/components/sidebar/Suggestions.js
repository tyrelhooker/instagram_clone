import React, { memo, useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
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
    
  )
}
