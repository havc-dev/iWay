import { useEffect, useContext, useState } from "react";
import { ContextRoutes } from '../../context/ContextRoutes';

import PackageCard from '../cards/PackageCard'

const PendingRoute = () => {
  const [isLoading, setIsLoading] = useState(true);
  const RoutesCtx = useContext(ContextRoutes)
  let route = RoutesCtx.PendingRoute;

  useEffect(() => {
    setTimeout(() => {
      
    }, 250);
    setIsLoading(false);
  }, []);

  return (
    <>
    { isLoading ?
      <div>Cargando ruta...</div>
      :
      <>
      { route.length > 0 ?
      route.map((item, index) => (
        <article key={`${item.packageNumber}${index}`}>
          <PackageCard item={item} route={pending}/>
        </article>
      ))
    : <div>No tienes paquetes en espera</div>}
      </>}
    </>
  )
}
export default PendingRoute
