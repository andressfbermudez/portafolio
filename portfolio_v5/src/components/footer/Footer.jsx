import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Footer.module.css';

function Footer() {
    const navigate = useNavigate();

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                {/* Sección Sobre mí */}
                <div className={styles.footerSection}>
                    <h3>Sobre mí</h3>
                    <p>
                        Desarrollador de software | Java | Spring | Python | FastAPI | React | SQL | Linux
                    </p>
                </div>

                {/* Sección Enlaces */}
                <div className={styles.footerSection}>
                    <h3>Enlaces rápidos</h3>
                    <ul className={styles.footerLinks}>
                        <li><button onClick={() => navigate('/')}>🔗 Inicio</button></li>
                        <li><button onClick={() => navigate('/projects')}>🔗 Proyectos</button></li>
                        <li><button onClick={() => navigate('/certifications')}>🔗 Certificaciones</button></li>
                    </ul>
                </div>

                {/* Sección Contacto */}
                <div className={styles.footerSection}>
                    <h3>Contacto</h3>
                    <div className={styles.socialIcons}>
                        <img
                            className={styles.socialMediaIcon}
                            src="/images/icons/github.png"
                            alt="GitHub"
                            onClick={() => window.open('https://github.com/andressfbermudez')}
                        />
                        <img
                            className={styles.socialMediaIcon}
                            src="/images/icons/linkedin.png"
                            alt="LinkedIn"
                            onClick={() => window.open('https://www.linkedin.com/in/andressfbermudez/')}
                        />
                    </div>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <p>&copy; 2025 Andrés Bermúdez | Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;
