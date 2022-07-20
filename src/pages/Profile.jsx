import React from 'react'
import { useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useContext } from 'react';
import { Context } from '../index';
import { db } from '../index'

const Profile = () => {
  const {auth} = useContext(Context)
  const [user] = useAuthState(auth);

  const [userData, getData] = useState([]);
  useEffect(() => {
    db.collection('users').doc(user.uid).get().then((snapshot) => {
      getData(snapshot.data())})
    },[]);
    
  return (
    <>
    <div>
      <h1 className='title'>{userData.name}</h1>
      <img className="image" src={userData.photoURL} alt='img' />
      <h1 className="sub__title">Finished Tasks: {userData.finishedTasks}</h1>
    </div>
    </>
  )
}

export default Profile
