const certificados = [
            { src: './images/imagesCertifications/CursoBuenasPracticasSpringSecurityAlura.png', alt: 'Certificado de Buenas Prácticas en Spring Security de Alura' },
            { src: './images/imagesCertifications/CursoDesarrollarApiRestJava.png', alt: 'Certificado de Desarrollo de API REST en Java' },
            { src: './images/imagesCertifications/CursoCrearApiSpringJava.png', alt: 'Certificado de Creación de API con Spring en Java' },
            { src: './images/imagesCertifications/CursoSpringPersistenciaDatos.png', alt: 'Certificado de Persistencia de Datos con Spring' },
            { src: './images/imagesCertifications/CursoIntroduccionSpringBootProgramacionFuncionalAlura.png', alt: 'Certificado de Introducción a Spring Boot y Programación Funcional de Alura' },
            { src: './images/imagesCertifications/CursoIntroduccionAdministracionServidoresPlatzi.png', alt: 'Certificado de Introducción a la Administración de Servidores de Platzi' },
            { src: './images/imagesCertifications/CursoConsumirAPIsAlura.png', alt: 'Certificado de Consumo de APIs de Alura' },
            { src: './images/imagesCertifications/CursoPersistenciaDatosPlatzi.png', alt: 'Certificado de Persistencia de Datos de Platzi' },
            { src: './images/imagesCertifications/CursoPythonEntornosVirtuales.png', alt: 'Certificado de Python y Entornos Virtuales' },
            { src: './images/imagesCertifications/CursoIntroduccionBackendPlatzi.png', alt: 'Certificado de Introducción al Backend de Platzi' },
            { src: './images/imagesCertifications/CursoPythonComprenhensionsPlatzi.png', alt: 'Certificado de Python Comprenhensions de Platzi' },
            { src: './images/imagesCertifications/CursoIntroduccionRedesPlatzi.png', alt: 'Certificado de Introducción a Redes de Platzi' },
            { src: './images/imagesCertifications/CursoFundamentosBasesDatosPlatzi.png', alt: 'Certificado de Fundamentos de Bases de Datos de Platzi' },
            { src: './images/imagesCertifications/CursoPythonPlatzi.jpeg', alt: 'Certificado de Python de Platzi' },
            { src: './images/imagesCertifications/CursoPOOJavaPlatzi.png', alt: 'Certificado de Programación Orientada a Objetos en Java de Platzi' },
            { src: './images/imagesCertifications/cursoPOOJavaCoursera.png', alt: 'Certificado de Programación Orientada a Objetos en Java de Coursera' },
            { src: './images/imagesCertifications/cursoKotlin.png', alt: 'Certificado de Kotlin' },
            { src: './images/imagesCertifications/cursoFundamentosPythonPlatzi.png', alt: 'Certificado de Fundamentos de Python de Platzi' },
            { src: './images/imagesCertifications/CursoEstructurasDatosJava.png', alt: 'Certificado de Estructuras de Datos en Java' },
            { src: './images/imagesCertifications/cursoIntroduccionJavaPlatzi.png', alt: 'Certificado de Introducción a Java de Platzi' },
            { src: './images/imagesCertifications/CursoLinuxSQLCoursera.png', alt: 'Certificado de Linux y SQL de Coursera' },
            { src: './images/imagesCertifications/CursoTerminalPlatzi.png', alt: 'Certificado de Uso de la Terminal de Platzi' },
            { src: './images/imagesCertifications/cursoProgramacionBasicaPlatzi.png', alt: 'Certificado de Programación Básica de Platzi' },
            { src: './images/imagesCertifications/cursoFundamentosIngenieriaSoftwarePlatzi.png', alt: 'Certificado de Fundamentos de Ingeniería de Software de Platzi' },
            { src: './images/imagesCertifications/CursoMetodologiaAgileAlura.png', alt: 'Certificado de Metodología Ágil de Alura' },
            { src: './images/imagesCertifications/cursoGoogleDataAnalyticsCoursera.png', alt: 'Certificado de Google Data Analytics de Coursera' },
            { src: './images/imagesCertifications/insigniaDigitalSenatecCoursera.png', alt: 'Insignia Digital de Senatec en Coursera' },
            { src: './images/imagesCertifications/carreraPreWorkPlatzi.png', alt: 'Certificado de Carrera Prework de Platzi' },
            { src: './images/imagesCertifications/certificadoPrincipianteProgramacionG7ONEAlura.png', alt: 'Certificado de Principiante en Programación G7ONE de Alura' },
            { src: './images/imagesCertifications/cursoPensamientoLogico1Platzi.png', alt: 'Certificado de Pensamiento Lógico 1 de Platzi' },
            { src: './images/imagesCertifications/cursoPensamientoLogico2Platzi.png', alt: 'Certificado de Pensamiento Lógico 2 de Platzi' },
            { src: './images/imagesCertifications/cursoPensamientoLogico3Platzi.png', alt: 'Certificado de Pensamiento Lógico 3 de Platzi' },
            { src: './images/imagesCertifications/certificadoLogicaProgramacionJavaScriptAlura.png', alt: 'Certificado de Lógica de Programación en JavaScript de Alura' },
            { src: './images/imagesCertifications/cursoLogicaProgramacion1Alura.png', alt: 'Certificado de Lógica de Programación 1 de Alura' },
            { src: './images/imagesCertifications/cursoLogicaProgramacion2Alura.png', alt: 'Certificado de Lógica de Programación 2 de Alura' },
            { src: './images/imagesCertifications/cursoHTMLAlura.png', alt: 'Certificado de HTML de Alura' },
            { src: './images/imagesCertifications/cursoHTMLCSS1Alura.png', alt: 'Certificado de HTML y CSS 1 de Alura' },
            { src: './images/imagesCertifications/cursoHTMLCSS2Alura.png', alt: 'Certificado de HTML y CSS 2 de Alura' },
            { src: './images/imagesCertifications/cursoEntornoDesarrolloLinuxPlatzi.png', alt: 'Certificado de Entorno de Desarrollo en Linux de Platzi' },
            { src: './images/imagesCertifications/cursoEntornoDesarrolloWindowsPlatzi.png', alt: 'Certificado de Entorno de Desarrollo en Windows de Platzi' },
            { src: './images/imagesCertifications/cursoHistoriaProgramacionPlatzi.png', alt: 'Certificado de Historia de la Programación de Platzi' },
            { src: './images/imagesCertifications/cursoGitHubAlura.png', alt: 'Certificado de GitHub de Alura' },
        ];

        const contenedor = document.getElementById('contenedorImagenesCertificaciones');

        certificados.forEach(cert => {
            const img = document.createElement('img');
            img.src = cert.src;
            img.alt = cert.alt;
            img.className = 'imagenCertificacion';
            contenedor.appendChild(img);
        });