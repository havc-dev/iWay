import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DriverContext } from '../context/driverContext';
import { RoutesContext } from '../context/routesContext';

import routesObject from '../routes.json';
import './login.css';

const Logout = () => {

  let navigate = useNavigate();
  const ctxDriver = useContext(DriverContext);
  const ctxRoutes = useContext(RoutesContext);

  const logoutHandler = async () => {
    ctxDriver.setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', false);
    localStorage.removeItem('savedRoute');
    ctxRoutes.setRoutes({});
    navigate(`/`);
  };
  return (
    <main>
      <h1>Logout</h1>
      Seguro que desea cerrar sesión?
      <ul>
        <li>La ruta actual se perderá para siempre</li>
      </ul>
      <button className={`btn-main`} onClick={logoutHandler}>
        Logout
      </button>
    </main>
  );
};

export default Logout;
