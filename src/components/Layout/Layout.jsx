import React from 'react'
import { Outlet } from 'react-router-dom'
import './styles.css'

import Navigation from '../Navigation/Navigation'
import Header from '../Header/Header'

const Layout = ({user}) => {

  return (
    <>
      <Navigation className="nav" user={user}/> 
      <Header user={user}/>
      <div className="content flex flex-col mt-16">
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default Layout
