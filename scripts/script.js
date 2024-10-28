// Selecciona todas las imágenes con clase 'imagen'
let imagenes = document.querySelectorAll("#imagen");

// Verifica que haya imágenes seleccionadas
if (imagenes.length > 0) {
    // API para abrir imágenes en pantalla completa
    imagenes.forEach(img => {
        img.addEventListener("click", function() {
            // Usa el método de pantalla completa compatible en el navegador
            img.requestFullscreen?.() ||
            img.mozRequestFullScreen?.() ||
            img.webkitRequestFullscreen?.() ||
            img.msRequestFullscreen?.();
        });
    });
} else {
    console.warn("No se encontraron elementos con la clase 'imagen'.");
}
