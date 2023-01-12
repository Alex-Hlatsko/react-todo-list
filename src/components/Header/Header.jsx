import React from 'react'
import { NavLink } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'
import { MdOutlineClose } from 'react-icons/md'
import './styles.css'

const Header = ({user, setMenuState, menuState}) => {
  return (
    <div className="header fixed z-20 left-0 top-0 w-full flex items-center px-10">
        <div className="header_user flex items-center">
          <NavLink to="profile"><h1 className="header_name text-base text-gray-50 mr-3">{user?.displayName}</h1></NavLink>
          <NavLink to="profile"><img className='w-11 h-11 rounded-full' src={user?.photoURL}  alt="img" /></NavLink>
        </div>
        {menuState ? 
        <MdOutlineClose className="menu_icon" size={32} onClick={()=>setMenuState((menuState)=>menuState=!menuState)}/>
        :
        <BiMenu className="menu_icon" size={32} onClick={()=>setMenuState((menuState)=>menuState=!menuState)}/>
        }
    </div>
  )
}

export default Header