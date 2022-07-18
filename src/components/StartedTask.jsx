import React from 'react'
import { BsTrash, BsCheck } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useContext } from 'react';
import { Context } from '../index';
import { db } from '../index'
import { collection, onSnapshot, query, updateDoc, doc } from 'firebase/firestore';

const StartedTask = ( {task} ) => {
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

    const startTask = id => {
    const current = tasksData.find(t => t.id === id)
    if (current.taskId !== user.uid){
      updateDoc(doc(db, "tasks", id), {
        isStarted: !current.isStarted
      })
    }
  }

  const deleteTask = id => {
    const current = tasksData.find(t => t.id === id)
    if (current.startedBy === user.uid){
      updateDoc(doc(db, "tasks", id), {
        startedBy: ''
      })
    }
  }


  return (
    <div className='task'>
      <button className='task__content' onClick={() => startTask(task.id)}>
        <div className="task__content__ico"><BsCheck className={`${task.isStarted ? 'task_active': 'task_unactive'}`}></BsCheck></div>
        <div className="task__content__text">
          <h1 className='task__title'>{task.title}</h1>
          <p className='task__sub_title'>{task.author}</p>
          <p className='task__sub_title'>{task.email}</p>
        </div>
      </button>
      <button className='task__remove' onClick={() => deleteTask(task.id)}>
        <BsTrash size={32}></BsTrash>
      </button>
    </div>
  )
}

export default StartedTask