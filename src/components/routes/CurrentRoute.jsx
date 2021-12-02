import { useEffect, useContext, useState } from "react";
import { ContextRoutes } from '../../context/ContextRoutes';
import { db } from "../../firebase/firebaseConfig";
import { collection, doc, getDocs, setDoc, getDocsFromServer } from "firebase/firestore";
import PackageCard from '../cards/PackageCard'

const CurrentRoute = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentRoute, setCurrentRoute] = useState([]);
  const routesCollectionRef =collection(db, 'routes');
  // const RoutesCtx = useContext(ContextRoutes)
  // let route = RoutesCtx.CurrentRoute;

  useEffect(() => {
    const getRoute = async () => {
      const data = await getDocsFromServer(routesCollectionRef, 'test');
      console.log(data.docs);
      data.docs.map(doc => { console.log(doc.data()) })
      // setCurrentRoute(data.docs((doc) => ({...doc._document, id: doc.id})));
      console.log(currentRoute);
      
    }

    getRoute();
    setIsLoading(false);
  }, []);

  return (
    <>
    <h1> PREVIEW </h1>
    { isLoading ?
      <div>Cargando ruta...</div>
      :
      <>
      { currentRoute.length > 0 ?
      currentRoute.map((item, index) => (
        <article key={`${item.packageNumber}${index}`}>
          <PackageCard item={item} route={current} />
        </article>
      ))
    : <div>No hay paquetes</div>}
      </>}
    </>
  )
}

export default CurrentRoute
