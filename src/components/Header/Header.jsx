import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.css'

const Header = ({user, setMenuState, menuState}) => {
  return (
    <div className="header fixed z-20 left-0 top-0 w-full flex items-center px-10">
        <div className="header_user flex items-center">
          <NavLink to="profile"><img className='w-10 h-10 rounded-full header_img' src={user?.photoURL}  alt="img" /></NavLink>
          <NavLink to="profile"><h1 className="header_name text-xl mr-3">{user?.displayName}</h1></NavLink>
        </div>
    </div>
  )
}

export default Header