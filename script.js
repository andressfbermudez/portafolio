let menuHamburguesa = document.getElementById("menuHamburguesa");
let menuNavegacion = document.getElementById("menuNavegacion");
let cerrarMenu = document.getElementById("cerrarMenu");
let seccionInicio = document.getElementById("seccionInicio");
let seccionSobreMi = document.getElementById("seccionSobreMi");
let seccionProyectos = document.getElementById("seccionProyectos");
let seccionCertificaciones = document.getElementById("seccionCertificaciones");
let imagen = document.querySelectorAll("#imagen");

function desplegarMenuNavegacion() {
    menuNavegacion.style.display = "flex";
}

function cerrarMenuNavegacion() {
    menuNavegacion.style.display = "none";
}

menuHamburguesa.addEventListener("click", desplegarMenuNavegacion);
cerrarMenu.addEventListener("click", cerrarMenuNavegacion)
seccionInicio.addEventListener("click", cerrarMenuNavegacion);
seccionSobreMi.addEventListener("click", cerrarMenuNavegacion);
seccionProyectos.addEventListener("click", cerrarMenuNavegacion);
seccionCertificaciones.addEventListener("click", cerrarMenuNavegacion);

// API para abrir imagenes en pantalla completa
imagen.forEach(img => {
    img.addEventListener("click", function() {

        if (img.requestFullscreen) {
            img.requestFullscreen();

        } else if (img.mozRequestFullScreen) { // Firefox
            img.mozRequestFullScreen();

        } else if (img.webkitRequestFullscreen) { // Chrome, Safari and Opera
            img.webkitRequestFullscreen();

        } else if (img.msRequestFullscreen) { // IE/Edge
            img.msRequestFullscreen();
        }
    });
});