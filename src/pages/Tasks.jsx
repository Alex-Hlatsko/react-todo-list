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
  console.log(tasks)


  // const [tasklist, setTasklist] = useState(tasks);
  
  const changeTasklist = (id) => {
    const copy = [...tasks]
    const current = copy.find(t => t.id === id)
    current.isStarted = !current.isStarted
    setTasks(copy)
  }
  // console.log(tasklist)


  return (
    <>
      {
        tasks.map(task => (
          <TaskItem key={task.id} tasks={task} changeTasklist={changeTasklist}/>
        ))
      }
    </>
  )
}

export default Tasks