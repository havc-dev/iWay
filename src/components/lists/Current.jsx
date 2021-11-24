import { useEffect, useContext, useState } from "react";
import { RoutesContext } from "../../context/routesContext";
import PackageCard from '../cards/PackageCard'

const Current = () => {
  const [isLoading, setIsLoading] = useState(true);
  const ctxRoutes = useContext(RoutesContext)
  const currentRoute = ctxRoutes.routes.current

  useEffect(() => {
    setTimeout(() => {
      
    }, 250);
    setIsLoading(false);
  }, []);

  return (
    <>
    { isLoading ?
      <div>Cargando...</div>
      :
      <>
      { currentRoute.length > 0 ?
      currentRoute.map((item, index) => (
        <article key={`${item.packageNumber}${index}`}>
          <PackageCard item={item} />
        </article>
      ))
    : <div>No hay paquetes</div>}
      </>}
    </>
  )
}

export default Current
