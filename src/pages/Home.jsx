import { useContext, useEffect, useState } from 'react';
import VisitorHome from '../components/pages/VisitorHome';
import { DriverContext } from '../context/driverContext';
import MyRoutes from '../pages/MyRoutes';

const Home = () => {
  const ctxDriver = useContext(DriverContext);
  useEffect(() => {
    let loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn) {
      JSON.parse(loggedIn) && ctxDriver.setIsLoggedIn(true);
    }
  }, []);

  return <>{ctxDriver.isLoggedIn ? <MyRoutes /> : <VisitorHome />}</>;
};

export default Home;
