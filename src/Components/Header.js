import { React, useState, useEffect } from 'react'
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from "../Utils/userSlice"
import { LOGO } from '../Utils/constant';

const Header = () => {

  // allows to extract data from the Redux store
  const user = useSelector(store => store.user)

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // Function to handle sign out
  const handleSignOut = () => {

    const auth = getAuth();

    // Signing out the user
    signOut(auth).then(() => { })
      .catch((error) => {

        navigate("/error");
      });
  }

  // Using useEffect hook to add an auth state changed listener
  useEffect(() => {
    const auth = getAuth();

    // onAuthStateChanged adds an observer for changes to the signed-in user's ID token.  
    // It's function from Firebase that keeps track of user's sign-in status. 

    // It runs every time there's a change in the user's sign-in status - like when user signs in or out.
    //  ** In this code, it's used to do different things based on whether the user is signed in or not:
    //   - If user is signed in, it gets user's details & adds them to Redux store. then navigates to "/browse" page.
    //   - If user is not signed in, it removes any user data from Redux store and goes back to the home page ("/").
    // So, `onAuthStateChanged` helps the app to react in real-time to changes in the user's sign-in status.

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // If user is signed in, get their data
        const { uid, displayName, email } = user;

        // Dispatch addUser action to add user data to Redux store
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }))
        navigate("/browse")

      } else {
        // If user is signed out, dispatch action
        dispatch(removeUser())
        navigate("/")
      }
    });

    // unsubscribe when component unmount
    return () => unsubscribe();

  }, [])

  return (
    <>

      <div className="sticky w-full px-8 pt-6 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
        <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />

        {/* If user is signed in, show Sign Out button and display name */}
        {user &&
          (<div className="flex align-middle items-center gap-6 justify-between">
            <button className='text-2xl z-40 text-white font-bold' onClick={handleSignOut}>Sign Out</button>
            <div className="text-white text-2xl font-bold align-middle">{user.displayName}</div>
          </div>
          )
        }
      </div>

    </>
  )
}

export default Header



