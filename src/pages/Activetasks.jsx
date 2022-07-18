import React from 'react'
import { useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useContext } from 'react';
import { Context } from '../index';
import { db } from '../index'
import { collection, onSnapshot, query } from 'firebase/firestore';
import StartedTask from '../components/StartedTask';

const Activetasks = () => {
  const {auth} = useContext(Context)
  const [user] = useAuthState(auth);

  const [tasksData, getTasks] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "tasks"))
    const unsub = onSnapshot(q, (querySnapshot) => {
      let tasksArray = []
      querySnapshot.forEach((doc) => {
        tasksArray.push({...doc.data(), id: doc.id})
      })
      getTasks(tasksArray)
    })
    return () => unsub()
    },[]);

  return (
    <>
    {
      tasksData.map(task => (
        task.startedBy === user.uid ? <StartedTask task={task}/> : '' 
      ))
    }
    </>
  )
}

export default Activetasks