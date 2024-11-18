import React from 'react';
import '../../styles/homePageStyle/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <img src="/imagenes/logoDireccion.png" alt="Dirección" />
        <p>Nuestra Dirección: Av. 42 #48-11, Bucaramanga</p>
      </div>
      <div className="footer-section">
        <img src="/imagenes/logoCalendario.png" alt="Horario" />
        <p>Horarios: 8:00 am - 6:00 pm</p>
      </div>
      <div className="footer-section">
        <img src="/imagenes/telefono.jpg" alt="Teléfono" />
        <p>+57 01-800-0127395</p>
      </div>
    </footer>
  );
};

export default Footer;
