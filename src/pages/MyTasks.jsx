import React from 'react'
import TaskItem  from '../components/TaskItem'
import { useState, useEffect } from 'react'
import { db } from '../index'
import { collection, onSnapshot, query } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useContext } from 'react';
import { Context } from '../index';

const MyTasks = () => {
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
    <div>Tasks</div>
    {
      tasksData.map(task => (
        task.taskId === user.uid ? <TaskItem task={task}/>  : ''
      ))
    }
    </>
  )
}

export default MyTasks