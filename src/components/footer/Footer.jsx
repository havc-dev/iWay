
const Footer = () => {
  let fecha = new Date();
  let anio = fecha.getFullYear();
  return (
    <footer>
      {anio} - Todos los derechos reservados
    </footer>
  )
}

export default Footer
