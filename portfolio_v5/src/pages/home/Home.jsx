import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';
import { useEnhancements } from '../../hooks/useEnhancements';

const certifications = [
    "alura/certificadoFinalizacionProgramaONE.png",
    "platzi/certificadoRutaDesarrolloBackendJavaPlatzi.png",
    "platzi/cursoAvanzadoJavaPlatzi.png",
    "platzi/cursoSpringDataJPAPlatzi.png",
    "platzi/cursoJavaSpringPlatzi.png",
    "alura/certificadoFormacionJavaSpringAlura.png",
    "alura/certificadoFormacionJavaSpringBootAlura.png",
    "alura/certificadoFormacionJavaPOOAlura.png",
    "platzi/cursoFundamentosIngenieriaSoftwarePlatzi.png",
];

const socialLinks = [
    {
        icon: "github",
        alt: "GitHub",
        url: "https://github.com/andressfbermudez"
    },
    {
        icon: "linkedin",
        alt: "LinkedIn",
        url: "https://www.linkedin.com/in/andressfbermudez/"
    }
];

const projects = [
    {
        title: "Ecommerce Web",
        description:
            "Proyecto de comercio electrónico que gestiona más de 23.000 productos. " +
            "Permite a los usuarios buscar, añadir al carrito y realizar pedidos online. " +
            "El proyecto fue desarrollado con Python y FastAPI para el backend, HTML, CSS y " +
            "JavaScript para el frontend, funciona sobre una base de datos Microsoft SQL " +
            "Server y se integra perfectamente con el ERP de la empresa.",
        images: [
            "/images/projects/ecommerce/customer_catalog.png"
        ]
    },
    {
        title: "Gestor de inventario tecnologico",
        description:
            "Este proyecto es una aplicación diseñada para gestionar el inventario de equipos " +
            "tecnológicos de una empresa. Permite añadir, modificar y eliminar dispositivos " +
            "fácilmente. Fue desarrollado con Java y spring framework para el backend, React para " +
            " el frontend y funciona sobre una base de datos Microsoft SQL Server.",
        images: [
            "/images/projects/inventoryapp/app.png",
        ]
    },
    {
        title: "Virtual Assistant DBA",
        description:
            "Asistente virtual con IA para administrar bases de datos SQL mediante lenguaje natural. " +
            "Permite ejecutar consultas y operaciones directamente a través de un chatbot. Fue " +
            "desarrollado usando Java con Spring Framework para el backend, HTML, CSS y JavaScript para " +
            "el frontend y ha sido probado con bases de datos como MySQL y Microsoft SQL Server.",
        video: "https://www.youtube.com/embed/ZS4a4nyW8M8?start=1"
    },
    
];

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
                    {socialLinks.map((item, i) => (
                        <img
                            key={i}
                            className={styles.socialMediaIcon}
                            src={`/images/icons/${item.icon}.png`}
                            alt={item.alt}
                            onClick={() => window.open(item.url)}
                        />
                    ))}
                </div>
            </aside>

            <section className={styles.section2}>
                {projects.map((project, index) => (
                    <article key={index} className={styles.project}>
                        <h4 className={styles.titleProject}>{project.title}</h4>
                        <p className={styles.descriptionProject}>{project.description}</p>

                        {project.video && (
                            <div className={styles.videoContainer}>
                                <iframe
                                    src={project.video}
                                    title={`Demo ${project.title}`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                />
                            </div>
                        )}

                        {project.images && (
                            <div className={styles.imageGallery}>
                                {project.images.map((img, i) => (
                                    <img
                                        key={i}
                                        src={img}
                                        alt={`${project.title} imagen ${i + 1}`}
                                        className={styles.projectImage}
                                    />
                                ))}
                            </div>
                        )}

                        <p className={styles.noteProjects}>
                            Para más detalles, ve a la sección "Proyectos" en el menú.
                        </p>
                    </article>
                ))}
            </section>

            <aside className={styles.section3}>
                <div className={styles.certifications}>
                    {certifications.map((src, i) => (
                        <img
                            key={i}
                            className={styles.certificationImage}
                            src={`/images/certifications/${src}`}
                            alt={`Certificación ${i + 1}`}
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
