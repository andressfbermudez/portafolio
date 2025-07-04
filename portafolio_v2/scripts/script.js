// Para abrir imagenes en pantalla completa.
document.addEventListener("DOMContentLoaded", () => {
    // Selecciona todas las imágenes con el id 'imagen'
    let imagenes = document.querySelectorAll("#imagen");

    if (imagenes.length > 0) {
        imagenes.forEach(img => {
            img.addEventListener("click", function() {
                img.requestFullscreen?.() ||
                img.mozRequestFullScreen?.() ||
                img.webkitRequestFullscreen?.() ||
                img.msRequestFullscreen?.();
            });
        });
    } else {
        console.warn("No se encontraron elementos con la clase 'imagen'.");
    }
});


// Para desplegar la descripcion de los proyectos.
document.addEventListener("DOMContentLoaded", function() {
    // Define los IDs de los botones y sus descripciones correspondientes
    var proyectos = [
        { botonId: "botonProyecto1", descripcionId: "descripcionProyecto1" },
        { botonId: "botonProyecto2", descripcionId: "descripcionProyecto2" },
        { botonId: "botonProyecto3", descripcionId: "descripcionProyecto3" },
        { botonId: "botonProyecto4", descripcionId: "descripcionProyecto4" },
        { botonId: "botonProyecto5", descripcionId: "descripcionProyecto5" },
        { botonId: "botonProyecto6", descripcionId: "descripcionProyecto6" },
        { botonId: "botonProyecto7", descripcionId: "descripcionProyecto7" },
        { botonId: "botonProyecto8", descripcionId: "descripcionProyecto8" },
        { botonId: "botonProyecto9", descripcionId: "descripcionProyecto9" },
        { botonId: "botonProyecto10", descripcionId: "descripcionProyecto10" },
        { botonId: "botonProyecto11", descripcionId: "descripcionProyecto11" },
        { botonId: "botonProyecto12", descripcionId: "descripcionProyecto12" }
    ];

    // Itera sobre los proyectos y añade los event listeners
    proyectos.forEach(function(proyecto) {
        var boton = document.getElementById(proyecto.botonId);
        var descripcion = document.getElementById(proyecto.descripcionId);

        if (boton && descripcion) { // Verifica que ambos elementos existan
            boton.addEventListener("click", function() {
                desplegarDescripcionProyecto(descripcion);
            });
        }
    });
});

// Define la función que se ejecutará al presionar el botón
function desplegarDescripcionProyecto(descripcionProyecto) {
    if (descripcionProyecto.classList.contains("mostrar")) {
        // Si ya tiene la clase "mostrar", la eliminamos para ocultar con animación inversa
        descripcionProyecto.classList.remove("mostrar");
        setTimeout(() => {
            descripcionProyecto.style.display = "none";
        }, 450); // El tiempo debe coincidir con la duración de la transición
    } else {
        // Mostrar con animación
        descripcionProyecto.style.display = "flex";
        setTimeout(() => {
            descripcionProyecto.classList.add("mostrar");
        }, 10); // Pequeña demora para permitir que display: flex se aplique antes de la animación
    }
}

// Para mantener el menu de navegacion fijo al hacer scroll.
const nav = document.getElementById('menuNavegacionPC');
const navTop = nav.offsetTop;

window.addEventListener('scroll', () => {
    if (window.scrollY >= navTop) {
        nav.classList.add('fixed');
    } else {
        nav.classList.remove('fixed');
    }
});
