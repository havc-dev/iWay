import { useEffect, useContext, useState } from "react";
import { ContextRoutes } from '../../context/ContextRoutes';

import PackageCard from '../cards/PackageCard'

const FailedRoute = () => {

  const [isLoading, setIsLoading] = useState(true);
  const RoutesCtx = useContext(ContextRoutes)
  let route = RoutesCtx.FailedRoute;

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
          <PackageCard item={item} route={failed}/>
        </article>
      ))
    : <div>Aún sin fallas</div>}
      </>}
    </>
  )
}

export default FailedRoute