import './Login.css'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login-form-container">
      <div className="login-form">
        <h2>Iniciar Sesión</h2>
        <form>
          <div className="form-group">
            <label for="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" required/>
          </div>
          <div className="form-group">
            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password" required/>
          </div>
          <Link to="/"><button type="submit" className="btn-login">Iniciar Sesión</button></Link>
        </form>
        <div className="form-footer">
          <p>¿No tienes una cuenta? <a href="/Registrarse" className="register-link">Regístrate</a></p>
        </div>
      </div>
    </div>
   
  );
}

export default Login;