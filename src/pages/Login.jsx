import React, { useContext } from 'react'
import { Context } from '../index'
import firebase from 'firebase/compat/app';
import { db } from '../index'

const Login = () => {
  const {auth} = useContext(Context)
  const login = async() => {
    const provider = new firebase.auth.GoogleAuthProvider()
    const {user} = await auth.signInWithPopup(provider)
    console.log(user)
    db.collection('users').doc(user.uid).set({
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      uid: user.uid,
      finishedTasks: 0
    })   
  console.log(user) 
  }
  return (
    <>
    <div>Login</div>
    <button className="btn__sign" onClick={login}>Join</button>
    </>
  )
}

export default Login