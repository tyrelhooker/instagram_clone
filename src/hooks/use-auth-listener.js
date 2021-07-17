import { useState, useEffect, useContext } from "react";
import FirebaseContext from '../context/firebase';

export default function useAuthListener() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));

  const { firebase } = useContext(FirebaseContext);

  // If firebase changes then runs useEffect
  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser))
        setUser(authUser);
      } else {
        localStorage.removeItem('authUser');
        setUser(null);
      }
    });

    // Cleans up the listener
    return () => listener();
  }, [firebase]);

  return { user };
}