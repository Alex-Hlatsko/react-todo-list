import Activetasks from "./pages/Activetasks";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signout from "./pages/Signout";
import Tasks from "./pages/Tasks";
import { ACTIVETASKS_ROUTE, SIGNOUT_ROUTE, HOME_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, TASKS_ROUTE } from "./utils/consts";

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
        path: SIGNOUT_ROUTE,
        Component: <Signout></Signout>
    }
]