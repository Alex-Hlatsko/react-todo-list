import React from 'react'

//Import All For Firebase
import { useState, useEffect } from 'react'
import { collection, onSnapshot, query } from 'firebase/firestore'
import { db } from '../../index'

import TaskItem  from '../../components/TaskItem/TaskItem'

const Tasks = ({user}) => {

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
      // Display Tasks
      tasksData.map(task => (
        task.taskId === user.uid || task.startedBy !== '' ? '' : <TaskItem task={task} user={user} key={task.taskId}/> 
      ))
    }
    </>
  )
}

export default Tasks