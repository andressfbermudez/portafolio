// Activar indice mobile.
const mobileButtonIndex = document.getElementById("mobileIndexButton");
const index = document.getElementById("indexProjects");
const mediaQuery = window.matchMedia("(max-width: 768px)");

function toggleIndex(event) {
    if (mediaQuery.matches) {  
        index.style.display = index.style.display === "flex" ? "none" : "flex";
        event.stopPropagation();
    }
}

// Restablecer display al cambiar de tamaño
function handleScreenChange(event) {
    if (!event.matches) {  
        index.style.display = "flex";  // Al tamaño de escritorio, vuelve a flex
    } else {
        index.style.display = "none"; // En móvil, se oculta inicialmente
    }
}

mobileButtonIndex.addEventListener("click", toggleIndex);
document.body.addEventListener("click", function () {
    if (mediaQuery.matches) {
        index.style.display = "none";
    }
});

// Escucha cambios en el tamaño de pantalla
mediaQuery.addEventListener("change", handleScreenChange);

// Ejecutar al cargar la página
handleScreenChange(mediaQuery);