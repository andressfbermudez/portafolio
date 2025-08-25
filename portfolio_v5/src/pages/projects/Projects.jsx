import React, { useRef } from 'react';
import styles from './Projects.module.css';
import { useEnhancements } from "../../hooks/useEnhancements";

function Projects() {
    useEnhancements();

    const projects = [
        {
            id: "ecommerce",
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
                "/images/projects/ecommerce/customer_catalog.png",
                "/images/projects/ecommerce/search_products.png",
                "/images/projects/ecommerce/customer_cart.png",
                "/images/projects/ecommerce/customer_account.png",
                "/images/projects/ecommerce/create_order_tool.png",
                "/images/projects/ecommerce/insert_products_create_order_tool.png",
                "/images/projects/ecommerce/table_create_order_tool.png",
                "/images/projects/ecommerce/admin_users_panel.png",
                "/images/projects/ecommerce/login.png"
            ]
        },
        {
            id: "inventoryapp",
            title: "Gestor de inventario tecnologico",
            description: "Este proyecto es una aplicación diseñada para gestionar el inventario " +
                "de equipos tecnológicos de una empresa. Permite añadir, modificar y eliminar " +
                "dispositivos fácilmente.\n\n También incluye un buscador que facilita la localización " +
                "de equipos y permite descargar el inventario en formato XLSX para su análisis o " +
                "copia de seguridad.\n\n Fue desarrollado con Java y Spring Boot para el backend, " +
                "React para el frontend y funciona sobre una base de datos Microsoft SQL Server.",
            images: [
                "/images/projects/inventoryapp/app.png",
                "/images/projects/inventoryapp/adding_device.png",
                "/images/projects/inventoryapp/search_device.png",
                "/images/projects/inventoryapp/download_inventory.png",
                "/images/projects/inventoryapp/xlsx_inventory.png"
            ]
        },
        {
            id: "virtualassistantdba",
            title: "Asistente virtual para administrar bases de datos",
            description: "Asistente virtual con integracion con IA para administrar bases de datos SQL mediante " +
                "lenguaje natural.\n\n Permite ejecutar consultas y operaciones SQL directamente " +
                "a través de un chatbot.\n\n Fue desarrollado usando Java con Spring Boot " +
                "para el backend, HTML, CSS y JavaScript para el frontend y ha sido probado " +
                "con bases de datos como MySQL y Microsoft SQL Server.",
            video: "https://www.youtube.com/embed/ZS4a4nyW8M8?start=1"
        }
    ];

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
            <aside className={styles.indexProjects} id="indexProjects">
                <h4 className={styles.projectsIndexTitle}>Proyectos</h4>
                {projects.map((project, index) => (
                    <a
                        key={project.id}
                        className={styles.linkProjectIndex}
                        href={`#${project.id}`}
                    >
                        {index + 1}. {project.title}
                    </a>
                ))}
            </aside>

            <section className={styles.projects}>
                {projects.map((project) => (
                    <article
                        key={project.id}
                        className={styles.project}
                        id={project.id}
                        style={{ scrollMarginTop: '6rem' }}
                    >
                        <h4 className={styles.titleProject}>{project.title}</h4>

                        {project.description.split("\n\n").map((p, i) => (
                            <p key={i} className={styles.descriptionProject}>{p}</p>
                        ))}

                        {project.video && (
                            <div className={styles.videoContainer}>
                                <iframe
                                    src={project.video}
                                    title={`Demo ${project.title}`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                />
                            </div>
                        )}

                        {project.images && (
                            <div className={styles.imageGallery}>
                                {project.images.map((src, i) => (
                                    <img
                                        key={i}
                                        src={src}
                                        alt={`${project.title} screenshot ${i + 1}`}
                                        className={styles.projectImage}
                                        onClick={openFullscreen}
                                    />
                                ))}
                            </div>
                        )}
                    </article>
                ))}
            </section>
        </main>
    );
}

export default Projects;
