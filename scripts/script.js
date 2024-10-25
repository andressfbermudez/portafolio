let menuHamburguesa = document.getElementById("menuHamburguesa");
let menuNavegacionMovil = document.getElementById("menuNavegacionMovil");
let cerrarMenu = document.getElementById("cerrarMenu");
let imagen = document.querySelectorAll("#imagen");
let seccionInicioMovil = document.getElementById("seccionInicioMovil");
let seccionSobreMiMovil = document.getElementById("seccionSobreMiMovil");
let seccionProyectosMovil = document.getElementById("seccionProyectosMovil");                 
let seccionCertificacionesMovil = document.getElementById("seccionCertificacionesMovil");

function desplegarMenuNavegacion() {
    menuNavegacionMovil.style.display = "flex";
}

function cerrarMenuNavegacion() {
    menuNavegacionMovil.style.display = "none";
}

seccionInicioMovil.addEventListener("click", cerrarMenuNavegacion);
seccionSobreMiMovil.addEventListener("click", cerrarMenuNavegacion);
seccionProyectosMovil.addEventListener("click", cerrarMenuNavegacion);                
seccionCertificacionesMovil.addEventListener("click", cerrarMenuNavegacion);
menuHamburguesa.addEventListener("click", desplegarMenuNavegacion);
cerrarMenu.addEventListener("click", cerrarMenuNavegacion);

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