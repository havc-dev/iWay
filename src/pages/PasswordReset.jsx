import { sendPasswordResetEmail } from 'firebase/auth'
import { NavLink } from 'react-router-dom'

const PasswordReset = () => {
  const [email, setEmail] = useState('')

  return (
    <div>
      <h2>Olvidaste tu contraseña?</h2>
        <input 
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Ingresa tu correo electrónico"
         />
        <button type="submit" onClick={sendPasswordResetEmail(email)}>Enviar correo de reinicio de password </button>
        <p>No tienes una cuenta? <NavLink to={'/register'} >Regístrate</NavLink></p>
    </div>
  )
}

export default PasswordReset
