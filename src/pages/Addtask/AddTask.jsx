import React from 'react'

// Improt All For Firebase
import { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../index'


const Addtask = ({user}) => {
  // Get Task Tilte
  const [title, setTitle] = useState("");
  // Get Task Description
  const [subTitle, setSubTitle] = useState("");

  // Submit the Task
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "" && subTitle !== ""){
      await addDoc(collection(db, "tasks"), {
        title: title,
        subTitle: subTitle,
        authorPhoto: user.photoURL,
        taskId: user.uid,
        email: user.email,
        author: user.displayName,
        isStarted: false,
        startedBy: ''
      })
      setTitle("")
      setSubTitle("")
    }
  }

  return (
    <form className='mt-6 flex flex-col' onSubmit={handleSubmit}>
  
      <label className="block mb-1 text-sm font-medium text-purple-400">Task Name</label>
      <textarea rows="1" className="block p-2.5 w-full text-sm bg-purple-400 text-white placeholder:text-gray-50 rounded-lg" placeholder="Write task name there..." value={title} onChange={(e) => setTitle(e.target.value)}></textarea>
      
      <label className="block mb-1 mt-4 text-sm font-medium text-purple-400">Description</label>
      <textarea rows="4" className="block p-2.5 w-full text-sm rounded-lg bg-purple-400 text-white placeholder:text-gray-50" placeholder="Leave a description..." value={subTitle} onChange={(e) => setSubTitle(e.target.value)}></textarea>
      
      <button className='mt-4 text-base w-28 h-9 bg-yellow-400 text-gray-50 rounded border border-gray-50 hover:bg-gray-50 hover:text-gray-800 transition'>Send</button>
    </form>
  )
}

export default Addtask