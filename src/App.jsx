import { Routes, Route, Navigate} from 'react-router-dom'

//Import All For Firebase
import { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from '.'

import Layout from './components/Layout/Layout'
import Welcome from './pages/Welcome/Welcome'
import Home from './pages/Home/Home'

function App() {
  // Get User
  const {auth} = useContext(Context)
  const [user] = useAuthState(auth)

  // If the user is logged in, display Private Routes (for users)
  return user ? 
    (
      <Routes>
        <Route path='/' element={<Layout user={user}/>}>
          <Route path="/home" element={<Home user={user}/>} />
          <Route path="*" element={<Navigate to="/home"/>}/>
        </Route>
      </Routes>
    )

    // If user is not logged in, display Public Routes
    :
    (
      <Routes>
        <Route path='/' element={<Layout user={user}/>}>
          <Route path="/welcome" element={<Welcome/>} />
          <Route path="*" element={<Navigate to="/welcome"/>}/>
        </Route>
      </Routes>
    )}
export default App;
