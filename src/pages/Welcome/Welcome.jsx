import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import './styles.css'

//Import All For Firebase
import firebase from 'firebase/compat/app'
import { collection, onSnapshot, query } from 'firebase/firestore'
import { Context, db } from '../../index'

const Welcome = () => {
  const {auth} = useContext(Context)

  // Get Users From Database and check if the user is in the database
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

    // If the user doesn't exist, then we enter it into the database
    // If there is a user, then skip
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
    <div className="welcome w-full h-screen flex items-center">
      <div className='welcome_content flex flex-col items-center'>
        <div className="w-9/12">
          <h1 className="text-6xl text-purple-400">Freex</h1>
          <p className="text-base text-gray-400 mt-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur id similique animi aliquam! Voluptatibus!</p>
          <button className="text-center mt-4 text-base w-28 h-9 bg-gray-800 text-gray-50 rounded border border-gray-50 hover:bg-gray-50 hover:text-gray-800 transition" onClick={login}>Join</button>
        </div>
      </div>
      <div className='welcome_img'>
        <img src="images/welcome.jpg" alt="img" className="w-30" />
      </div>
    </div>
    </>
  )
}

export default Welcome