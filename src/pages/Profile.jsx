import React from 'react'
import { useContext } from 'react';
import { Context } from '../index';

const Profile = () => {
  const {auth} = useContext(Context)
  return (
    <>
    <div>Profile</div>
    <button onClick={()=>auth.signOut()}>Out</button>
    </>
  )
}

export default Profile
