import React from 'react'

//Import All For Firebase
import { useState, useEffect } from 'react'
import { db } from '../../index'
import { collection, onSnapshot, query } from 'firebase/firestore'

// import StartedTask from '../../components/StartedTask/StartedTask'

const Activetasks = ({user}) => {

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
      {/* {
        // Display TasksS
        tasksData.map(task => (
          task.startedBy === user.uid ? <StartedTask task={task}/> : '' 
        ))
      } */}
      ActiveTasks
    </>
  )
}

export default Activetasks