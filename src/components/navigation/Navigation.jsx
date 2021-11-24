import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {DriverContext} from '../../context/driverContext'

import './navigation.css'


const Navigation = () => {
  const ctxDriver = useContext(DriverContext);
  const driverLoggedIn = ctxDriver.isLoggedIn;

  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
      
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      }, (failure) => {
        setStatus('Unable to retrieve your location');
        alert(failure.message);
      });
    }
    
  }

  return (
    <nav>
      {driverLoggedIn ? 
        <>
          <Link className="nav-link" to="/welcome">Welcome</Link>
          <Link className="nav-link" to="/onhold">On Hold</Link>
          <Link className="nav-link" to="/successful">Successful</Link>
          <Link className="nav-link" to="/logout">Logout</Link>
        </>
        :
        <>
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
          <Link className="nav-link" to="/login">Login</Link>
          <p>{lat}</p>
          <p>{lng}</p>
        </>}
      <button onClick={getLocation}>Location</button>
     
    </nav>
  );
};

export default Navigation;
