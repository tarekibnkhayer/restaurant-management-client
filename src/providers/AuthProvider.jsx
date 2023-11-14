import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo
    })
  };

  const signOutUser = () => {
    return signOut(auth);
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      if(currentUser){
        setUser(currentUser);
        setLoading(false);
      }
      else{
        setUser(null);
        setLoading(false);
      }
    })
    return () => unSubscribe()
  },[])

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    updateUserProfile,
    signOutUser
  }
    return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
}