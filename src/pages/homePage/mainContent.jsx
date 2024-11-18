import React from 'react';
import '../../styles/homePageStyle/mainContent.css';

const MainContent = () => {

    

  return (
    <main className="main-content">
      <div className="text-container">
      <br />
      <br />
        <section>
          <h4>¿Quiénes Somos?</h4>
          <p>
            En Car Security somos pioneros en soluciones de seguridad vehicular innovadoras. Nuestro compromiso es brindar tranquilidad y protección a nuestros clientes a través de tecnología de vanguardia y un enfoque centrado en la vigilancia inteligente.
          </p>
          <p>
            Utilizamos drones equipados con cámaras de alta definición y sistemas de monitoreo avanzados para vigilar y proteger vehículos en tiempo real. Nuestro equipo está conformado por expertos en seguridad y tecnología, dedicados a garantizar una supervisión constante y eficaz, ya sea en zonas urbanas o áreas remotas.
          </p>
        </section>
        <section>
          <h4>Nuestra Misión</h4>
          <p>
            Proteger lo que más valoras, ofreciendo servicios de vigilancia vehicular eficientes, confiables y personalizados. Creemos que la seguridad debe estar al alcance de todos, y por ello, integramos tecnología de última generación para prevenir incidentes y actuar de manera inmediata en caso de cualquier eventualidad.
          </p>
        </section>
        <section>
          <h4>Nuestra Visión</h4>
          <p>
            Ser líderes en seguridad vehicular, redefiniendo los estándares de vigilancia mediante el uso de drones y soluciones tecnológicas que aseguren la tranquilidad de nuestros clientes en cualquier lugar.
          </p>
        </section>
        <section>
          <h4>Nuestros Valores</h4>
          <ul>
            <li><strong>Innovación:</strong> Nos mantenemos a la vanguardia tecnológica para ofrecerte las mejores soluciones.</li>
            <li><strong>Confianza:</strong> Priorizamos la protección de tu vehículo como si fuera nuestro.</li>
            <li><strong>Eficiencia:</strong> Respondemos de manera rápida y efectiva ante cualquier situación.</li>
            <li><strong>Compromiso:</strong> Estamos contigo las 24 horas, los 7 días de la semana.</li>
          </ul>
        </section>
        <p>En Car Security, tu seguridad es nuestra prioridad.</p>
      </div>
      <div className="images">
        <img src="/imagenes/logoSeguridad.webp" alt="Dron Seguridad" />
      </div>
    </main>
  );
};

export default MainContent;
