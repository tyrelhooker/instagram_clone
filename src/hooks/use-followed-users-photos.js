import { useState, useEffect, useContext } from "react";
import UserContext from '../context/user';

export default function useFollowedUsersPhotos() {
  const [photos, setPhotos] = useState(null);
  const { user: { uid: userId = '' } } = useContext(UserContext);
  // const userId = uid || '';
  
  

  useEffect(() => {
    async function getTimelinePhotos() {
    console.log('userId inside getTimelinePhotos', userId);

    }
    if (userId) {
      getTimelinePhotos();
    }
  }, [userId]);

  return { photos };
}