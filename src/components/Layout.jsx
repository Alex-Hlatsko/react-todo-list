import React from 'react'
import { useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from '../index'

// Import Icons
import {AiFillHome, AiFillFolderOpen} from 'react-icons/ai'
import {BiUserPin} from 'react-icons/bi'
import {FaTasks} from 'react-icons/fa'
import {RiTaskFill, RiAccountBoxLine} from 'react-icons/ri'
import {ImExit} from 'react-icons/im'
import {GoDiffAdded} from 'react-icons/go'

const Layout = () => {
  const {auth} = useContext(Context)
  const [user] = useAuthState(auth)

  return (
    <>
      <nav className='fixed z-50 left-0 top-0 w-56 h-screen rounded-md flex flex-col items-center text-base bg-neutral-800 pt-6 drop-shadow-xl'>
        <NavLink className="text-gray-50 text-5xl mb-4 text-center hover:text-violet-600 transition" to= "/">Freex</NavLink>
        <div>
          <NavLink className="flex items-center mt-6 text-zinc-500 transition" to="/"><AiFillHome size={24}/>Home</NavLink>
          {user ?
            // If the user is logged in, display menu
            <>
            <NavLink className="flex items-center mt-6 text-zinc-500 transition" to="/profile"><BiUserPin size={24}></BiUserPin>Profile</NavLink>
            <NavLink className="flex items-center mt-6 text-zinc-500 transition" to="/activetasks"><RiTaskFill size={24}></RiTaskFill>Active Tasks</NavLink>
            <NavLink className="flex items-center mt-6 text-zinc-500 transition" to="/tasks"><FaTasks size={24}></FaTasks>Tasks</NavLink>
            <NavLink className="flex items-center mt-6 text-zinc-500 transition" to="/mytasks"><AiFillFolderOpen size={24}></AiFillFolderOpen>My Tasks</NavLink>
            <NavLink className="flex items-center mt-6 text-zinc-500 transition" to="/addtask"><GoDiffAdded size={24}></GoDiffAdded>Add task</NavLink>
            <NavLink className="flex items-center mt-6 text-zinc-500 transition" to="/signout"><ImExit size={24}></ImExit>Sign Out</NavLink>
            </>
            :
            // If user is not logged in, display menu
            <>
            <NavLink className="flex items-center mt-6 text-zinc-500 transition" to="/login"><RiAccountBoxLine size={24}></RiAccountBoxLine>Login</NavLink>
            </>
          }
        </div>
      </nav> 
      <div className="navigation fixed z-20 ml-6 left-0 top-0 h-16 w-full flex justify-end items-center px-10">
        {user ?
          // if user is not logged in, display name and photo
          <>
          <NavLink to="profile"><h1 className="text-base text-gray-50 mr-3">{user.displayName}</h1></NavLink>
          <NavLink to="profile"><img className='w-11 h-11 rounded-full' src={user.photoURL}  alt="img" /></NavLink>
          </> : 
          ''
        }
      </div>
      <div className="content flex flex-col mt-16">
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default Layout
