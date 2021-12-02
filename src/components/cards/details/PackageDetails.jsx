import UserIcon from '../../../assets/icons/UserIcon';
import HouseIcon from '../../../assets/icons/HouseIcon';
import DoorIcon from '../../../assets/icons/DoorIcon';

const PackageDetails = ({ clientName, color, colorAlt }) => {
  return (
    <div className={`package-details`}>
      <div className={`package-details-client`}>
        <div className="minicard">
          <UserIcon />
          <h5 className='details-text-header'>
            {clientName ? `${clientName}` : `Nombre`}
          </h5>
        </div>
        <div className="minicard">
          <HouseIcon />
          <h5 className='details-text-header'>
            {color ? `${color}` : `Color`}
          </h5>
          <div className={`color-showcase ${color}`}></div>
        </div>
        <div className="minicard">
          <DoorIcon />
          <h5 className={`details-text-header`} >
            {colorAlt ? `${colorAlt}` : `Color secundario`}
          </h5>
          <div className={`color-showcase ${colorAlt}`}></div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
