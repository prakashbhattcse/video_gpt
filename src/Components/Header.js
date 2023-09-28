import { React, useState,useEffect } from 'react'
import { getAuth, signOut,onAuthStateChanged } from "firebase/auth";
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from "../Utils/userSlice"


const Header = () => {

  const user = useSelector(store => store.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSignOut = () => {

    const auth = getAuth();
    signOut(auth).then(() => {})
    .catch((error) => {
      navigate("/error");
    });
  }


  useEffect(() => {
    const auth = getAuth();

    // Add an auth state changed listener
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // If user is signed in, get their data
        const { uid, displayName, email } = user;

        // Dispatch addUser action to add user data to Redux store
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }))
        navigate("/browse")
    
      } else {
        // If user is signed out, dispatch an action 
        dispatch(removeUser())
        navigate("/")
      }
    });
  }, [])



  return (
    <>
      <div className='absolute z-20 w-full bg-gradient-to-b from-black p-2 pt-5 pl-10 flex justify-between'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158" alt="" className='w-48' />


        {user &&
          (<><button className='text-lg' onClick={handleSignOut}>Sign Out</button>
            <div className="">{user.displayName}</div></>)
        }
      </div>
    </>

  )
}

export default Header