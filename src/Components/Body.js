import { React, useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import Error from './Error'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'


const Body = () => {


  const appRouter = createBrowserRouter([

    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Browse />
    },
    {
      path: "/error",
      element: <Error />
    }
  ])




  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default Body