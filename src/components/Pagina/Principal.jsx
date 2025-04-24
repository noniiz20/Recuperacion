import React from 'react';
import { FaUserDoctor, FaHospital } from "react-icons/fa6";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import './Pagina.css';
import Doctor from '../Imagenes/doctor.webp';
import Mia from '../Imagenes/Mia.avif';
import { Link } from 'react-router-dom';

function Principal() {
  return (
    <div className="main-container">
      {/* Tarjetas */}
      <h1 className="main-title">Easy Steps And Get Your Solution</h1>
      <div className="cards-container">
        {[1, 2, 3, 4].map((item) => (
          <div className="card" key={item}>
            <FaUserDoctor className="card-icon" />
            <h6>Welcome to Easy Steps</h6>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        ))}
      </div>

      {/*Doctor + Botón */}
      <div className="image-section">
        <div className="text-content">
          <h2>Best Doctor Anywhere And Anytime</h2>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tempora dignissimos ipsum obcaecati nostrum.
          </p>
          <Link to="/Ayuda"><Button variant="primary" className="action-button">Ayuda</Button></Link>
        </div>
        <img src={Doctor} alt="Doctor" className="uniform-image" />
      </div>

      {/*Mia + Botón */}
      <div className="image-section"> 
        <img src={Mia} alt="Mia" className="uniform-image" />
        <div className="text-content">
          <h2>Urgent Online Care Solution Your Problem</h2>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
          </p>
          <Link to="/QuienesSomos"><Button variant="primary" className="action-button">Quienes somos</Button></Link>
        </div>
      </div>

      {/* Testimonios */}
      <div className="testimonials">
        <h2>What People Say About Us</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <FaHospital className="testimonial-icon" />
            <h3>Welcome to Easy Steps</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi amet dicta voluptatibus.</p>
          </div>
          <div className="testimonial-card">
            <FaHospital className="testimonial-icon" />
            <h3>Welcome to Easy Steps</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi amet dicta voluptatibus.</p>
          </div>
        </div>
      </div>

      {/* Registro */}
      <div className="register-section">
        <div className="register-content">
          <h3>Want to register Easily?</h3>
          <Button variant="primary" size="lg" active className="register-button">Primary button</Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h2>MediLog</h2>
            <p className="footer-description">Soluciones médicas confiables para todos.</p>
            <div className="social-icons">
              <FaFacebookF /> <FaTwitter /> <FaInstagram /> <FaLinkedinIn />
            </div>
          </div>

          <div className="footer-columns">
            <ul className="footer-links">
              <li><h3>Servicios</h3></li>
              <li><a href="/Login">Login</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Error</a></li>
            </ul>
            <ul className="footer-links">
              <li><h3>Información</h3></li>
              <li><a href="#">Servidor Principal</a></li>
              <li><a href="#">Clientes Activos</a></li>
              <li><a href="#">ID de Usuario</a></li>
            </ul>
            <ul className="footer-links">
              <li><h3>Legal</h3></li>
              <li><a href="#">Términos</a></li>
              <li><a href="#">Privacidad</a></li>
              <li><a href="#">Última Actualización</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Principal;