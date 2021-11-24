import WhatsAppIcon from '../../../assets/icons/WhatsAppIcon';
import PhoneIcon from '../../../assets/icons/PhoneIcon';
import './packageActions.css';

const PackageActions = ({ messageHelp, messageError, phoneNumber, clientName }) => {
  return (
    <div className={`card-package-actions`}>
      <div className={`card-package-actions_ws`}>
        <a href={messageHelp} target='_blank' className='actions-whats'>
          <WhatsAppIcon />
          Ayuda
        </a>
        <a href={messageError} target='_blank' className='actions-whats'>
          <WhatsAppIcon />
          Error
        </a>
      </div>
      <div>
        <a href={`tel:${phoneNumber}`} className='actions-phone'>
          <PhoneIcon />
          { clientName === undefined ? `` : `Llamar a ${clientName}`}
        </a>
      </div>
    </div>
  );
};

export default PackageActions;
