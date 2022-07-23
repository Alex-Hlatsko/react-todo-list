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
    <div className='flex pt-6 px-6 items-center'>
      <div>
        <img className="w-64 rounded-full h-64" src={userData.photoURL} alt='img' />
      </div>
      <div className='ml-6'>
        <h1 className='text-4xl mt-3'>{userData.name}</h1>
        <h1 className="text-xl mt-3">Rank: {userData.finishedTasks < 5 ? <span className='text-blue-600'>Beginning</span> : userData.finishedTasks >= 5 && userData.finishedTasks < 10 ? <span className='text-orange-500'>Advanced</span> : userData.finishedTasks >= 10 ? <span className='text-purple-700'>Master</span> : "Noob"}</h1>
        <h1 className="text-xl mt-3">Finished Tasks: {userData.finishedTasks}</h1>
      </div>
    </div>
    </>
  )
}

export default Profile
