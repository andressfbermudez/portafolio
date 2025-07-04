import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Sobre Mí</h3>
                    <p>Desarrollador Backend especializado en Java con Spring Boot.</p>
                </div>

                <div className="footer-section">
                    <h3>Enlaces Rápidos</h3>
                    <ul>
                        <li><a href="/index.html">🔗 Inicio</a></li>
                        <li><a href="/pages/projects.html">🔗 Proyectos</a></li>
                        <li><a href="/pages/certifications.html">🔗 Certificaciones</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contacto</h3>
                    <div className="social-icons">
                        <img className="socialMediaIcon" data-redirect="github" src="/images/icons/github.png" />
                            <img className="socialMediaIcon" data-redirect="linkedin" src="/images/icons/linkedin.png" />
                            </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2025 Andrés Bermúdez | Todos los derechos reservados.</p>
                </div>
        </footer>
    );
}

export default Footer;
