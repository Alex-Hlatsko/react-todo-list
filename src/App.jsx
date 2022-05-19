import { Routes, Route, Navigate} from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
import {HOME_ROUTE, PROFILE_ROUTE} from './utils/consts';
import Layout from './components/Layout';

function App() {
  const user = true;
  return user ? 
    (
      <Routes>
        <Route path='/' element={<Layout />}>
          {privateRoutes.map(({path, Component})=>
          <Route path={path} element={Component}></Route>
          )}
          <Route path="*" element={<Navigate to={PROFILE_ROUTE}/>}/>
        </Route>
      </Routes>
    )
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
