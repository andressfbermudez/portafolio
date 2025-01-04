// Redirecciona hacia index.html
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('start').onclick = function() {
        window.location.href = 'index.html';
    };
});

// Redirecciona hacia about.html
document.querySelectorAll('[data-redirect="about"]').forEach(element => {
        element.onclick = () => window.location.href = 'about.html';
});

// Redirecciona hacia mi perfil de GitHub
document.querySelectorAll('[data-redirect="github"]').forEach(element => {
        element.onclick = () => window.location.href = 'https://github.com/Andres-Bermudez';
});

// Redirecciona hacia mi perfil de LinkedIn
document.querySelectorAll('[data-redirect="linkedin"]').forEach(element => {
        element.onclick = () => window.location.href = 'https://www.linkedin.com/in/andresfbermudez-in/';
});

// Redirecciona hacia mi chat de whatsapp
document.querySelectorAll('[data-redirect="whatsapp"]').forEach(element => {
        element.onclick = () => window.location.href = 'https://wa.me/3133740300?text=Hola Andrés!';
});

// Para abrir imagenes en pantalla completa.
document.addEventListener("DOMContentLoaded", () => {
    let imagenes = document.querySelectorAll("#image");

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
