import React from 'react';
import styles from './Projects.module.css';
import { useEnhancements } from "../../hooks/useEnhancements";

function Projects() {
    useEnhancements();

    const projects = [
        {
            id: "ecommerce",
            title: "Ecommerce Web",
            description: "Proyecto de comercio electrónico que gestiona más de 23.000 productos. " +
                         "Permite a los usuarios buscar, añadir al carrito y realizar pedidos online. " +
                         "Incluye autenticación, un panel de administración, diferentes paginas para " +
                         "los clientes, paneles para los asesores y un carrito de compras. " +
                         "Optimiza la creación de pedidos con múltiples productos en tan solo unos " +
                         "clics, reduciendo en un 75 % el tiempo que antes dedicaban los asesores a " +
                         "introducirlos manualmente. El sistema es dinámico: cada cliente ve precios " +
                         "y descuentos personalizados según su perfil. El proyecto fue desarrollado " +
                         "con Python y FastAPI para el backend, HTML, CSS y JavaScript para el frontend, " +
                         "funciona sobre una base de datos Microsoft SQL Server y se integra perfectamente " +
                         "con el ERP de la empresa.",
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
                         "dispositivos fácilmente. También incluye un buscador que facilita la localización " +
                         "de equipos y permite descargar el inventario en formato XLSX para su análisis o " +
                         "copia de seguridad. Fue desarrollado con Java y spring framework para el backend, " +
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
            description: "Asistente virtual con IA para administrar bases de datos SQL mediante " +
                         "lenguaje natural. Permite ejecutar consultas y operaciones directamente " +
                         "a través de un chatbot. Fue desarrollado usando Java con Spring Framework " +
                         "para el backend, HTML, CSS y JavaScript para el frontend y ha sido probado " +
                         "con bases de datos como MySQL y Microsoft SQL Server.",
            video: "https://www.youtube.com/embed/ZS4a4nyW8M8?start=1"
        }
    ];

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
                        <p className={styles.descriptionProject}>{project.description}</p>

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
