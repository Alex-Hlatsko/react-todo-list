import React from 'react'

//Import All For Firebase
import { useState, useEffect } from 'react'
import { db } from '../../index'
import { collection, onSnapshot, query, deleteDoc, updateDoc, doc } from 'firebase/firestore'

//Import Icons
import { BiTask } from 'react-icons/bi'
import { BsTrash } from 'react-icons/bs'
import { FaUserCog } from 'react-icons/fa'

const Task = ({ task, user }) => {

  // Get All Tasks From Database
  const [tasksData, getTasks] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "tasks"))
    const unsub = onSnapshot(q, (querySnapshot) => {
      let tasksArray = []
      querySnapshot.forEach((doc) => {
        tasksArray.push({ ...doc.data(), id: doc.id })
      })
      getTasks(tasksArray)
    })
    return () => unsub()
  }, []);

  // Get All Users From Database
  const [usersData, getUsers] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "users"))
    const unsub = onSnapshot(q, (querySnapshot) => {
      let usersArray = []
      querySnapshot.forEach((doc) => {
        usersArray.push({ ...doc.data(), id: doc.id })
      })
      getUsers(usersArray)
    })
    return () => unsub()
  }, []);

  // Base Functions:

  // 1. Take the Task
  const startTask = id => {
    const current = tasksData.find(t => t.id === id)
    if (current.taskId !== user.uid) {
      updateDoc(doc(db, "tasks", id), {
        startedBy: user.uid
      })
    }
  }

  // 2. Delete the Task
  const deleteTask = id => {
    const current = tasksData.find(t => t.id === id)
    if (current.taskId === user.uid) {
      deleteDoc(doc(db, "tasks", id))
    }
  }

  // 3. Turn in the Task (If someone completed your task, you can delete it and the one who completed your task is awarded a point)
  const finishTask = (userId, id) => {
    const current = usersData.find(u => u?.uid === userId)
    const score = current.finishedTasks
    updateDoc(doc(db, "users", userId), {
      finishedTasks: score + 1
    })
    deleteDoc(doc(db, "tasks", id))
  }

  return (
    <div className="task flex flex-col mt-5 py-4 px-6">
      {task?.taskId === user?.uid ? '' : <div className="top_task mb-4"><p className='my-2 text-lg'>{task?.author}</p></div>}



      <div className="flex items-center">
        {task?.taskId === user?.uid ? '' : <div className="w-8 h-8 cursor-pointer start mr-4" ><BiTask className='task_icon' size={38} onClick={() => startTask(task?.id)}></BiTask></div>}

        {task?.startedBy !== '' && task?.isStarted === false ? <div className="w-8 h-8 mr-3" ><FaUserCog size={26} color="white"></FaUserCog></div> : ''}
        {task?.isStarted === true && task?.startedBy !== '' ? <div className="w-8 h-8 cursor-pointer mr-3" ><FaUserCog className='text-green-400' size={32} onClick={() => finishTask(task?.startedBy, task?.id)}></FaUserCog></div> : ''}



        <div className="w-full flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className='task_title text-white mb-2 font-bold px-2'>{task?.title}</h1>
            <p className="text-sm text-white flex-wrap px-2">{task?.subTitle}</p>
            {task.taskId === user?.uid ? '' :
              <>
                {/* <p className='text-sm text-white'>{task?.author}</p> */}
                {/* <a className='hover:text-yellow-400' href={"mailto:z" + task?.email}><p className='task_mail text-white'>{task?.email}</p></a> */}
              </>}
          </div>
          {task.taskId === user?.uid ? <div className="w-8 h-8 cursor-pointer"><BsTrash className='hover:text-rose-700 text-white' size={28} onClick={() => deleteTask(task?.id)}></BsTrash></div> : ''}
        </div>
      </div>

    </div>
  )
}

export default Task