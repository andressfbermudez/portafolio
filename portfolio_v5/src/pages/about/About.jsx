import React, { useEffect } from 'react';
import { useEnhancements } from '../../hooks/useEnhancements';
import { Link } from 'react-router-dom';
import styles from './About.module.css';

const socialIcons = [
    {
        src: '/images/icons/github.png',
        alt: 'GitHub',
        link: 'https://github.com/andressfbermudez',
    },
    {
        src: '/images/icons/linkedin.png',
        alt: 'LinkedIn',
        link: 'https://www.linkedin.com/in/andressfbermudez/',
    },
];

const About = () => {
    useEnhancements();

    const renderSocialIcons = () =>
        socialIcons.map((icon, idx) => (
            <img
                key={idx}
                className={styles.socialMediaIcon}
                src={icon.src}
                alt={icon.alt}
                onClick={() => window.open(icon.link)}
            />
        ));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className={styles.main}>
            <section className={styles.about}>
                <article className={styles.divAndres}>
                    <div className={styles.imageAndData}>
                        <div className={styles.divPhotoProfile}>
                            <img
                                className={`${styles.photoProfile} fullscreen-image`}
                                src="/images/images/profile_2025.png"
                                alt="Foto de perfil Andrés"
                            />
                        </div>
                    </div>

                    <div className={styles.socialMedia}>
                        <h1 className={styles.name}>Andrés Bermúdez</h1>
                        <div className={styles.linksContactAbout}>{renderSocialIcons()}</div>
                    </div>
                </article>

                <article className={styles.divAndresMobile}>
                    <img
                        className={`${styles.photoProfile} fullscreen-image`}
                        src="/images/images/profile_2025.png"
                        alt="Foto de perfil Andrés"
                    />
                    <h1 className={styles.nameMobile}>Andrés Bermúdez</h1>
                    <div className={styles.linksContactAbout}>{renderSocialIcons()}</div>
                </article>

                <section className={styles.descriptionAbout}>
                    <p>
                        Desarrollador de software especializado en backend, con experiencia en el desarrollo
                        de aplicaciones web utilizando Java (Spring Boot) y Python (FastAPI). Conocimientos
                        en administración, diseño y gestión de bases de datos relacionales (SQL). 
                        <br /><br />
                        Experiencia en el desarrollo de APIs RESTful, aplicaciones web, aplicaciones de
                        escritorio y administración de servidores Linux y Windows. También he trabajado en
                        automatizaciónes con Python y desarrollo frontend con React, HTML, CSS y JavaScript.
                        <br /><br />
                        Conocimientos en redes, ciberseguridad, prácticas DevOps y despliegue de aplicaciones.
                    </p>
                </section>
            </section>
        </main>
    );
};

export default About;
