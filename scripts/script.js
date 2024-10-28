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
