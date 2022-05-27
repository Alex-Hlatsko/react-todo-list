import React from 'react'
import { useState, useEffect } from 'react'
import TaskItem  from '../components/TaskItem'
import { getDatabase, ref, update } from "firebase/database";

const Activetasks = () => {
  const [tasks, setTasks] = useState([]);
  const url = "https://freex-e983a-default-rtdb.europe-west1.firebasedatabase.app/.json"
  useEffect(() => {
    fetch (url)
      .then(res => res.json())
      .then(data => setTasks(data))
    },[]);
  
  const changeTasklist = id => {
    const db = getDatabase();
    const copy = [...tasks]
    const current = copy.find(t => t.id === id)
    current.isStarted = !current.isStarted

    // A post entry.
    const postData = {
      first_name: current.first_name,
      id: current.id,
      isStarted: current.isStarted,
      last_name: current.last_name,     
      time: current.time,
      title: current.title,
    };

    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates = {};
    updates[id] = postData;

    setTasks(copy)
    return update(ref(db), updates);
  }
  const removeTasklist = id => {
    setTasks([...tasks].filter(t => t.id !== id))
  }

  return (
    <>
      {
        tasks.map(task => (
          task.isStarted ? <TaskItem key={task.id} tasks={task} changeTasklist={changeTasklist} removeTasklist={removeTasklist} url={url}/> : ''
        ))
      }
    </>
  )
}

export default Activetasks