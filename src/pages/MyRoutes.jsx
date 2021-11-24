import { useContext, useEffect, useState } from "react";
import { RoutesContext } from "../context/routesContext";
import AddPackage from "../components/inputs/AddPackage";
import Route from "../components/lists/Current";
import './myRoutes.css'

const MyRoutes = () => {
  const ctxRoutes = useContext(RoutesContext);

  const [isLoading, setIsLoading] = useState(true);
  const [isAddingPackages, setIsAddingPackages] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const addPackageToggle = () => {
    setIsAddingPackages(prevIsAddingPackages => !isAddingPackages);
  };

  return (
    <>
      <h1>MY ROUTES</h1>
      <section>
        {isLoading ? < div > Loading... </div> : 
        <>
        <button 
          className={`btn-add-package`}
          onClick={addPackageToggle}>Agregar Paquete</button>
        {isAddingPackages ?
          <AddPackage 
            isAddingPackages={isAddingPackages}
            setIsAddingPackages={setIsAddingPackages}/>
        : null}
        </>
        }
        <Route />
      </section>
    </>
  );
};

export default MyRoutes;
