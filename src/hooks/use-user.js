import { useState, useEffect, useContext } from "react";
import { getUserByUserId } from '../services/firebase';
import UserContext from '../context/user';

// This hook is pulling out the user's information 
export default function useUser() {
  const [activeUser, setActiveUser] = useState({});
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function getUserObjByUserId() {
      // Querys user data in firestore using firebase service. destructure response from array into an object. 
      const [response] = await getUserByUserId(user.uid);

      // spread the user response object to the state of activeUser to protect the values passed to activeUser
      setActiveUser({ ...response });
    }
    // Test for user exists
    if (user && user.uid) {
      getUserObjByUserId();
    }
  }, [user]);
  
  // return the activeUser as user to the hook when called
  return { user: activeUser }; 
}

