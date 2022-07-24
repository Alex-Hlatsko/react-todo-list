import React from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

//Import All For Firebase
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from '../index'

const Home = () => {
  // Get User
  const {auth} = useContext(Context)
  const [user] = useAuthState(auth)

  return (
    <div className="w-full flex justify-between items-center">
      <div className='w-1/2 pr-12'>
        <h1 className="text-6xl text-gray-300"><span className='text-violet-400'>Free Ex</span>perience</h1>
        <p className="text-base text-gray-400 mt-6">Ask for help on various problems and give people tasks, help others by completing their tasks, gain invaluable experience with us and spend time usefully</p>
        <NavLink className="flex justify-center items-center mt-4 text-base w-28 h-9 bg-gray-800 text-gray-50 rounded border border-gray-50 hover:bg-gray-50 hover:text-gray-800 transition" to={user ? "/tasks" : "/login"}>{user ? "Start" : "Login"}</NavLink>
      </div>
      <div className='w-1/2'>
        <img src="images/home.png" alt="img" className="w-30 h-30" />
      </div>
    </div>
  )
}

export default Home
