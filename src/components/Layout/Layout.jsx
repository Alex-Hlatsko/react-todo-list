import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './styles.css'

import Navigation from '../Navigation/Navigation'
import Header from '../Header/Header'

const Layout = ({user}) => {

  const [menuState, setMenuState] = useState(false);

  return (
    <>
      <Navigation className="nav" user={user} setMenuState={setMenuState} menuState={menuState}/> 
      <Header user={user} setMenuState={setMenuState} menuState={menuState}/>
      <div className="content flex flex-col">
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default Layout
