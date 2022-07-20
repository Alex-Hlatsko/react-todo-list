import React from 'react'
import { BsTrash } from 'react-icons/bs'
import { FaUserCog } from 'react-icons/fa'
import { BiTask } from 'react-icons/bi'
import { useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useContext } from 'react';
import { Context } from '../index';
import { db } from '../index'
import { collection, onSnapshot, query, deleteDoc, updateDoc, doc } from 'firebase/firestore';

const Task = ( {task} ) => {
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

  const [usersData, getUsers] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "users"))
    const unsub = onSnapshot(q, (querySnapshot) => {
      let usersArray = []
      querySnapshot.forEach((doc) => {
        usersArray.push({...doc.data(), id: doc.id})
      })
      getUsers(usersArray)
    })
    return () => unsub()
    },[]);

  const startTask = id => {
    const current = tasksData.find(t => t.id === id)
    if (current.taskId !== user.uid){
      updateDoc(doc(db, "tasks", id), {
        startedBy: user.uid
      })
    }
  }

  const deleteTask = id => {
    const current = tasksData.find(t => t.id === id)
    if (current.taskId === user.uid){
      deleteDoc(doc(db, "tasks", id))
    }
  }

  const finishTask = (userId, id) => {
    const current = usersData.find(u => u.uid === userId)
    const score = current.finishedTasks
    updateDoc(doc(db, "users", userId), {
      finishedTasks: score+1
    })
    deleteDoc(doc(db, "tasks", id))
  }

  return (
    <div className="task">
      {task.taskId === user.uid ? '' : <div className="task__icon start" ><BiTask size={32} onClick={() => startTask(task.id)}></BiTask></div>}
      {task.startedBy !== '' && task.isStarted === false ? <div className="task__icon" ><FaUserCog size={32}></FaUserCog></div> : ''}
      {task.isStarted === true ? <div className="task__icon" ><FaUserCog className='text-green-500' onClick={() => finishTask(task.startedBy, task.id)}size={32}></FaUserCog></div> : ''}
      <div className="task__content">
        <div className="task__text">
          <h1 className='task__title'>{task.title}</h1>
          {task.taskId === user.uid ? '' : <><p className='task__sub_title'>{task.author}</p><a href={"mailto:z"+ task.email}><p className='task__sub_title'>{task.email}</p></a></>}
        </div>
        <div className="task__description">
          <p className="task__sub_title text-gray-400">{task.subTitle}</p>
        </div>
        {task.taskId === user.uid ? <div className="task__icon delete"><BsTrash size={32} onClick={() => deleteTask(task.id)}></BsTrash></div> : ''}
      </div>
    </div>
  )
}

export default Task