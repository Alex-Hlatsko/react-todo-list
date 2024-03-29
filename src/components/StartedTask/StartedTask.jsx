import React from 'react'
import { useState, useEffect } from 'react'
import './styles.css'

//Import All For Firebase
import { db } from '../../index'
import { collection, onSnapshot, query, updateDoc, doc } from 'firebase/firestore'

// Import Icons
import { BsCheck } from 'react-icons/bs'
import { TiDelete } from 'react-icons/ti'

const StartedTask = ({task, user}) => {

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

  // Base Functions:

  // 1. Checkbox (done task or no) 
  const startTask = id => {
    const current = tasksData.find(t => t.id === id)
    if (current.taskId !== user.uid){
      updateDoc(doc(db, "tasks", id), {
        isStarted: !current.isStarted
      })
    }
  }
  // 2. Abandon the Task
  const deleteTask = id => {
    const current = tasksData.find(t => t.id === id)
    if (current.startedBy === user.uid){
      updateDoc(doc(db, "tasks", id), {
        startedBy: ''
      })
    }
  }

  return (
    <div className="task flex items-center mt-5 w-full rounded-lg p-3 px-4">
      <div className="w-8 h-8 cursor-pointer task__content__ico"><BsCheck size={28} onClick={() => startTask(task.id)} className={`${task.isStarted ? 'task_active': 'task_unactive'}`}></BsCheck></div>
      <div className="w-full flex items-center justify-between">
        <div className="w-1/3 flex flex-col">
          <h1 className='task_title mb-2x text-white'>{task.title}</h1>
          <p className='text-sm text-white'>{task.author}</p>
          <a href={"mailto:"+ task.email}><p className='task_mail text-white hover:text-yellow-400'>{task.email}</p></a>
        </div>
        <div className="w-2/4">
          <p className="task_desc text-white">{task.subTitle}</p>
        </div>
        {task.taskId !== user.uid ? <div className="w-8 h-8 cursor-pointer hover:text-rose-500 text-white"><TiDelete size={32} onClick={() => deleteTask(task.id)}></TiDelete></div> : ''}
      </div>
    </div>
  )
}

export default StartedTask