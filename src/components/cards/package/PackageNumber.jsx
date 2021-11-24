import BoxOpenIcon from '../../../assets/icons/BoxOpenIcon';
import './packageNumber.css'

const PackageNumber = ({ packageNumber }) => {
  return (
      <div className={`package-number-container`}>
        <BoxOpenIcon />
        <h3>{packageNumber ? `${packageNumber}` : `0`}</h3>
      </div>
  );
};

export default PackageNumber;
