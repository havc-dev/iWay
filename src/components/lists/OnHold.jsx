const OnHold = () => {
  const [isLoading, setIsLoading] = useState(true);
  const ctxRoutes = useContext(RoutesContext)
  const onHoldRoute = ctxRoutes.routes.onHold

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
      { onHoldRoute.length > 0 ?
      onHoldRoute.map((item, index) => (
        <article key={`${item.packageNumber}${index}`}>
          <PackageCard item={item} />
        </article>
      ))
    : <div>No hay paquetes en espera</div>}
      </>}
    </>
  )
}

export default OnHold
