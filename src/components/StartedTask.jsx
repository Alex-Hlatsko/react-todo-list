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
    <div className="task flex items-center mt-5 w-11/12 rounded-lg p-3 px-4">
      <div className="w-8 h-8 cursor-pointer task__content__ico"><BsCheck size={28} onClick={() => startTask(task.id)} className={`${task.isStarted ? 'task_active': 'task_unactive'}`}></BsCheck></div>
      <div className="w-full flex items-center justify-between">
        <div className="w-1/3 flex flex-col">
          <h1 className='text-2xl mb-2'>{task.title}</h1>
          <p className='text-sm'>{task.author}</p>
          <a className='hover:text-violet-500 underline' href={"mailto:"+ task.email}><p className='text-sm'>{task.email}</p></a>
        </div>
        <div className="w-2/4">
          <p className="text-sm text-gray-400">{task.subTitle}</p>
        </div>
        {task.taskId !== user.uid ? <div className="w-8 h-8 cursor-pointer hover:text-rose-700"><TiDelete size={32} onClick={() => deleteTask(task.id)}></TiDelete></div> : ''}
      </div>
    </div>
  )
}

export default StartedTask