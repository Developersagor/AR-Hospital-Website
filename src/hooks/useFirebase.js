import { useState, useEffect } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  const [services, setServices] = useState([]);

  // fetch services data
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [services]);

  // google login
  const googleProvider = new GoogleAuthProvider();
  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // logout system
  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  // observer
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  return {
    user,
    signInUsingGoogle,
    logOut,
    services,
    isLoading,
    setIsLoading,
  };
};

export default useFirebase;
