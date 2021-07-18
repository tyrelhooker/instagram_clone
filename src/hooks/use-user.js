import { useState, useEffect, useContext } from "react";
import { getUserByUserId } from '../services/firebase';
import UserContext from '../context/user';

// This hook is pulling out the user's information

export default function useUser() {
  const [activeUser, setActiveUser] = useState({});
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function getUserObjByUserId() {
      // TODO: Query for user data in firestore
      const [response] = await getUserByUserId(user.uid);
      setActiveUser({ ...response }); // pass the user response to the state of activeUser
    }
    // Test for user exists
    if (user && user.uid) {
      getUserObjByUserId();
    }
  }, [user]);

  return { user: activeUser }; // return the activeUser as user to the hook when called
}

