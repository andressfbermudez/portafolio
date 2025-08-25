import React, { useRef } from 'react';
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
        title: "Ecommerce",
        description:
            "Proyecto de comercio electrónico que gestiona más de 23.000 productos y más de 100 usuarios " +
            "a nivel nacional. Permite a los usuarios buscar productos, añadirlos al carrito y realizar pedidos en línea, " +
            "visualizando el stock disponible completamente actualizado en tiempo real, así como descuentos y precios diferentes " +
            "para cada cliente, según su perfil.\n\n Cuenta con un panel para administrar usuarios, un panel para los " +
            "colaboradores de la empresa y un panel para los clientes.\n\n" +
            "El proyecto fue desarrollado con Python y FastAPI para el backend, y con HTML, CSS y " +
            "JavaScript para el frontend. Funciona sobre una base de datos Microsoft SQL " +
            "Server y se integra perfectamente con el ERP de la empresa.\n\n Actualmente, más de 100 " +
            "usuarios hacen uso de la aplicación desde diferentes ciudades del país.",
        images: [
            "/images/projects/ecommerce/customer_catalog.png"
        ]
    },
    {
        title: "Gestor de inventario tecnologico",
        description: "Este proyecto es una aplicación diseñada para gestionar el inventario " +
            "de equipos tecnológicos de una empresa. Permite añadir, modificar y eliminar " +
            "dispositivos fácilmente.\n\n También incluye un buscador que facilita la localización " +
            "de equipos y permite descargar el inventario en formato XLSX para su análisis o " +
            "copia de seguridad.\n\n Fue desarrollado con Java y Spring Boot para el backend, " +
            "React para el frontend y funciona sobre una base de datos Microsoft SQL Server.",
        images: [
            "/images/projects/inventoryapp/app.png",
        ]
    },
    {
        title: "Virtual Assistant DBA",
        description: "Asistente virtual con integracion con IA para administrar bases de datos SQL mediante " +
            "lenguaje natural.\n\n Permite ejecutar consultas y operaciones SQL directamente " +
            "a través de un chatbot.\n\n Fue desarrollado usando Java con Spring Boot " +
            "para el backend, HTML, CSS y JavaScript para el frontend y ha sido probado " +
            "con bases de datos como MySQL y Microsoft SQL Server.",
        video: "https://www.youtube.com/embed/ZS4a4nyW8M8?start=1"
    },

];

function Home() {
    useEnhancements();
    const navigate = useNavigate();
    const imgRef = useRef(null);

    // Para ver las imagenes en pantalla completa
    const openFullscreen = (e) => {
        if (e.target.requestFullscreen) {
            e.target.requestFullscreen();
        } else if (e.target.webkitRequestFullscreen) { // Safari
            e.target.webkitRequestFullscreen();
        } else if (e.target.msRequestFullscreen) { // IE/Edge
            e.target.msRequestFullscreen();
        }
    };

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
                    Desarrollador de software especializado en backend, con experiencia en el
                    desarrollo de aplicaciones web utilizando Java (Spring Boot) y Python (FastAPI).
                    Conocimientos en administración, diseño y gestión de bases de datos relacionales (SQL).
                    <br /><br />
                    Experiencia en el desarrollo de APIs RESTful, aplicaciones web, aplicaciones de
                    escritorio y administración de servidores Linux y Windows. También he trabajado
                    en automatizaciónes con Python y desarrollo frontend con React, HTML, CSS y JavaScript.
                    <br /><br />
                    Conocimientos en redes, ciberseguridad, prácticas DevOps y despliegue de aplicaciones.
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

                        {project.description.split("\n\n").map((p, i) => (
                            <p key={i} className={styles.descriptionProject}>{p}</p>
                        ))}

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
                                        onClick={openFullscreen}
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
                            onClick={openFullscreen}
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
