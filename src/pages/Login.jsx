import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ContextDriver } from '../context/ContextDriver';
import { signIn } from '../firebase/firebaseConfig';



const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let navigate = useNavigate();
  const DriverCtx = useContext(ContextDriver);

  const onSubmit = async (data) => {
    const { email, password } = data;
    await signIn(email, password)
      .then((userCredential) => {
        //Signed in successfully
        const user = userCredential.user;
        DriverCtx.setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', true);
        //..
        navigate(`/`);
      })
      .catch((error) => {
        //Failed to sign in
        const errorCode = error.code;
        console.log('Error code: ' + errorCode);
        const errorMessage = error.message;
        console.log('Error message: ' + errorMessage);
      });
  };

  return (
    <main>
      <h1>Iniciar sesión</h1>
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
        Necesitas una cuenta? <NavLink to='/register'>Crea una cuenta</NavLink>
      </p>
    </main>
  );
};

export default Login;
