
import { Routes, Route } from 'react-router-dom';
import DriverProvider from './context/ContextDriver';
import RoutesProvider from './context/ContextRoutes';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Logout from './pages/Logout';
import MyRoutes from './pages/MyRoutes';

import CurrentRoute from './components/routes/CurrentRoute'
import PendingRoute from './components/routes/PendingRoute'
import SuccessfulRoute from './components/routes/SuccessfulRoute'
import FailedRoute from './components/routes/FailedRoute'
import Register from './pages/Register';
import PasswordReset from './pages/PasswordReset';

function App() {

  return (
    <DriverProvider>
      <RoutesProvider>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='login' element={<Login />} />
            <Route path='logout' element={<Logout />} />
            <Route path='register' element={<Register />} />
            <Route path='password-reset' element={<PasswordReset />} />
            <Route path='routes' element={<MyRoutes />}>
              <Route path='current' element={<CurrentRoute />} />
              <Route path='pending' element={<PendingRoute />} />
              <Route path='successful' element={<SuccessfulRoute />} />
              <Route path='failed' element={<FailedRoute />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </RoutesProvider>
    </DriverProvider>
  );
}

export default App;
