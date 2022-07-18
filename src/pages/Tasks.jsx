import React from 'react'
import Task  from '../components/TaskItem'
import { useState, useEffect } from 'react'
import { db } from '../index'
import { collection, onSnapshot, query } from 'firebase/firestore';

const Tasks = () => {

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
    <div>Tasks</div>
    {
      tasksData.map(task => (
        task.startedBy === '' ? <Task task={task}/> : '' 
      ))
    }
    </>
  )
}

export default Tasks