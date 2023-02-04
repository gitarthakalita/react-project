import React, { useState, createContext, useEffect } from 'react'

import { auth } from '../firebase/firebase';

import {onAuthStateChanged} from 'firebase/auth';

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
 
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (userData) => {
      if(userData){
        setUserData(userData)
      } else {
        setUserData(null)
      }
    })
  }, [])
 

  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
}

export default UserContext;