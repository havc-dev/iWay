import { createContext, useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { db } from "../firebase/firebaseConfig";

export const getRoutes = async () => {
  const docRef = await getDocs(collection(db, "routes"));
  return docRef;
};

export const ContextRoutes = createContext({});

function RoutesProvider({ children }) {

  const [CurrentRoute, setCurrentRoute] = useState([])
  const [PendingRoute, setPendingRoute] = useState([])
  const [SucessfulRoute, setSucessfulRoute] = useState([])
  const [FailedRoute, setFailedRoute] = useState([])

  const valueRoutes = {
    CurrentRoute,
    setCurrentRoute,
    PendingRoute,
    setPendingRoute,
    SucessfulRoute,
    setSucessfulRoute,
    FailedRoute,
    setFailedRoute,
  };
  
  return <ContextRoutes.Provider value={valueRoutes}>{children}</ContextRoutes.Provider>;
}

export default RoutesProvider