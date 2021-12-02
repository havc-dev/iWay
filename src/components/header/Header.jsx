import { NavLink } from 'react-router-dom';
import Navigation from '../navigation/Navigation';

const Header = () => {
  return (
    <header className=''>
      <NavLink to='/'>
        <h1 className='font-mono'>
          i<span className='text-gray-100'>Way</span>
        </h1>
        <p className='text-center font-mono -mt-5 mb-5'>Última milla, <span className='text-gray-100'><strong>fácil.</strong></span></p>
      </NavLink>
      <Navigation />
    </header>
  );
};

export default Header;
