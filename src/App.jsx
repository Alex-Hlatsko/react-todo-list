import { Routes, Route, Navigate} from 'react-router-dom'

//Import All For Firebase
import { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from '.'

import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Welcome from './pages/Welcome/Welcome'
import Activetasks from './pages/Activetasks/Activetasks'
import Tasks from './pages/Tasks/Tasks'
import MyTasks from './pages/MyTasks/MyTasks'
import AddTask from './pages/Addtask/AddTask'
import Signout from './pages/Signout/Signout'

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
          <Route path="/activetasks" element={<Activetasks user={user}/>} />
          <Route path="/tasks" element={<Tasks user={user}/>} />
          <Route path="/mytasks" element={<MyTasks user={user}/>} />
          <Route path="/addtask" element={<AddTask user={user}/>} />
          <Route path="/signout" element={<Signout user={user}/>} />
          <Route path="*" element={<Navigate to="/home"/>}/>
        </Route>
      </Routes>
    )

    // If user is not logged in, display Public Routes
    :
    (
      <Routes>
        <Route path="/welcome" element={<Welcome/>} />
        <Route path="*" element={<Navigate to="/welcome"/>}/>
      </Routes>
    )}
export default App;
