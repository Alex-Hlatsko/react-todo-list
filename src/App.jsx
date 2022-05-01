import { Routes, Route } from 'react-router-dom';

import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Activetasks } from "./pages/Activetasks";
import { Tasks } from "./pages/Tasks";
import { Notfound } from "./pages/Notfound";
import { Layout } from './components/Layout';

function App() {
  return (
  <>
    <Routes>
      <Route path='/' element={<Layout></Layout>}>
        <Route index element={<Home></Home>}></Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>
        <Route path='/activetasks' element={<Activetasks></Activetasks>}></Route>
        <Route path='/tasks' element={<Tasks></Tasks>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Route>
    </Routes>   
  </> 
  )};

export default App;
