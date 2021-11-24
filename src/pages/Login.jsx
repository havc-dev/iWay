import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DriverContext } from '../context/driverContext';
import { RoutesContext } from '../context/routesContext';

import routesObject from '../routes.json';
import './login.css';

const Login = () => {
  let navigate = useNavigate();
  const ctxDriver = useContext(DriverContext);
  const ctxRoutes = useContext(RoutesContext);
  const loginHandler = async () => {
    ctxDriver.setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', true);
    localStorage.setItem('savedRoute', JSON.stringify(routesObject));
    let retrievedObject = localStorage.getItem('savedRoute');
    let parsedRetrievedObject = JSON.parse(retrievedObject);
    ctxRoutes.setRoutes(parsedRetrievedObject);
    navigate(`/`);
  };


  return (
    <main>
      <h1>Login</h1>
      El login funcionará únicamente para usuarios Premium. El servicio Premium
      no está disponible por el momento.
      <ul>
        <li>El servicio Premium permitirá no tendrá publicidad</li>
        <li>
          El servicio Premium permitirá generar referencias extra para los
          domicilios ("mis referencias")
        </li>
      </ul>
      <button className={`btn-main`} onClick={loginHandler}>
        Login
      </button>
    </main>
  );
};

export default Login;
