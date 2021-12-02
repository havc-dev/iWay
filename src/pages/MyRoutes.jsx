import { useContext, useEffect, useState } from "react";
import AddPackage from "../components/inputs/AddPackage";
import { ContextRoutes } from "../context/ContextRoutes";

import CurrentRoute from "../components/routes/CurrentRoute";
import PendingRoute from "../components/routes/PendingRoute";
import SuccessfulRoute from "../components/routes/SuccessfulRoute";
import FailedRoute from "../components/routes/FailedRoute";
import PlusIcon from "../assets/icons/PlusIcon";


const MyRoutes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAddingPackages, setIsAddingPackages] = useState(false);
  const [CurrentTab, setCurrentTab] = useState(true);
  const [PendingTab, setPendingTab] = useState(false);
  const [SuccesfulTab, setSuccesfulTab] = useState(false);
  const [FailedTab, setFailedTab] = useState(false);


  useEffect(() => {
    setIsLoading(false);
  }, []);

  const addPackageToggle = () => {
    setIsAddingPackages(prevIsAddingPackages => !isAddingPackages);
  };

  const tabSelectCurrent = () => {
    setCurrentTab(true);
    setPendingTab(false);
    setSuccesfulTab(false);
    setFailedTab(false);
  };
  const tabSelectPending = () => {
    setCurrentTab(false);
    setPendingTab(true);
    setSuccesfulTab(false);
    setFailedTab(false);
  };
  const tabSelectSuccessful = () => {
    setCurrentTab(false);
    setPendingTab(false);
    setSuccesfulTab(true);
    setFailedTab(false);
  };
  const tabSelectFailed = () => {
    setCurrentTab(false);
    setPendingTab(false);
    setSuccesfulTab(false);
    setFailedTab(true);
  };

  return (
    <main>
      <h1>Mis rutas:</h1>
      <nav>
        <button className={`btn-tab${CurrentTab? '-active' : ''}`} onClick={tabSelectCurrent}> Actual</button>
        <button className={`btn-tab${PendingTab? '-active': ''}`} onClick={tabSelectPending}> Pendientes</button>
        <button className={`btn-tab${SuccesfulTab? '-active': ''}`} onClick={tabSelectSuccessful}> Exitosas</button>
        <button className={`btn-tab${FailedTab? '-active': ''}`} onClick={tabSelectFailed}> Fallidas</button>
      </nav>
      
      <section>
        {isLoading && < div > Loading... </div> }
        {!isLoading && CurrentTab &&
        
        <button 
          onClick={addPackageToggle}
          className="ctaBtn"
        >
          <PlusIcon />
          Agregar Paquete
        </button>}
        
        {isAddingPackages && <AddPackage isAddingPackages={isAddingPackages} setIsAddingPackages={setIsAddingPackages}/>}
        
        {!isLoading && CurrentTab && <CurrentRoute />}
        {!isLoading && PendingTab && <PendingRoute />}
        {!isLoading && SuccesfulTab && <SuccessfulRoute />}
        {!isLoading && FailedTab && <FailedRoute />}
      </section>
    </main>
  );
};

export default MyRoutes;
