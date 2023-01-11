import React from 'react'
//Import All For Firebase
import { useState, useEffect } from 'react'
import { db } from '../../index'

const Home = ({user}) => {
  // Get All Tasks From Database
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    db.collection('users').doc(user.uid).get().then((snapshot) => {
      setUserData(snapshot.data())})
  },[]);

  return (
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
  )
}

export default Home