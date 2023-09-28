import { React, useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../Utils/userSlice"
import { useDispatch } from 'react-redux';

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([

    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Browse />
    }
  ])


  useEffect(() => {
    const auth = getAuth();

    // Add an auth state changed listener
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // If user is signed in, get their data
        const { uid, displayName, email } = user;

        // Dispatch addUser action to add user data to Redux store
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }))
      } else {
        // If user is signed out, dispatch an action 
        dispatch(removeUser)
      }
    });
  }, [])




  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default Body