import './packageButtons.css'

const PackageButtons = () => {

  const postponeHandler = () => {
    console.log('postponeHandler');
  }

  const deliveredHandler = () => {
    console.log('deliveredHandler');
  }
  return (
    <div className={`card-package-footer`}>
      <button 
        onClick={postponeHandler}
        className={`card-package-button_alt`}>Posponer</button>
      <button 
        onClick={deliveredHandler}
        className={`card-package-button`}>Entregado</button>
    </div>
  );
};

export default PackageButtons;
