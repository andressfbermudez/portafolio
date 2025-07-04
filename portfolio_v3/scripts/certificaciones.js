// Para cargar las imagenes de los certificados.

const certificados = [
            { src: './images/certificaciones/cursoBuenasPracticasSpringSecurityAlura.png', alt: 'Certificado de Buenas Prácticas en Spring Security de Alura' },
            { src: './images/certificaciones/cursoDesarrollarApiRestJava.png', alt: 'Certificado de Desarrollo de API REST en Java' },
            { src: './images/certificaciones/cursoCrearApiSpringJava.png', alt: 'Certificado de Creación de API con Spring en Java' },
            { src: './images/certificaciones/cursoSpringPersistenciaDatos.png', alt: 'Certificado de Persistencia de Datos con Spring' },
            { src: './images/certificaciones/cursoIntroduccionSpringBootProgramacionFuncionalAlura.png', alt: 'Certificado de Introducción a Spring Boot y Programación Funcional de Alura' },
            { src: './images/certificaciones/cursoIntroduccionAdministracionServidoresPlatzi.png', alt: 'Certificado de Introducción a la Administración de Servidores de Platzi' },
            { src: './images/certificaciones/cursoConsumirAPIsAlura.png', alt: 'Certificado de Consumo de APIs de Alura' },
            { src: './images/certificaciones/cursoPersistenciaDatosPlatzi.png', alt: 'Certificado de Persistencia de Datos de Platzi' },
            { src: './images/certificaciones/cursoPythonEntornosVirtuales.png', alt: 'Certificado de Python y Entornos Virtuales' },
            { src: './images/certificaciones/cursoIntroduccionBackendPlatzi.png', alt: 'Certificado de Introducción al Backend de Platzi' },
            { src: './images/certificaciones/cursoPythonComprenhensionsPlatzi.png', alt: 'Certificado de Python Comprenhensions de Platzi' },
            { src: './images/certificaciones/cursoIntroduccionRedesPlatzi.png', alt: 'Certificado de Introducción a Redes de Platzi' },
            { src: './images/certificaciones/cursoFundamentosBasesDatosPlatzi.png', alt: 'Certificado de Fundamentos de Bases de Datos de Platzi' },
            { src: './images/certificaciones/cursoPythonPlatzi.jpeg', alt: 'Certificado de Python de Platzi' },
            { src: './images/certificaciones/cursoPOOJavaPlatzi.png', alt: 'Certificado de Programación Orientada a Objetos en Java de Platzi' },
            { src: './images/certificaciones/cursoPOOJavaCoursera.png', alt: 'Certificado de Programación Orientada a Objetos en Java de Coursera' },
            { src: './images/certificaciones/cursoKotlin.png', alt: 'Certificado de Kotlin' },
            { src: './images/certificaciones/cursoFundamentosPythonPlatzi.png', alt: 'Certificado de Fundamentos de Python de Platzi' },
            { src: './images/certificaciones/cursoEstructurasDatosJava.png', alt: 'Certificado de Estructuras de Datos en Java' },
            { src: './images/certificaciones/cursoIntroduccionJavaPlatzi.png', alt: 'Certificado de Introducción a Java de Platzi' },
            { src: './images/certificaciones/cursoLinuxSQLCoursera.png', alt: 'Certificado de Linux y SQL de Coursera' },
            { src: './images/certificaciones/cursoTerminalPlatzi.png', alt: 'Certificado de Uso de la Terminal de Platzi' },
            { src: './images/certificaciones/cursoProgramacionBasicaPlatzi.png', alt: 'Certificado de Programación Básica de Platzi' },
            { src: './images/certificaciones/cursoFundamentosIngenieriaSoftwarePlatzi.png', alt: 'Certificado de Fundamentos de Ingeniería de Software de Platzi' },
            { src: './images/certificaciones/cursoMetodologiaAgileAlura.png', alt: 'Certificado de Metodología Ágil de Alura' },
            { src: './images/certificaciones/cursoGoogleDataAnalyticsCoursera.png', alt: 'Certificado de Google Data Analytics de Coursera' },
            { src: './images/certificaciones/insigniaDigitalSenatecCoursera.png', alt: 'Insignia Digital de Senatec en Coursera' },
            { src: './images/certificaciones/carreraPreWorkPlatzi.png', alt: 'Certificado de Carrera Prework de Platzi' },
            { src: './images/certificaciones/certificadoPrincipianteProgramacionG7ONEAlura.png', alt: 'Certificado de Principiante en Programación G7ONE de Alura' },
            { src: './images/certificaciones/cursoPensamientoLogico1Platzi.png', alt: 'Certificado de Pensamiento Lógico 1 de Platzi' },
            { src: './images/certificaciones/cursoPensamientoLogico2Platzi.png', alt: 'Certificado de Pensamiento Lógico 2 de Platzi' },
            { src: './images/certificaciones/cursoPensamientoLogico3Platzi.png', alt: 'Certificado de Pensamiento Lógico 3 de Platzi' },
            { src: './images/certificaciones/certificadoLogicaProgramacionJavaScriptAlura.png', alt: 'Certificado de Lógica de Programación en JavaScript de Alura' },
            { src: './images/certificaciones/cursoLogicaProgramacion1Alura.png', alt: 'Certificado de Lógica de Programación 1 de Alura' },
            { src: './images/certificaciones/cursoLogicaProgramacion2Alura.png', alt: 'Certificado de Lógica de Programación 2 de Alura' },
            { src: './images/certificaciones/cursoHTMLAlura.png', alt: 'Certificado de HTML de Alura' },
            { src: './images/certificaciones/cursoHTMLCSS1Alura.png', alt: 'Certificado de HTML y CSS 1 de Alura' },
            { src: './images/certificaciones/cursoHTMLCSS2Alura.png', alt: 'Certificado de HTML y CSS 2 de Alura' },
            { src: './images/certificaciones/cursoEntornoDesarrolloLinuxPlatzi.png', alt: 'Certificado de Entorno de Desarrollo en Linux de Platzi' },
            { src: './images/certificaciones/cursoEntornoDesarrolloWindowsPlatzi.png', alt: 'Certificado de Entorno de Desarrollo en Windows de Platzi' },
            { src: './images/certificaciones/cursoHistoriaProgramacionPlatzi.png', alt: 'Certificado de Historia de la Programación de Platzi' },
            { src: './images/certificaciones/cursoGitHubAlura.png', alt: 'Certificado de GitHub de Alura' },
        ];

        const contenedor = document.getElementById('contenedorImagenesCertificaciones');

        certificados.forEach(cert => {
            const img = document.createElement('img');
            img.src = cert.src;
            img.alt = cert.alt;
            img.className = 'imagenCertificacion';
            img.id = 'imagen';
            contenedor.appendChild(img);
        });