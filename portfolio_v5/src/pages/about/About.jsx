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
                        Desarrollador de software 👨‍💻 especializado en backend, con experiencia en aplicaciones
                        web usando Java (Spring Boot) ☕ y Python (FastAPI) 🐍. Conocimientos en bases de datos
                        relacionales (SQL) 🗄️.
                        Experiencia en APIs RESTful 🔗, web apps 🌐, escritorio 🖥️ y administración de servidores
                        Linux 🐧 y Windows 🪟.
                        <br /><br />
                        También desarrollo en frontend con React, HTML, CSS y JavaScript 🎨💻.
                        <br /><br />
                        🎓🚀✅ Graduado del programa ONE - Oracle Next Education, G7, en desarrollo backend con
                        Java y Spring Framework.
                        <Link className={styles.linkProjects} to="/certifications" onClick={() => window.scrollTo(0, 0)}>
                            📌Ver certificaciones.
                        </Link>
                        <br /><br />
                        🎓 Estudiante de Ingeniería de Software en el Politécnico Grancolombiano.
                        <br /><br />
                        Mi interés por la programación comenzó a los 12 años gracias a los videojuegos 🎮. Modifiqué
                        modelos 🖌️, creé configuraciones 🛠️ y scripts 📜. En ese momento no sabía que eso era programación 🧑‍💻. Era solo diversión 🎯, pero se convirtió
                        en mi profesión 💼. 🎨🎮 Programar es mi profesión y mi hobby.
                    </p>
                </section>
            </section>
        </main>
    );
};

export default About;
