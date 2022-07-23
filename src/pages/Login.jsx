import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import { db } from '../index'
import { collection, onSnapshot, query } from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import { Context } from '../index';

const Login = () => {
  const {auth} = useContext(Context)
  const [usersData, getUsers] = useState([]);
    useEffect(() => {
      const q = query(collection(db, "users"))
      const unsub = onSnapshot(q, (querySnapshot) => {
        let usersArray = []
        querySnapshot.forEach((doc) => {
          usersArray.push({...doc, id: doc.id})
        })
        getUsers(usersArray)
      })
    return () => unsub()
    },[]);

    
    const login = async() => {
      const provider = new firebase.auth.GoogleAuthProvider()
      const {user} = await auth.signInWithPopup(provider)
      
      if (usersData.find(u => u.id === user.uid) !== undefined){
        return ''
      } else{
        db.collection('users').doc(user.uid).set({
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          uid: user.uid,
          finishedTasks: 0
        })
      }
      
  }
  return (
    <>
    <div className="w-full flex justify-between items-center">
      <div className='w-1/2 pr-12'>
        <h1 className="text-6xl text-gray-300">Login</h1>
        <p className="text-base text-gray-400 mt-6">Join our big and friendly family. Your future is in your hands</p>
        <button className="text-center mt-4 text-base w-28 h-9 bg-gray-800 text-gray-50 rounded border border-gray-50 hover:bg-gray-50 hover:text-gray-800 transition" onClick={login}>Join</button>
      </div>
      <div className='w-1/2'>
        <img src="images/login.png" alt="img" className="w-30" />
      </div>
    </div>
    </>
  )
}

export default Login