import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.css'

// Import Icons
import {AiFillHome, AiFillFolderOpen} from 'react-icons/ai'
import {FaTasks} from 'react-icons/fa'
import {RiTaskFill} from 'react-icons/ri'
import {ImExit} from 'react-icons/im'
import {GoDiffAdded} from 'react-icons/go'

const Navigation = ({menuState, setMenuState}) => {
  return (
    <nav className={menuState ? 'active fixed z-50 left-0 top-0 h-screen flex flex-col items-center justify-center text-base bg-neutral-800 drop-shadow-xl' : "nav pt-20 fixed z-50 left-0 top-0 h-screen flex flex-col items-center text-base bg-neutral-800 drop-shadow-xl"}>
        <NavLink onClick={()=>setMenuState((menuState)=>menuState=false)} className={menuState ? "hidden" : "text-gray-50 text-5xl mb-4 text-center hover:text-violet-600 transition"} to= "/">Freex</NavLink>
        <div>
          <NavLink onClick={()=>setMenuState((menuState)=>menuState=false)} className="flex items-center mt-6 text-zinc-500 transition" to="/home"><AiFillHome size={24} className='mr-2'/>Home</NavLink>
          <NavLink onClick={()=>setMenuState((menuState)=>menuState=false)} className="flex items-center mt-6 text-zinc-500 transition" to="/activetasks"><RiTaskFill size={24} className='mr-2'></RiTaskFill>Active Tasks</NavLink>
          <NavLink onClick={()=>setMenuState((menuState)=>menuState=false)} className="flex items-center mt-6 text-zinc-500 transition" to="/tasks"><FaTasks size={24} className='mr-2'></FaTasks>Tasks</NavLink>
          <NavLink onClick={()=>setMenuState((menuState)=>menuState=false)} className="flex items-center mt-6 text-zinc-500 transition" to="/mytasks"><AiFillFolderOpen size={24} className='mr-2'></AiFillFolderOpen>My Tasks</NavLink>
          <NavLink onClick={()=>setMenuState((menuState)=>menuState=false)} className="flex items-center mt-6 text-zinc-500 transition" to="/addtask"><GoDiffAdded size={24} className='mr-2'></GoDiffAdded>Add task</NavLink>
          <NavLink onClick={()=>setMenuState((menuState)=>menuState=false)} className="flex items-center mt-6 text-zinc-500 transition" to="/signout"><ImExit size={24} className='mr-2'></ImExit>Sign Out</NavLink>
        </div>
      </nav>
  )
}

export default Navigation