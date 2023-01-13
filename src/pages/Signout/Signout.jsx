import React from 'react'
import { useContext } from 'react'
import { Context } from '../../index'
import './styles.css'

const Signout = () => {
  const {auth} = useContext(Context)

  return (
    <div className="w-full flex flex-col items-center mt-5">
      <h1 className="text-3xl text-black">Sign Out</h1>
        <button className="text-center mt-10 text-base w-28 h-9 bg-purple-400 text-gray-50 rounded border border-gray-50 hover:bg-gray-50 hover:text-gray-800 transition" onClick={()=>auth.signOut()}>Log Out</button>
    </div>
  )
}

export default Signout