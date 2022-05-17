import { Routes, Route, Navigate} from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
import {HOME_ROUTE, PROFILE_ROUTE} from './utils/consts';

function App() {
  const user = true;
  return user ? 
    (
      <Routes>
        {privateRoutes.map(({path, Component})=>
          <Route path={path} element={Component}></Route>
        )}
        <Route path="*" element={<Navigate to={PROFILE_ROUTE}/>}/>
      </Routes>
    )
    :
    (
      <Routes>
        {publicRoutes.map(({path, Component})=>
          <Route path={path} element={Component}></Route>
        )}
        <Route path="*" element={<Navigate to={HOME_ROUTE}/>}/>
      </Routes>
    )}
export default App;
