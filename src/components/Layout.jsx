import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useContext } from 'react';
import { Context } from '../index';

import {AiFillHome, AiFillProfile} from 'react-icons/ai'
import {FaTasks} from 'react-icons/fa'
import {RiTaskFill, RiAccountBoxLine} from 'react-icons/ri'
import {ImExit} from 'react-icons/im'

const Layout = () => {
  const {auth} = useContext(Context)
  const [user] = useAuthState(auth);
  return (
    <>
    <nav>
      <NavLink className="logo" to= "/">Freex</NavLink>
      <NavLink className="nav__link" to="/"><AiFillHome size={24}/>Home</NavLink>
      {user ?
        <>
        <NavLink className="nav__link" to="/profile"><AiFillProfile></AiFillProfile>Profile</NavLink>
        <NavLink className="nav__link" to="/tasks"><FaTasks></FaTasks>Tasks</NavLink>
        <NavLink className="nav__link" to="/activetasks"><RiTaskFill></RiTaskFill>Active Tasks</NavLink>
        <NavLink className="nav__link" to="/signout"><ImExit></ImExit>Sign Out</NavLink>
        </>
        :
        <>
        <NavLink className="nav__link" to="/login"><RiAccountBoxLine></RiAccountBoxLine>Login</NavLink>
        </>
      }
    </nav> 
    <div className="content">
      <Outlet></Outlet>
    </div>
    </>
  )
}

export default Layout
