import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useContext } from 'react';
import { Context } from '../index';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../index';

const Addtask = () => {
  const {auth} = useContext(Context)
  const [user] = useAuthState(auth);

  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");

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
    <>
    <form className='add__task__form' onSubmit={handleSubmit}>

      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Task Name</label>
      <textarea rows="1" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write task name there..." value={title} onChange={(e) => setTitle(e.target.value)}></textarea>
      
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Description</label>
      <textarea rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a description..." value={subTitle} onChange={(e) => setSubTitle(e.target.value)}></textarea>
      
      <button>Send</button>
    </form>

    
    </>
  )
}

export default Addtask