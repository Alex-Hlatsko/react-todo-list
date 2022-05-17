import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <nav>
      <NavLink to= "/" className="logo">Freex</NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/tasks">Tasks</NavLink>
      <NavLink to="/activetasks">Active Tasks</NavLink>
      <NavLink to="/login">Login</NavLink>
    </nav> 
    <div className="content">
      <Outlet></Outlet>
    </div>
    </>
  )
}

export default Layout
