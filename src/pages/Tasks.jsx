import React from 'react'
import { useState, useEffect } from 'react'
import TaskItem  from '../components/TaskItem'

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    fetch ('https://alex-hlatsko.github.io/freex/src/data.json')
      .then(res => res.json())
      .then(data => setTasks(data))
    },[]);
  
  const changeTasklist = id => {
    const copy = [...tasks]
    const current = copy.find(t => t.id === id)
    current.isStarted = !current.isStarted
    setTasks(copy)
  }
  const removeTasklist = id => {
    setTasks([...tasks].filter(t => t.id !== id))
  }

  return (
    <>
      {
        tasks.map(task => (
          <TaskItem key={task.id} tasks={task} changeTasklist={changeTasklist} removeTasklist={removeTasklist}/>
        ))
      }
    </>
  )
}

export default Tasks