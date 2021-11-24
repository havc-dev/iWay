const Failed = () => {

  const [isLoading, setIsLoading] = useState(true);
  const ctxRoutes = useContext(RoutesContext)
  const failedRoute = ctxRoutes.routes.failed

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
      { failedRoute.length > 0 ?
      failedRoute.map((item, index) => (
        <article key={`${item.packageNumber}${index}`}>
          <PackageCard item={item} />
        </article>
      ))
    : <div>Has entregado todos los paquetes hasta el momento</div>}
      </>}
    </>
  )
}

export default Failed