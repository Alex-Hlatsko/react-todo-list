import { Routes, Route, Navigate} from 'react-router-dom'

//Import All For Firebase
import { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from '.'

// Import All For Links
import { privateRoutes, publicRoutes } from './routes'
import {HOME_ROUTE, PROFILE_ROUTE} from './utils/consts'

import Layout from './components/Layout'

function App() {
  // Get User
  const {auth} = useContext(Context)
  const [user] = useAuthState(auth)

  // If the user is logged in, display Private Routes (for users)
  return user ? 
    (
      <Routes>
        <Route path='/' element={<Layout/>}>
          {privateRoutes.map(({path, Component})=>
          <Route path={path} element={Component}></Route>
          )}
          <Route path="*" element={<Navigate to={PROFILE_ROUTE}/>}/>
        </Route>
      </Routes>
    )
    // If user is not logged in, display Public Routes
    :
    (
      <Routes>
        <Route path='/' element={<Layout />}>
          {publicRoutes.map(({path, Component})=>
            <Route path={path} element={Component}></Route>
          )}
          <Route path="*" element={<Navigate to={HOME_ROUTE}/>}/>
        </Route>
      </Routes>
    )}
export default App;
