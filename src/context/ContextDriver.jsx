import { createContext, useState } from 'react';
import { useAuth, signIn, logOut, signUp } from '../firebase/firebaseConfig';


export const ContextDriver = createContext({});

function DriverProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const currentUser = useAuth();

  const valueDriver = {
    signIn,
    logOut,
    signUp,
    isLoggedIn,
    setIsLoggedIn,
    currentUser
  };

  return (
    <ContextDriver.Provider value={valueDriver}>
      {children}
    </ContextDriver.Provider>
  );
}

export default DriverProvider;
