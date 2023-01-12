import React from 'react'
import { useContext } from 'react'
import { Context } from '../../index'

const Signout = () => {
  const {auth} = useContext(Context)
  return (
    <div className="w-full flex justify-between items-center">
      <div className='w-1/2 pr-12'>
        <h1 className="text-6xl text-gray-300">Sign Out</h1>
        <button className="text-center mt-10 text-base w-28 h-9 bg-gray-800 text-gray-50 rounded border border-gray-50 hover:bg-gray-50 hover:text-gray-800 transition" onClick={()=>auth.signOut()}>Log Out</button>
      </div>
      <div className='w-1/2'>
        <img src="images/signout.png" alt="img" className="w-30" />
      </div>
    </div>
  )
}

export default Signout