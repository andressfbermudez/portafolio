import React from 'react';
import styles from './Projects.module.css';
import { useEnhancements } from "../../hooks/useEnhancements";

function Projects() {
    useEnhancements();

    const projects = [
        {
            id: "virtualassistantdba",
            title: "Virtual Assistant DBA",
            description: "Asistente virtual para administrar bases de datos SQL mediante lenguaje natural e IA local.",
            video: "https://www.youtube.com/embed/ZS4a4nyW8M8?start=1"
        },
        {
            id: "forumhub",
            title: "REST API Forum Hub",
            description: "API RESTful de foros construida con Java, Spring Boot y autenticación JWT segura.",
            video: "https://www.youtube.com/embed/k1-pYB9MgoA"
        },
        {
            id: "screenmatchweb",
            title: "ScreenMatch Aplicación Web",
            description: "App web para buscar y guardar películas favoritas conectada a la API de OMDb.",
            video: "https://www.youtube.com/embed/n8_R6lDFeIQ"
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

                        <div className={styles.videoContainer}>
                            <iframe
                                src={project.video}
                                title={`Demo ${project.title}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                        </div>
                    </article>
                ))}
            </section>
        </main>
    );
}

export default Projects;
