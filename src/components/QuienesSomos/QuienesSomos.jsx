import React from 'react';
import './Quienes.css';
import Doctor from '../Imagenes/Doctor.webp';

const QuienesSomos = () => {
  return (
    <div className="about-us-container">
      <section className="hero-section">
        <h1>Conoce Nuestra Historia</h1>
        <p>Somos más que una empresa, somos una familia comprometida con la excelencia.</p>
      </section>

      <section className="mission-section">
        <div className="mission-content">
          <h2>Nuestra Misión</h2>
          <p>
            Conectados con la salud medica, ayudamos a quienes nos necesitan, somos una familia, no dejaremos morir a nadie, nosotros nos encargamos de salvar tu vida
          </p>
        </div>
        <div className="mission-image">
          <img src={Doctor} alt="Equipo trabajando" />
        </div>
      </section>

      <section className="values-section">
        <h2>Nuestros Valores</h2>
        <div className="values-grid">
          {[
            { icon: '🌱', title: 'Sostenibilidad', desc: 'Trabajamos con métodos eco-amigables.' },
            { icon: '🤝', title: 'Honestidad', desc: 'Transparencia en cada transacción.' },
            { icon: '🚀', title: 'Innovación', desc: 'Tecnología al servicio medico.' },
            { icon: '❤️', title: 'Pasión', desc: 'Amamos lo que hacemos.' }
          ].map((item, index) => (
            <div key={index} className="value-card">
              <span className="value-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="team-section">
        <h2>Conoce al Equipo</h2>
        <div className="team-grid">
          <p className="team-cta">¡Somos un equipo de 10+ medicos apacionados para salvar tu vida</p>
        </div>
      </section>

      <section className="cta-section">
        <h2>¿Quieres unirte a nuestra comunidad?</h2>
        <button className="cta-button">¡Contáctanos!</button>
      </section>
    </div>
  );
};

export default QuienesSomos;