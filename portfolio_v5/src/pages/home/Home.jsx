import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';
import { useEnhancements } from '../../hooks/useEnhancements';

function Home() {
    useEnhancements();
    const navigate = useNavigate();

    return (
        <main className={styles.main}>
            <aside className={styles.section1}>
                <img
                    className={styles.photoProfile}
                    src="/images/images/profile_2025.png"
                    alt="Foto de perfil de Andrés Bermúdez"
                    onClick={() => navigate("/about")}
                />
                <h3 className={styles.name} onClick={() => navigate("/about")}>
                    Andrés Bermúdez
                </h3>
                <p className={styles.description}>
                    Desarrollador de software 👨‍💻 especializado en backend, con experiencia en
                    Java (Spring Boot) ☕ y Python (FastAPI) 🐍. Bases de datos SQL 🗄️.
                    <br /><br />
                    APIs RESTful 🔗, apps web 🌐, escritorio 🖥️, servidores Linux 🐧 y Windows 🪟.
                    Automatización con Python 🤖 y frontend con React 🎨.
                    <br /><br />
                    Redes 🌐, ciberseguridad 🔐, DevOps ⚙️ y despliegue de apps 🚀.
                </p>
                <h5 className={styles.location}>
                    <img
                        className={styles.locationIcon}
                        src="/images/icons/location.png"
                        alt="Ícono de ubicación"
                    />
                    Bogotá, Colombia
                </h5>
                <div className={styles.socialMedia} aria-label="Redes sociales">
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
            </aside>

            <section className={styles.section2}>
                <article className={styles.project}>
                    <h4 className={styles.titleProject}>Virtual Assistant DBA</h4>
                    <p className={styles.descriptionProject}>
                        Asistente virtual 🤖 para administrar bases de datos SQL mediante lenguaje
                        natural 🌐 con IA 🧠. Realiza operaciones CRUD solo con texto.
                    </p>
                    <div className={styles.videoContainer}>
                        <iframe
                            src="https://www.youtube.com/embed/ZS4a4nyW8M8?si=RFOmGcU4jkVHktRC&amp;start=1"
                            title="Demo Virtual Assistant DBA"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </div>
                    <p className={styles.noteProjects}>
                        Para más detalles, ve a la sección "Proyectos" del menú.
                    </p>
                </article>
            </section>

            <aside className={styles.section3}>
                <div className={styles.certifications}>
                    {[
                        "alura/certificadoFinalizacionProgramaONE.png",
                        "platzi/certificadoRutaDesarrolloBackendJavaPlatzi.png",
                        "platzi/cursoAvanzadoJavaPlatzi.png",
                        "platzi/cursoSpringDataJPAPlatzi.png",
                        "platzi/cursoJavaSpringPlatzi.png",
                        "alura/certificadoFormacionJavaSpringAlura.png",
                        "alura/certificadoFormacionJavaSpringBootAlura.png",
                        "alura/certificadoFormacionJavaPOOAlura.png",
                        "platzi/cursoFundamentosIngenieriaSoftwarePlatzi.png",
                    ].map((src, idx) => (
                        <img
                            id="image"
                            key={idx}
                            className={styles.certificationImage}
                            src={`/images/certifications/${src}`}
                            alt={`Certificación ${idx + 1}`}
                        />
                    ))}
                </div>
                <p className={styles.noteCertifications}>
                    Para ver todas las certificaciones, haz clic en "Certificaciones" en el menú.
                </p>
            </aside>
        </main>
    );
}

export default Home;
