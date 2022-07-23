import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Tasks from "./pages/Tasks"
import Activetasks from "./pages/Activetasks"
import MyTasks from "./pages/MyTasks"
import Addtask from "./pages/Addtask"
import Signout from "./pages/Signout"
import Login from "./pages/Login"
import { ACTIVETASKS_ROUTE, SIGNOUT_ROUTE, HOME_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, TASKS_ROUTE, MYTASKS_ROUTE, ADD_TASK } from "./utils/consts"

//all users can move to this routes
export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: <Login></Login>
    },
    {
        path: HOME_ROUTE,
        Component: <Home></Home>
    }
]
//only registered users can move to this routes
export const privateRoutes = [
    {
        path: HOME_ROUTE,
        Component: <Home></Home>
    },
    {
        path: PROFILE_ROUTE,
        Component: <Profile></Profile>
    },
    {
        path: TASKS_ROUTE,
        Component: <Tasks></Tasks>
    },
    {
        path: ACTIVETASKS_ROUTE,
        Component: <Activetasks></Activetasks>
    },
    {
        path: MYTASKS_ROUTE,
        Component: <MyTasks></MyTasks>
    },
    {
        path: ADD_TASK,
        Component: <Addtask></Addtask>
    },
    {
        path: SIGNOUT_ROUTE,
        Component: <Signout></Signout>
    }
]