import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useContext } from 'react';
import { Context } from '../index';

import {AiFillHome, AiFillFolderOpen} from 'react-icons/ai'
import {BiUserPin} from 'react-icons/bi'
import {FaTasks} from 'react-icons/fa'
import {RiTaskFill, RiAccountBoxLine} from 'react-icons/ri'
import {ImExit} from 'react-icons/im'
import {GoDiffAdded} from 'react-icons/go'

const Layout = () => {
  const {auth} = useContext(Context)
  const [user] = useAuthState(auth);
  return (
    <>
    <nav>
      <NavLink className="logo" to= "/">Freex</NavLink>
      <div className="nav__items">
        <NavLink className="nav__link" to="/"><AiFillHome size={24}/>Home</NavLink>
        {user ?
          <>
          <NavLink className="nav__link" to="/profile"><BiUserPin size={24}></BiUserPin>Profile</NavLink>
          <NavLink className="nav__link" to="/tasks"><FaTasks size={24}></FaTasks>Tasks</NavLink>
          <NavLink className="nav__link" to="/activetasks"><RiTaskFill size={24}></RiTaskFill>Active Tasks</NavLink>
          <NavLink className="nav__link" to="/mytasks"><AiFillFolderOpen size={24}></AiFillFolderOpen>My Tasks</NavLink>
          <NavLink className="nav__link" to="/addtask"><GoDiffAdded size={24}></GoDiffAdded>Add task</NavLink>
          <NavLink className="nav__link" to="/signout"><ImExit size={24}></ImExit>Sign Out</NavLink>
          </>
          :
          <>
          <NavLink className="nav__link" to="/login"><RiAccountBoxLine size={24}></RiAccountBoxLine>Login</NavLink>
          </>
        }
      </div>
    </nav> 
    <div className="content">
      <Outlet></Outlet>
    </div>
    </>
  )
}

export default Layout
