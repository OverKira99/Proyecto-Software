import React from 'react';
import '../../styles/homePageStyle/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/imagenes/logoSeguridad.webp" alt="Car Security Logo" />
        <h1>Car Security</h1>
      </div>
      <button className="login-button">INICIO DE SESIÓN</button>
    </header>
  );
};

export default Header;
