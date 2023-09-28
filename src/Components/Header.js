import { React, useState } from 'react'
import { getAuth, signOut } from "firebase/auth";
import { removeUser } from '../Utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


const Header = () => {

  const user = useSelector(store => store.user)
  const dispatch = useDispatch();

  const nevigate = useNavigate();

  const handleSignOut = () => {

    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(removeUser());
      nevigate("/")
    }).catch((error) => {
      // An error happened.
    });
  }

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