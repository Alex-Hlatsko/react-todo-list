import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.css'

// Import Icons
import {AiFillHome, AiFillFolderOpen} from 'react-icons/ai'
import {FaTasks} from 'react-icons/fa'
import {RiTaskFill, RiAccountBoxLine} from 'react-icons/ri'
import {ImExit} from 'react-icons/im'
import {GoDiffAdded} from 'react-icons/go'

const Navigation = ({user}) => {
  return (
    <nav className='fixed z-50 left-0 top-0 w-56 h-screen rounded-md flex flex-col items-center text-base bg-neutral-800 pt-6 drop-shadow-xl'>
        <NavLink className="text-gray-50 text-5xl mb-4 text-center hover:text-violet-600 transition" to= "/">Freex</NavLink>
        <div>
          <NavLink className="flex items-center mt-6 text-zinc-500 transition" to="/home"><AiFillHome size={24}/>Home</NavLink>
          {user ?
            // If the user is logged, display menu
            <>
                <NavLink className="flex items-center mt-6 text-zinc-500 transition" to="/activetasks"><RiTaskFill size={24}></RiTaskFill>Active Tasks</NavLink>
                <NavLink className="flex items-center mt-6 text-zinc-500 transition" to="/tasks"><FaTasks size={24}></FaTasks>Tasks</NavLink>
                <NavLink className="flex items-center mt-6 text-zinc-500 transition" to="/mytasks"><AiFillFolderOpen size={24}></AiFillFolderOpen>My Tasks</NavLink>
                <NavLink className="flex items-center mt-6 text-zinc-500 transition" to="/addtask"><GoDiffAdded size={24}></GoDiffAdded>Add task</NavLink>
                <NavLink className="flex items-center mt-6 text-zinc-500 transition" to="/signout"><ImExit size={24}></ImExit>Sign Out</NavLink>
            </>
            :
            // If user is not logged, display menu
            <>
                <NavLink className="flex items-center mt-6 text-zinc-500 transition" to="/login"><RiAccountBoxLine size={24}></RiAccountBoxLine>Login</NavLink>
            </>
          }
        </div>
      </nav>
  )
}

export default Navigation