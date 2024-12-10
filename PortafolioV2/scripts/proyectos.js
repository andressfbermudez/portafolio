const proyectos = [
    {
        titulo: "REST API Clinica Voll",
        descripcion:   `Este proyecto es una API REST que está diseñada para una clínica y permite la gestión integral de médicos, pacientes y consultas, 
                        ofreciendo todas las operaciones comunes para la persistencia de datos.
                        <br><br>
                        Descripción del Proyecto:
                        <br><br>
                        La aplicación permite realizar todas las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) por medio de los
                        endpoints necesarios para la gestión de la información en la clínica. Esto incluye:
                        <br><br>
                        Gestión de Médicos: Permite agregar, actualizar, listar y eliminar registros de médicos.
                        <br>
                        Gestión de Pacientes: Facilita la administración de los datos de los pacientes.
                        <br>
                        Gestión de Consultas: Permite registrar y gestionar las consultas médicas realizadas.
                        <br><br>
                        Herramientas y Tecnologías Utilizadas:
                        <br><br>
                        En este proyecto, utilicé Spring Initializr para crear un proyecto con Spring Boot, aprovechando su configuración 
                        automática. Los detalles del stack tecnológico son los siguientes:
                        <br><br>
                        Lenguaje de Programación: Java
                        <br>
                        Gestor de Dependencias: Maven
                        <br>
                        Base de Datos: MySQL
                        <br><br>
                        Dependencias y Frameworks:
                        <br><br>
                        Spring Data JPA: Facilita el acceso y manipulación de la base de datos.
                        <br>
                        Spring Validation: Para validar los datos de entrada de forma sencilla.
                        <br>
                        Spring Starter Web: Permite la ejecución de aplicaciones web.
                        <br>
                        Devtools: Facilita el desarrollo en tiempo real, mostrando los cambios sin necesidad de reiniciar el servidor.
                        <br>
                        Lombok: Simplifica la generación de código repetitivo como constructores, getters y setters.
                        <br><br>
                        Este proyecto demuestra la integración de múltiples componentes de Spring Framework para desarrollar una API 
                        REST robusta y eficiente, proporcionando una solución completa para la gestión de una clínica médica.`,
        imagenes: [
            "./images/imagesProyectos/RESTapiClinicaVoll/ListDoctor.png",
            "./images/imagesProyectos/RESTapiClinicaVoll/CreateDoctor.png",
            "./images/imagesProyectos/RESTapiClinicaVoll/DeleteDoctor.png"
        ],
        link: "https://github.com/Andres-Bermudez/RESTapi-Clinica-Voll",
        botonId: "botonProyecto1",
        descripcionId: "descripcionProyecto1"
    },
    {
        titulo: "ScreenMatch Aplicacion Web",
        descripcion:   `Esta es una aplicación web diseñada para permitir a los usuarios ver, buscar y gestionar 
                        contenido multimedia, como películas y series. Los usuarios pueden interactuar con la 
                        aplicación a través de una interfaz gráfica intuitiva o mediante su API.
                        <br><br>
                        El objetivo del proyecto era desarrollar una aplicación web robusta utilizando Java y 
                        el framework Spring, crear una API RESTful y conectar una aplicación backend con una aplicación
                        frontend siguiendo las mejores prácticas de programación.
                        <br><br>
                        La aplicación fue desarrollada en Java con Spring framework y emplea PostgreSQL como 
                        base de datos.En este proyecto se hizo un énfasis especial en las buenas prácticas de programación, 
                        incluyendo:
                        <br><br>
                        Programación Orientada a Objetos (POO): Para asegurar un código modular y reutilizable.
                        <br><br>
                        Programación Funcional: Para mejorar la legibilidad y mantener un código más limpio y eficiente.
                        <br><br>
                        Patrón de Diseño MVC (Modelo-Vista-Controlador): Para separar la lógica de negocio, 
                        la interfaz de usuario y la entrada del usuario.
                        <br><br>
                        Arquitectura de APIs RESTful: Para garantizar que la aplicación sea escalable, fácil 
                        de mantener y que permita una comunicación eficiente entre los componentes del sistema.
                        <br><br>
                        Este proyecto forma parte de la especialización en Backend con Java y Spring framework del 
                        programa ONE (Oracle Next Education).`,
        imagenes: [
            "./images/imagesProyectos/ScreenMatchAplicacionWeb/inicio.png",
            "./images/imagesProyectos/ScreenMatchAplicacionWeb/informacionSerie.png",
            "./images/imagesProyectos/ScreenMatchAplicacionWeb/filtradoInformacionSerie.png"
        ],
        link: "https://github.com/Andres-Bermudez/ScreenMatch-Aplicacion-Web",
        botonId: "botonProyecto2",
        descripcionId: "descripcionProyecto2"
    },
    {
        titulo: "Generador de frases - ScreenMatch",
        descripcion:   `Esta es una API que genera frases aleatorias desarrollada en Java con Spring framework y base 
                        de datos en postgreSQL.
                        <br><br>
                        El objetivo del proyecto era crear una API e integrar una aplicacion backend con una aplicacion frontend.
                        <br><br>
                        Este proyecto hace parte de la especializacion en backend con Java y Spring framework del programa 
                        ONE(Oracle Next Education).`,
        imagenes: [
            "./images/imagesProyectos/GeneradorFrasesScreenMatch/imagen3.png",
            "./images/imagesProyectos/GeneradorFrasesScreenMatch/imagen1.png",
            "./images/imagesProyectos/GeneradorFrasesScreenMatch/imagen2.png"
        ],
        link: "https://github.com/Andres-Bermudez/Generador-Frases-ScreenMatch",
        botonId: "botonProyecto3",
        descripcionId: "descripcionProyecto3"
    },
    {
        titulo: "ScreenMatch Aplicacion de Consola",
        descripcion:   `Proyecto desarrollado en Java con Spring Boot con conexion a base de datos en PostgreSQL
                        y haciendo integracion de Inteligencia Artifical para automatizar algunas tareas.
                        Este proyecto hace parte de la especializacion en Backend con Java del programa ONE - Oracle Next Education:
                        <br><br>
                        Esta aplicación desarrollada en Java con Spring Boot permite realizar la búsqueda y gestion de series mediante 
                        la API de OMDb para obtener sus datos y haciendo integracion de la Inteligencia Artificial de Google Gemini
                        para realizar diversas tareas que requieran automatizacion como traduccion de texto.
                        <br><br>
                        Con esta herramienta, los usuarios pueden buscar series por nombre, realizar búsquedas por fecha, 
                        visualizar estadísticas de cada temporada, consultar el top 5 de episodios mejor calificados de una 
                        serie, entre otras funciones similares. Cada busqueda que realiza el usuario se almacena en una tabla de la base de datos.
                        <br><br>
                        Además, se emplean técnicas de programación funcional y se aprovecha la API de Streams de Java, 
                        permitiendo ejecutar operaciones intermedias y convertir los resultados en colecciones específicas 
                        para facilitar el filtrado y búsqueda de series.`,
        imagenes: [
            "./images/imagesProyectos/ScreenMatch/inicio.png",
            "./images/imagesProyectos/ScreenMatch/episodiosSerie.png",
            "./images/imagesProyectos/ScreenMatch/busquedaPrimeraCoincidenciaEpisodio.png"
        ],
        link: "https://github.com/Andres-Bermudez/ScreenMatch-Spring-Alura",
        botonId: "botonProyecto4",
        descripcionId: "descripcionProyecto4"
    },
    {
        titulo: "BookSmart",
        descripcion:   `Esta aplicación, desarrollada en Java con Spring Boot, permite la búsqueda y gestión 
                        de libros mediante el consumo de la API de Gutendex.
                        <br><br>
                        Entre las funcionalidades que ofrece se incluyen: la búsqueda de libros por título, la 
                        visualización de top 10 libros más descargados, el acceso a estadísticas generales de la 
                        aplicación y la posibilidad de explorar todos los libros disponibles.
                        <br><br>
                        El proyecto se ha creado utilizando Spring Initializr y emplea Maven como gestor de 
                        dependencias. Además, se ha implementado el uso de streams para manipular colecciones 
                        de datos y se ha aplicado programación funcional para asegurar las mejores prácticas 
                        en el desarrollo.
                        <br><br>
                        Este proyecto forma parte de la formación en Spring en Alura.`,
        imagenes: [
            "./images/imagesProyectos/BookSmart/inicioBookSmart.png",
            "./images/imagesProyectos/BookSmart/top10Libros.png",
            "./images/imagesProyectos/BookSmart/estadisticas.png"
        ],
        link: "https://github.com/Andres-Bermudez/BookSmart",
        botonId: "botonProyecto5",
        descripcionId: "descripcionProyecto5"
    },
    {
        titulo: "Conversor de monedas",
        descripcion:   `Este es un conversor de monedas desarrollado en Java que consume la API de ExchangeRate-API.
                        <br><br>
                        El sistema permite la conversión de monedas mediante pares: primero, el usuario ingresa el código de la moneda de 
                        origen y luego el código de la moneda a la que desea convertir el valor introducido. 
                        <br><br>
                        A continuación, se realiza una solicitud a la API, se convierte el valor dentro de la aplicación y se obtiene así el valor
                        convertido a la moneda deseada.
                        <br><br>
                        Esta aplicación ofrece la posibilidad de convertir un valor, consultar los códigos de las monedas disponibles y revisar 
                        las consultas realizadas, las cuales se almacenan en un archivo con extensión .txt en el directorio de archivos generados.`,
        imagenes: [
            "./images/imagesProyectos/ConversorMonedas/Conversion.png",
            "./images/imagesProyectos/ConversorMonedas/ConsultasRealizadas.png",
            "./images/imagesProyectos/ConversorMonedas/CodigosMonedasPais.png"
        ],
        link: "https://github.com/Andres-Bermudez/Conversor-Monedas-Challenge-ONE",
        botonId: "botonProyecto6",
        descripcionId: "descripcionProyecto6"
    },
    {
        titulo: "Agenda de Contactos",
        descripcion: `Esta es una agenda de contactos desarrollada en Java y utilizando herramientas como Maven. Esta diseñada bajo el paradigma de 
                      programación orientado a objetos, cuenta con conexion a base de datos MySQL y se aplican las cuatro(4) funciones basicas de la 
                      persistencia de datos haciendo enfasis en el modelo de capas.
                      <br><br> 
                      Entre sus funcionalidades destacan:
                      <br><br>
                      Crear Contactos: Permite añadir nuevos contactos a la agenda.
                      <br><br>
                      Visualizar tus contactos: Muestra una lista completa de todos los contactos almacenados.
                      <br><br>
                      Actualizar o modificar tus contactos: Ofrece la posibilidad de actualizar la información de un contacto existente.<br><br>
                      Eliminar contactos: Permite borrar contactos de la agenda.`,
        imagenes: [
            "./images/imagesProyectos/AgendaContactos/createContact.png",
            "./images/imagesProyectos/AgendaContactos/showContacts.png",
            "./images/imagesProyectos/AgendaContactos/deleteContact.png"
        ],
        link: "https://github.com/Andres-Bermudez/Contacts-List-MySQL",
        botonId: "botonProyecto7",
        descripcionId: "descripcionProyecto7"
    },
    {
        titulo: "Simulador Cajero Automatico",
        descripcion: `Este es un simulador de un cajero automatico que ofrece funcionalidades completas
                      como registro e inicio de sesión de usuarios, consulta de saldo, depósito y 
                      retiro de dinero.
                      <br><br>
                      Cada transacción incluye validación de datos para garantizar 
                      la seguridad. Al finalizar cada operación, se genera automáticamente una factura
                      detallada que incluye los datos del usuario, el monto retirado y el saldo disponible.`,
        imagenes: [
            "./images/imagesProyectos/CajeroAutomatico/interfazRegistroUsuario.png",
            "./images/imagesProyectos/CajeroAutomatico/interfazRetiro.png",
            "./images/imagesProyectos/CajeroAutomatico/interfazTransaccionFinalizada.png"
        ],
        link: "https://github.com/Andres-Bermudez/Sistema-Bancario-Java-Swing",
        botonId: "botonProyecto8",
        descripcionId: "descripcionProyecto8"
    },
    {
        titulo: "Encriptador de texto",
        descripcion: `Las contraseñas son información confidencial y no deben almacenarse en texto sin formato, ya que 
                      si una persona malintencionada logra acceder a la base de datos, podrá acceder a las contraseñas 
                      de todos los usuarios. Para evitar este problema, siempre debe usar algún algoritmo hash en las 
                      contraseñas antes de almacenarlas en la base de datos.
                      <br><br>
                      Siguiendo esta logica, el objetivo de este proyecto era crear un encriptador de texto diseñado 
                      para transformar texto legible en una forma codificada (texto cifrado), asegurando que no pueda 
                      ser comprendido por personas no autorizadas.
                      <br><br>
                      Con este proyecto, desarrollé habilidades en lógica de programación al crear una aplicación frontend 
                      capaz de codificar y decodificar texto. Además, logré que la aplicación fuera responsive, adaptándose 
                      adecuadamente a diferentes tamaños de pantalla.
                      <br><br>
                      El proyecto hace parte del primer desafío del programa ONE Oracle Next Education en Alura, y fue desarrollado 
                      utilizando tecnologías como HTML, CSS y JavaScript.
                      <br><br>
                      <a href="https://andres-bermudez.github.io/Encriptador-de-texto/" style="color: rgb(87, 146, 185);">Visitar Sitio.</a>`,
        imagenes: [
            "./images/imagesProyectos/Encriptador/encriptadorTexto.png",
            "./images/imagesProyectos/Encriptador/mensajeEncriptado.png",
            "./images/imagesProyectos/Encriptador/mensajeDesencriptado.png"
        ],
        link: "https://github.com/Andres-Bermudez/Encriptador-de-texto",
        botonId: "botonProyecto9",
        descripcionId: "descripcionProyecto9"
    },
    {
        titulo: "Calculadora",
        descripcion: `Esta es una calculadora que permite realizar operaciones básicas y almacenarlas 
                      temporalmente en un historial independiente para que el usuario las observe
                      mientras continúa con otras operaciones.
                      <br><br> 
                      Además, incluye la opción de cambiar 
                      el color de fondo y una sección con información sobre el desarrollador. 
                      Desarrollada en Java Swing.
                      <br><br> 
                      El objetivo del proyecto era mejorar mi lógica de programación replicando 
                      la calculadora que viene por defecto en distribuciones Linux como Debian.`,
        imagenes: [
            "./images/imagesProyectos/Calculadora/calculadora.png",
            "./images/imagesProyectos/Calculadora/calculadora2.png",
            "./images/imagesProyectos/Calculadora/CalculadoraLinux.png"
        ],
        link: "https://github.com/Andres-Bermudez/Calculadora-Java-Swing",
        botonId: "botonProyecto10",
        descripcionId: "descripcionProyecto10"
    },
    {
        titulo: "Formulario",
        descripcion: `Este formulario está diseñado para registrar datos y generar automáticamente un
                      documento con la información proporcionada por el usuario. Está desarrollado
                      utilizando Java Swing.`,
        imagenes: [
            "./images/imagesProyectos/Formulario/formulario_interfazPrincipal.png",
            "./images/imagesProyectos/Formulario/formulario_interfazLlenado.png",
            "./images/imagesProyectos/Formulario/formulario_documentoGenerado.png"
        ],
        link: "https://github.com/Andres-Bermudez/Formulario-Java-Swing",
        botonId: "botonProyecto11",
        descripcionId: "descripcionProyecto11"
    },
    {
        titulo: "Juego Web 2D",
        descripcion: `Este es un juego de lucha en 2D diseñado con HTML, CSS, y JavaScript, utilizando 
                        Canvas para ofrecer una experiencia visual interactica y dinámica. 
                        <br><br>
                        En este universo de píxeles, los jugadores pueden seleccionar entre una variedad 
                        de personajes únicos, cada uno con habilidades especiales, características distintivas, 
                        y poderes elementales que transforman cada combate en una batalla estratégica y emocionante.`,
        imagenes: [
            "./images/imagesProyectos/Juego/juegoPrincipal.png",
            "./images/imagesProyectos/Juego/juegoInterfazCanvas.png",
            "./images/imagesProyectos/Juego/juegoBatalla.png"
        ],
        link: "https://github.com/Andres-Bermudez/Formulario-Java-Swing",
        botonId: "botonProyecto12",
        descripcionId: "descripcionProyecto12"
    }
];

function generarProyectos(proyectos) {
    const container = document.getElementById('proyectos');

    proyectos.forEach(proyecto => {
        const proyectoDiv = document.createElement('div');
        proyectoDiv.classList.add('proyecto');

        proyectoDiv.innerHTML = `
            <h3 class="subtituloProyecto">${proyecto.titulo}</h3>

            <div class="divBotonDesplegarDescripcion">
                <button class="botonDescripcionProyecto" id="${proyecto.botonId}">Ver descripción del proyecto
                    <img src="./images/iconDocumento.png" width="15" height="15" style="padding: 7px;">
                </button>
            </div>

            <p class="descripcionProyecto" id="${proyecto.descripcionId}">
                ${proyecto.descripcion}
            </p>

            <div class="contenedorImagenesProyecto">
                ${proyecto.imagenes.map(src => `<img class="imagenProyecto" id="imagen" src="${src}">`).join('')}
            </div>

            <a class="linkProyectoGitHub" href="${proyecto.link}">
                <img src="./images/iconGitHub.png" width="33" height="18">Ver proyecto en GitHub
            </a>
        `;

        container.appendChild(proyectoDiv);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    generarProyectos(proyectos);
});
