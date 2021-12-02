const Adress = ({barrio, street, block, lot, number}) => {
  return (
    <div className={`address-container`}>
      <div className={`address-title`}>
          <h2 className={`address-main`}>
            {barrio ? barrio : 'Colonia'},
          </h2>
          <h3 className={`address-secondary`}>
            {street ? street : 'Calle'}
            </h3>
          <p>
            {block ? `Mz ${block}` : 'Manzana'},
            {lot ? ` Lt ${lot}` : ' Lote'},
            {number ? ` #${number}` : ' Número'}
          </p>
        </div>
    </div>
  )
}

export default Adress
