import { NavLink, Outlet } from 'react-router-dom';


export const Layout = () => {
  return (
    <>
    <div className="structure">
      <nav>
        <h1 className="logo">Freex</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/tasks">Tasks</NavLink>
        <NavLink to="/activetasks">Active Tasks</NavLink>
      </nav> 
      <div className="content">
        <Outlet></Outlet>
      </div>
    </div>
    </>
  )
}
