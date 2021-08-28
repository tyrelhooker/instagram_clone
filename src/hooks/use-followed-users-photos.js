import { useState, useEffect, useContext } from "react";
import UserContext from '../context/user';
import { getUserByUserId, getUserFollowedPhotos } from "../services/firebase";

export default function useFollowedUsersPhotos() {
  const [photos, setPhotos] = useState(null);
  const { user: { uid: userId = ''} } = useContext(UserContext);
  
  // TODO: Figure out why userId is not a sufficient dependency. I am receiving notification in devtools that the useEffect has a missing dependency 'photos'
  useEffect(() => {
    async function getTimelinePhotos() {
      const followingUserIds = await getUserByUserId(userId);

      if (followingUserIds && followingUserIds[0].following.length > 0) {
        const followedUserPhotos = await getUserFollowedPhotos(userId, followingUserIds[0].following);
        
        followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
        setPhotos(followedUserPhotos);
        console.log('response in getTimelinePhotos ==>', photos);
      }
    }

   
    getTimelinePhotos();

  }, [userId]);

  return { photos };
}