import { NavLink, Outlet } from 'react-router-dom'


export const Layout = () => {
  return (
    <>
    <nav>
      <NavLink to= "/" className="logo">Freex</NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/tasks">Tasks</NavLink>
      <NavLink to="/activetasks">Active Tasks</NavLink>
    </nav> 
    <div className="content">
      <Outlet></Outlet>
    </div>
    </>
  )
}
