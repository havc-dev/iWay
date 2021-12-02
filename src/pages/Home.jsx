import { useContext, useEffect, useState } from 'react';
import VisitorHome from '../components/pages/VisitorHome';
import { ContextDriver } from '../context/ContextDriver';
import MyRoutes from '../pages/MyRoutes';

const Home = () => {
  const DriverCtx = useContext(ContextDriver);
  useEffect(() => {
    let loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn) {
      JSON.parse(loggedIn) && ctxDriver.setIsLoggedIn(true);
    }
  }, []);

  return <>{DriverCtx.isLoggedIn ? <MyRoutes /> : <VisitorHome />}</>;
};

export default Home;
