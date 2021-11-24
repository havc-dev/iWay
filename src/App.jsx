import { useEffect, useState } from 'react';
import Navigation from './components/navigation/Navigation';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Logout from './pages/Logout'
import MyRoutes from './pages/MyRoutes'
import OnHold from './components/lists/OnHold'

import { DriverContext } from './context/driverContext';
import { RoutesContext } from './context/routesContext';
import { Routes, Route } from 'react-router-dom';

import  starterRoutes  from './routes.json';
import './App.css';

function App() {
  //routes context
  const [routes, setRoutes] = useState();
  const valueRoutes = { routes, setRoutes,};
  //driver context
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [driverName, setDriverName] = useState('Adrián Curiel');

  const valueDriver = {
    isLoggedIn,
    setIsLoggedIn,
    driverName,
    setDriverName,
  };

  useEffect(() => {
    let retrievedObject = localStorage.getItem('savedRoute');
    if (retrievedObject === null || retrievedObject === undefined) {
      console.log(retrievedObject)
      setRoutes(starterRoutes);
      console.log(routes)
      localStorage.setItem('savedRoute', JSON.stringify(routes));
    } else {
      let parsedObject = JSON.parse(retrievedObject);
      setRoutes(parsedObject);
      console.log(parsedObject)
    }
  }, []);

  return (
    <>
      <header className='appTitle'>
        <h1>
          i<span>Way</span>
        </h1>
      </header>
      <DriverContext.Provider value={valueDriver}>
        <RoutesContext.Provider value={valueRoutes}>
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='login' element={<Login />} />
            <Route path='logout' element={<Logout />} />
            <Route path='myroutes/*' element={<MyRoutes />} />
            <Route path='waiting' element={<OnHold />} />
            
            {/* <AddPackage />
            <CurrentPackage item={currentPackage} />
            <CurrentRoute route={currentRoute} /> */}
          </Routes>
        </RoutesContext.Provider>
      </DriverContext.Provider>
    </>
  );
}

export default App;
