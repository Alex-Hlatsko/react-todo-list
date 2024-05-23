import React from 'react'

// Improt All For Firebase
import { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../index'
import './styles.css'

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
  
      <label className=" mb-2">Challenge Name</label>
      <textarea rows="1" maxlength="25" className="" placeholder="Write task name there..." value={title} onChange={(e) => setTitle(e.target.value)}></textarea>
      
      <label className="mt-10 mb-2">Description</label>
      <textarea rows="4" maxlength="100" className="" placeholder="Leave a description..." value={subTitle} onChange={(e) => setSubTitle(e.target.value)}></textarea>
      
      <button className='custom_button mt-10'>Send</button>
    </form>
  )
}

export default Addtask