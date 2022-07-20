import React from 'react'
import { BsCheck } from 'react-icons/bs'
import { TiDelete } from 'react-icons/ti'
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

    <div className="task">
      <div className="task__icon task__content__ico"><BsCheck onClick={() => startTask(task.id)} className={`${task.isStarted ? 'task_active': 'task_unactive'}`}></BsCheck></div>
      <div className="task__content">
        <div className="task__text">
          <h1 className='task__title'>{task.title}</h1>
          <p className='task__sub_title'>{task.author}</p>
          <a href={"mailto:"+ task.email}><p className='task__sub_title'>{task.email}</p></a>
        </div>
        <div className="task__description">
          <p className="task__sub_title text-gray-400">{task.subTitle}</p>
        </div>
        {task.taskId !== user.uid ? <div className="task__icon delete"><TiDelete size={32} onClick={() => deleteTask(task.id)}></TiDelete></div> : ''}
      </div>
    </div>
  )
}

export default StartedTask