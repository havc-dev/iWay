import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContextDriver } from '../context/ContextDriver';

import { logOut } from '../firebase/firebaseConfig';

const Logout = () => {
  let navigate = useNavigate();
  const DriverCtx = useContext(ContextDriver);
  const [loading, setLoading] = useState(false);
  const [errorCode, setErrorCode] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const onSubmit = async () => {
    setLoading(true);
    await logOut()
      .then(() => {
        DriverCtx.setIsLoggedIn(false);
        DriverCtx.setDriver(null);
        localStorage.setItem('isLoggedIn', false);
        navigate(`/`);
      })
      .catch((error) => {
        if (error.code) {
          setErrorCode(error.code);
          alert(errorCode);
        }
        if (error.message) {
        setErrorMessage(error.message);
        alert(errorMessage);
        }
      });
      setLoading(false);
  };

  return (
    <main>
      <h1>Cerrar sesión</h1>
      <h3>Está seguro de que desea cerrar sesión?</h3>

      <h4>Cualquier cambio no guardado se perderá</h4>

      <button disabled={loading} onClick={onSubmit}>Cerrar Sesión</button>
    </main>
  );
};

export default Logout;
