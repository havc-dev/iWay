import { useContext } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { signUp } from '../firebase/firebaseConfig';
import { ContextDriver } from '../context/ContextDriver';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  let navigate = useNavigate();
  const DriverCtx = useContext(ContextDriver);

  const onSubmit = async (data) => {
    const { email, password } = data;
    await signUp(email, password)
      .then((userCredential) => {
        //Signed in successfully
        const user = userCredential.user;
        DriverCtx.setIsLoggedIn(true);
        DriverCtx.setDriver(user);
        localStorage.setItem('isLoggedIn', true);
        //..
        navigate(`/`);
      })
      .catch((error) => {
        //Failed to sign in
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <main>
      <h1>Registro</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='email'>
          Correo:
          <input type='email' {...register('email', { required: true })} />
          {errors.email && <span>Debes agregar tu email</span>}
        </label>
        <label htmlFor='password'>
          Contraseña:
          <input
            type='password'
            {...register('password', { required: true })}
          />
          {errors.password && <span>Debes agregar una contraseña</span>}
        </label>

        <input type='submit' />
      </form>
      <p>
        Ya tienes cuenta? <NavLink to='/login'>Inicia sesión</NavLink>
      </p>
    </main>
  );
};

export default Register;
