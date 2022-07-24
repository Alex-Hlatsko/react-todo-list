import React from 'react'

//Import All For Firebase
import { useState, useEffect, useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context, db } from '../index'
import { collection, onSnapshot, query } from 'firebase/firestore'

import StartedTask from '../components/StartedTask'

const Activetasks = () => {
  // Get User
  const {auth} = useContext(Context)
  const [user] = useAuthState(auth)

  // Get All Tasks From Database
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
        // Display TasksS
        tasksData.map(task => (
          task.startedBy === user.uid ? <StartedTask task={task}/> : '' 
        ))
      }
    </>
  )
}

export default Activetasks