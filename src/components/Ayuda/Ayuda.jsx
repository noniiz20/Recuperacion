import React from 'react';
import { FaQuestionCircle, FaPhone, FaEnvelope, FaClock, FaShieldAlt } from 'react-icons/fa';
import './Ayuda.css';

const Ayuda = () => {
  return (
    <div className="ayuda">
      <header className="hero">
        <FaQuestionCircle className="hero-icon" />
        <h1>Centro de Ayuda MediLog</h1>
        <p>¿En qué podemos ayudarte hoy?</p>
      </header>

      <section className="faqs">
        <h2>Preguntas Frecuentes</h2>
        
        <div className="faq-item">
          <button className="faq-question">
            ¿Cómo creo una cuenta? <span>+</span>
          </button>
          <div className="faq-answer">
            <p>Ve a "Registrarse" en la página principal y completa el formulario con tus datos.</p>
          </div>
        </div>

        <div className="faq-item">
          <button className="faq-question">
            ¿Cómo restablezco mi contraseña? <span>+</span>
          </button>
          <div className="faq-answer">
            <p>Haz clic en "¿Olvidaste tu contraseña?" en el login y sigue las instrucciones.</p>
          </div>
        </div>
      </section>

      <section className="contacto">
        <h2>Contacta a Soporte</h2>
        <div className="contact-cards">
          <div className="contact-card">
            <FaPhone className="contact-icon" />
            <h3>Línea Directa</h3>
            <p>+1 234 567 890</p>
          </div>
          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <h3>Correo</h3>
            <p>soporte@medilog.com</p>
          </div>
          <div className="contact-card">
            <FaClock className="contact-icon" />
            <h3>Horario</h3>
            <p>Lun-Vie: 8am - 6pm</p>
          </div>
        </div>
      </section>

      <div className="security">
        <FaShieldAlt className="security-icon" />
        <p>Tus datos están 100% protegidos con encriptación avanzada.</p>
      </div>
    </div>
  );
};

export default Ayuda;