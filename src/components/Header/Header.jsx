import React from 'react'
import { NavLink } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'
import './styles.css'

const Header = ({user}) => {
  return (
    <div className="nav fixed z-20 left-0 top-0 w-full flex justify-end items-center px-10">
        <NavLink to="profile"><h1 className="text-base text-gray-50 mr-3">{user?.displayName}</h1></NavLink>
        <NavLink to="profile"><img className='w-11 h-11 rounded-full' src={user?.photoURL}  alt="img" /></NavLink>
        <BiMenu className="burger" size={32}/>
    </div>
  )
}

export default Header