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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== ""){
      await addDoc(collection(db, "tasks"), {
        title: title,
        taskId: user.uid,
        email: user.email,
        author: user.displayName,
        isStarted: false,
        startedBy: ''
      })
      setTitle("")
    }
  }

  return (
    <>
    <form className='add__task__form' onSubmit={handleSubmit}>
      <input 
      type="text" 
      placeholder='write there' 
      value={title} 
      onChange={(e) => setTitle(e.target.value)}/>
      <button>Send</button>
    </form>
    </>
  )
}

export default Addtask