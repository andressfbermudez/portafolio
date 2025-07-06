import React from 'react';
import styles from './Education.module.css';
import { useEnhancements } from "../../hooks/useEnhancements";
import { useNavigate } from "react-router-dom";

function Education() {
    useEnhancements();
    const navigate = useNavigate();

    return (
        <main className={styles.main}>
            <div className={styles.institutions}>
                {[
                    {
                        title: "Politecnico Grancolombiano",
                        img: "/images/institutions/politecnicoGrancolombiano.png",
                        alt: "Logo Politécnico",
                        desc: `En la carrera universitaria de ingeniería de software he adquirido conocimientos
                        teóricos y prácticos en áreas clave como matemáticas, informática, diseño y trabajo en grupo. 
                        He adquirido habilidades fundamentales para analizar, diseñar y optimizar sistemas y procesos, 
                        apoyándome en principios científicos y tecnológicos. Además, allí se enfatiza el desarrollo de competencias 
                        en comunicación técnica, ética profesional y gestión de proyectos, preparándome para enfrentar los desafíos 
                        y responsabilidades del ejercicio profesional.`
                    },
                    {
                        title: "Oracle Next Education",
                        img: "/images/institutions/one.png",
                        alt: "Logo ONE",
                        desc: `En el programa ONE completé una especialización en desarrollo backend con Java y Spring
                        Framework, donde aprendí a crear APIs RESTful, manipular datos JSON, utilizar HTTP y
                        aplicar programación orientada a objetos y funcional. Implementé módulos como Spring Data
                        JPA, Spring MVC y Spring Security para aplicaciones stateless, generación de JWT y gestión
                        de usuarios. También adquirí experiencia en bases de datos relacionales (MySQL, PostgreSQL)
                        y desarrollo frontend con HTML, CSS y JavaScript, incluyendo maquetación, Flexbox y conexión
                        con el backend.`
                    },
                    {
                        title: "Platzi",
                        img: "/images/institutions/platzi.png",
                        alt: "Logo Platzi",
                        desc: `En Platzi, he adquirido conocimientos específicos en desarrollo de software que me han
                        preparado para crear aplicaciones robustas y escalables, emplear las mejores prácticas
                        del sector y adaptarme a las demandas cambiantes de la industria tecnológica.
                        La combinación de teoría y práctica me ha permitido enfrentar con confianza los retos
                        del desarrollo de software y desarrollar una sólida lógica de programación.`
                    },
                    {
                        title: "Coursera",
                        img: "/images/institutions/coursera.png",
                        alt: "Logo Coursera",
                        desc: `En Coursera, he profundizado en la programación orientada a objetos con Java, lo que
                        me ha capacitado para diseñar soluciones estructuradas y eficientes. Gracias a una
                        sólida combinación de teoría y práctica, ahora puedo enfrentar los desafíos del
                        desarrollo de software con confianza y he fortalecido significativamente mi lógica
                        de programación.`
                    }
                ].map((inst, i) => (
                    <div key={i} className={styles.institution}>
                        <img className={styles.institutionImage} src={inst.img} alt={inst.alt} />
                        <div className={styles.institutionInfo}>
                            <h2 className={styles.institutionTitle}>{inst.title}</h2>
                            <p className={styles.institutionDescription}>{inst.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Education;
