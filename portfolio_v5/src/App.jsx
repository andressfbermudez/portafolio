import React, { useEffect } from 'react';
import Header from './components/Header';
import './App.css';
import {
    enableFullscreenOnImages,
    enableContactToggle,
} from './scripts/script';
import Footer from './components/Footer';

function App() {
    useEffect(() => {
        enableFullscreenOnImages();
        const contactToggle = enableContactToggle();

        return () => {
            contactToggle.cleanup();
        };
    }, []);

    return (
        <>
            <Header />

            {/* Menu desplegable de contacto */}
            <div className="contactMenu" id="contactMenu">
                <div className="developer">
                    <img className="photoProfileContact" src="/images/images/profile_2025.png" />
                        <h5 className="nameDeveloper">Andres Bermúdez</h5>
                </div>
                <h5 className="skillsDeveloper">Desarrollador Backend | Java | Spring | Bases de datos | Linux</h5>

                <div className="linksDeveloperContact">
                    <h5 className="linkDeveloperContact" data-redirect="linkedin"><img class="iconMediaContactDeveloper" data-redirect="linkedin" src="/images/icons/linkedin.png" />LinkedIn</h5>
                    <h5 className="linkDeveloperContact" data-redirect="github"><img class="iconMediaContactDeveloper" data-redirect="github" src="/images/icons/github.png" />GitHub</h5>
                </div>
            </div>

            {/* Contenido principal */}
            <main className="main">
                <div className="section1">
                    <img
                        className="photoProfile"
                        data-redirect="about"
                        src="/images/images/profile_2025.png"
                        alt="Foto de perfil"
                    />
                    <h3 className="name" data-redirect="about">Andrés Bermúdez</h3>
                    <p className="description">
                        💻 Desarrollador de software especializado en Java con Spring Boot, con experiencia en el
                        desarrollo de APIs RESTful 📡, diseño e implementación de bases de datos relacionales
                        MySQL 🐬 y PostgreSQL 🐘, uso de sistemas de control de versiones como Git y GitHub 😺,
                        y manejo de sistemas operativos Linux 🐧.
                    </p>
                    <h5 className="location">
                        <img className="locationIcon" src="/images/icons/location.png" alt="Ubicación" />
                        Bogotá, Colombia
                    </h5>

                    <div className="socialMedia">
                        <img className="socialMediaIcon" data-redirect="github" src="/images/icons/github.png" alt="GitHub" />
                        <img className="socialMediaIcon" data-redirect="linkedin" src="/images/icons/linkedin.png" alt="LinkedIn" />
                    </div>
                </div>

                <div className="section2">
                    <h2 className="titleFeatureProjects">Proyectos Destacados</h2>
                    <div className="featuredProjects">
                        <div class="project">
                            <h4 className="titleProject">Virtual Assistant DBA</h4>
                            <p className="descriptionProject">
                                Este proyecto es un asistente virtual 🤖 para administrar bases de datos relacionales
                                (SQL) mediante lenguaje natural 🌐, utilizando inteligencia artificial 🧠.
                                <br /><br />
                                El asistente permite operar sobre cualquier base de datos SQL con solo unas simples
                                configuraciones ⚙️. Tiene la capacidad de ejecutar operaciones de búsqueda de datos 🔍,
                                creación de nuevos registros ✍️, actualización 🔄 y eliminación de datos 🗑️, todo a
                                través de lenguaje natural.
                            </p>

                            <div className="video-container">
                                <iframe src="https://www.youtube.com/embed/ZS4a4nyW8M8?si=RFOmGcU4jkVHktRC&amp;start=1"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerpolicy="strict-origin-when-cross-origin"
                                    allowfullscreen>
                                </iframe>
                            </div>

                            <p className="noteProjects">Para ver más detalles, haz clic en el menu superior "Proyectos".</p>
                        </div>

                        <div className="project">
                            <h4 className="titleProject">REST API Forum Hub</h4>
                            <p className="descriptionProject">
                                Este proyecto es una API REST para un foro donde los participantes de
                                una plataforma pueden publicar sus preguntas sobre determinados temas 📝.
                                <br /><br />
                                La API fue desarrollada en Java ☕ con Spring Boot 🌿 y una base de datos
                                en PostgreSQL 🐘, y cuenta con autenticación y autorización de usuarios
                                mediante JSON Web Tokens (JWT) 🔑 para garantizar la seguridad 🔒 y
                                validación de los datos.
                                <br /><br />
                                La API proporciona herramientas para gestionar el foro de forma completa:
                                permite crear nuevos temas 🏷️, visualizar los existentes 👀, actualizar
                                o eliminar temas 🔄, generar respuestas a cualquier tema 💬 y también modificar
                                o eliminar dichas respuestas ✂️.
                                <br /><br />
                                La API cuenta con validadores ✅ que verifican si los datos que el usuario desea
                                insertar, actualizar o eliminar cumplen con las reglas del negocio 📊.
                            </p>

                            <div className="imagesProject">
                                <img className="imageProject" id="image" src="/images/projects/REST API Forum Hub/login.png" />
                                <img className="imageProject" id="image" src="/images/projects/REST API Forum Hub/createTopic.png" />
                                <img className="imageProject" id="image" src="/images/projects/REST API Forum Hub/listTopics.png" />
                            </div>

                            <h4 className="titleLinkProject">Para ver el codigo del proyecto: <a class="linkProject" href="https://github.com/Andres-Bermudez/REST-API-Forum-Hub-Challenge">Visitar proyecto.</a></h4>
                            <p className="noteProjects">Para ver más detalles, haz clic en el menu superior "Proyectos".</p>
                        </div>

                        <div className="project">
                            <h4 className="titleProject">REST API Clinica Voll</h4>
                            <p className="descriptionProject">
                                Este proyecto es una API REST diseñada para una clínica 🏥 que permite la gestión de médicos 👩‍⚕️👨‍⚕️,
                                pacientes 👩‍🦳👨‍🦱 y consultas 📝, creada como proyecto final de uno de los cursos de la especialización
                                en backend con Java ☕ y Spring Framework 🌿 de ONE - Oracle Next Education.
                                <br /><br />
                                Fue desarrollada en Java con Spring Boot 🌱, base de datos en MySQL 🐬 y Maven como gestor de dependencias ⚙️.
                                <br /><br />
                                La API cuenta con funciones de seguridad 🔒 como autenticación y autorización de usuarios usando
                                JSON Web Tokens de la librería Auth0 🔑.
                                <br /><br />
                                También cuenta con múltiples validaciones ✅ para las reglas de negocio, como verificación de fechas 📅, validez de los tokens 🔐
                                y de los datos enviados por el usuario 🧑‍💻, esto para asegurar que no se permitan datos incorrectos, incompletos o inválidos 🚫.
                            </p>

                            <div className="imagesProject">
                                <img className="imageProject" id="image" src="/images/projects/REST API Clinica Voll/createDoctor.png" />
                                <img className="imageProject" id="image" src="/images/projects/REST API Clinica Voll/listDoctor.png" />
                                <img className="imageProject" id="image" src="/images/projects/REST API Clinica Voll/documentation.png" />
                            </div>

                            <h4 className="titleLinkProject">Para ver el codigo del proyecto: <a class="linkProject" href="https://github.com/Andres-Bermudez/RESTapi-Clinica-Voll?tab=readme-ov-file#rest-api-clinica-voll">Visitar proyecto.</a></h4>
                            <p className="noteProjects">Para ver más detalles, haz clic en el menu superior "Proyectos".</p>
                        </div>

                        <div className="project">
                            <h4 className="titleProject">Market REST API</h4>
                            <p className="descriptionProject">
                                Este proyecto es una API REST para un supermercado 🛒 que facilita la gestión de clientes 👥,
                                productos 🛍️ y compras 🧾. Desarrollado en Java ☕ con Spring Boot 🌱 y base de datos en
                                PostgreSQL 🐘, utiliza módulos del framework como Spring Web MVC 🌐 y Spring Data JPA 🗃️.
                                Sigue patrones de diseño DAO y Repository 📂, adoptando una arquitectura orientada al dominio
                                para una mayor flexibilidad y escalabilidad 🔄.
                                <br /><br />
                                La API permite visualizar productos, clientes y compras registradas, además de ofrecer métodos
                                más específicos como filtrar búsquedas por ID 🔍 o buscar productos según la cantidad disponible
                                en stock 📦. También incluye las operaciones básicas de un CRUD: crear, leer, actualizar y
                                eliminar productos, clientes y compras 🔄.
                            </p>

                            <div className="imagesProject">
                                <img class="imageProject" id="image" src="/images/projects/Market REST API/listProducts.png" />
                                <img class="imageProject" id="image" src="/images/projects/Market REST API/findProductById.png" />
                                <img className="imageProject" id="image" src="/images/projects/Market REST API/schemaDB.png" />
                            </div>

                            <h4 className="titleLinkProject">Para ver el codigo del proyecto: <a class="linkProject" href="https://github.com/Andres-Bermudez/Market-API">Visitar proyecto.</a></h4>
                            <p className="noteProjects">Para ver más detalles, haz clic en el menu superior "Proyectos".</p>
                        </div>
                    </div>

                    <h1 className="titleGraduateONE">Graduado de Oracle Next Education 2025</h1>
                    <div className="ONE">
                        <div className="graduateONE">
                            <img className="imageGraduateONE" id="image" src="/images/certifications/one/certificadoGraduadoONE.png" alt="Certificado" />
                        </div>
                        <div className="processStudentONE">
                            <img className="imageCertificationONE" id="image" src="/images/certifications/one/certificadoCandidatoONE.png" alt="" />
                            <img className="imageCertificationONE" id="image" src="/images/certifications/one/certificadoEstudianteBackendONE.png" alt="" />
                            <img className="imageCertificationONE" id="image" src="/images/certifications/one/certificadoGraduadoONE.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="section3">
                    <h2 className="titleCertifications">Certificaciones</h2>
                    <div className="certifications">
                        <img className="certificationImage" id="image" src="/images/certifications/alura/certificadoFinalizacionProgramaONE.png" />
                        <img className="certificationImage" id="image" src="/images/certifications/platzi/certificadoRutaDesarrolloBackendJavaPlatzi.png" />
                        <img className="certificationImage" id="image" src="/images/certifications/platzi/cursoAvanzadoJavaPlatzi.png" />
                        <img className="certificationImage" id="image" src="/images/certifications/platzi/cursoSpringDataJPAPlatzi.png" />
                        <img className="certificationImage" id="image" src="/images/certifications/platzi/cursoJavaSpringPlatzi.png" />
                        <img className="certificationImage" id="image" src="/images/certifications/alura/certificadoFormacionJavaSpringAlura.png" />
                        <img className="certificationImage" id="image" src="/images/certifications/alura/certificadoFormacionJavaSpringBootAlura.png" />
                        <img className="certificationImage" id="image" src="/images/certifications/alura/certificadoFormacionJavaPOOAlura.png" />
                        <img className="certificationImage" id="image" src="/images/certifications/platzi/cursoFundamentosIngenieriaSoftwarePlatzi.png" />
                    </div>
                    <p className="noteCertifications">Para ver todas las certificaciones, haz clic en el menú superior "Certificaciones".</p>
                </div>
            </main>

            <Footer />
        </>
    );
}

export default App;
