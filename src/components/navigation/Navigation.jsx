import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ContextDriver }  from '../../context/ContextDriver';


const Navigation = () => {
  const DriverCtx = useContext(ContextDriver)
  const { isLoggedIn } = DriverCtx;
  // console.log(DriverCtx)

  return (
    <nav>
      {isLoggedIn ? 
        <>
          <NavLink className={({ isActive }) => isActive ? "active-navLink" : "navLink"} to="/">Route</NavLink>
          <NavLink className={({ isActive }) => isActive ? "active-navLink" : "navLink"} to="/pending">Map</NavLink>
          <NavLink className={({ isActive }) => isActive ? "active-navLink" : "navLink"} to="/successful">Profile</NavLink>
          <NavLink className={({ isActive }) => isActive ? "active-navLink" : "navLink"} to="/logout">Logout</NavLink>
        </>
        :
        <>
          <NavLink className={({ isActive }) => isActive ? "active-navLink" : "navLink"} to="/">Home</NavLink>
          <NavLink className={({ isActive }) => isActive ? "active-navLink" : "navLink"} to="/about">About</NavLink>
          <NavLink className={({ isActive }) => isActive ? "active-navLink" : "navLink"} to="/contact">Contact</NavLink>
          <NavLink className={({ isActive }) => isActive ? "active-navLink" : "navLink"} to="/login">Login</NavLink>
        </>}
     
    </nav>
  );
};

export default Navigation;
