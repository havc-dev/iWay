import './packageCard.css';
import { useContext } from 'react';
import { DriverContext } from '../../context/driverContext';
import Adress from './adress/Adress';
import PackageNumber from './package/PackageNumber';
import PackageDetails from './details/PackageDetails';
import PackageActions from './actions/PackageActions';
import PackageButtons from './actions/PackageButtons';

const PackageCard = ({ item }) => {
  const ctxDriver = useContext(DriverContext);
  console.log(item);

  const { driverName } = ctxDriver;
  const driver = driverName;

  const {
    addressBarrio,
    addressBlock,
    addressLot,
    addressStreet,
    clientName,
    houseColour,
    houseColourSecondary,
    houseNumber,
    packageNumber,
    phoneNumber,
  } = item;

  const mensajeAyuda = `Hola ${clientName}, soy ${driver} de Mercado Libre y estoy cerca pero no ubico la dirección, podría ayudarme?`;
  const mensajeError = `Hola ${clientName}, soy ${driver} de Mercado Libre y parece que hay un error con su dirección, podría ayudarme?`;

  const messageHelp = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    mensajeAyuda
  )}`;
  const messageError = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    mensajeError
  )}`;

  return (
    <div className={`card-package`}>
      <div className={`card-package-title`}>
        <Adress
          barrio={addressBarrio}
          block={addressBlock}
          lot={addressLot}
          street={addressStreet}
          number={houseNumber}
        />
        <PackageNumber packageNumber={packageNumber} />
      </div>
      <PackageDetails
        color={houseColour}
        colorAlt={houseColourSecondary}
        clientName={clientName}
        />

      <PackageActions messageError={messageError} phoneNumber={phoneNumber} messageHelp={messageHelp} clientName={clientName} />
        
      <PackageButtons />
    </div>
  );
};

export default PackageCard;
