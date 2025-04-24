import React from 'react';
import './Registro.css'
import { Link } from 'react-router-dom';

const RegistroU = () => {
  return (
    <div>
      <div className="registration-form-container">
      <div className="registration-form">
        <h2>Regístrate</h2>
        <form>
          <div className="form-group">
            <label for="name">Nombre:</label>
            <input type="text" id="name" name="name" required/>
          </div>
          <div className="form-group">
            <label for="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" required/>
          </div>
          <div className="form-group">
            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password" required/>
          </div>
          <div className="form-group">
            <label for="phone">Teléfono:</label>
            <input type="tel" id="phone" name="phone" required/>
          </div>
          <div className="form-group">
            <label for="address">Dirección:</label>
            <textarea id="address" name="address" rows="3" required></textarea>
          </div>
          <div className="form-group">
            <label for="birthdate">Fecha de nacimiento:</label>
            <input type="date" id="birthdate" name="birthdate" required/>
          </div>
          <Link to="/Login"><button type="submit" className="btn-register">Registrarse</button></Link>
        </form>
        <div className="form-footer">
          <p>¿Ya tienes una cuenta? <a href="#" class="login-link">Iniciar sesión</a></p>
        </div>
      </div>
    </div>
  </div>
  );
}

export default RegistroU;
