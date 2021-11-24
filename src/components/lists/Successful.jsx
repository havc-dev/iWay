const Successful = () => {

  const [isLoading, setIsLoading] = useState(true);
  const ctxRoutes = useContext(RoutesContext)
  const successfulRoute = ctxRoutes.routes.successful

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
      { successfulRoute.length > 0 ?
      successfulRoute.map((item, index) => (
        <article key={`${item.packageNumber}${index}`}>
          <PackageCard item={item} />
        </article>
      ))
    : <div>No hay paquetes en espera</div>}
      </>}
    </>
  )
}

export default Successful
