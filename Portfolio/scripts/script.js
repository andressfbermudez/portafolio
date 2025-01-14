// Redireccionar hacia index.html
document.querySelectorAll('[data-redirect="start"]').forEach(element => {
        element.onclick = () => window.location.href = '/index.html';
});

// Redireccionar hacia about.html
document.querySelectorAll('[data-redirect="about"]').forEach(element => {
        element.onclick = () => window.location.href = '/pages/about.html';
});

// Redireccionar hacia certifications.html
document.querySelectorAll('[data-redirect="certifications"]').forEach(element => {
        element.onclick = () => window.location.href = '/pages/certifications.html';
});

// Redireccionar hacia certifications.html
document.querySelectorAll('[data-redirect="projects"]').forEach(element => {
        element.onclick = () => window.location.href = '/pages/projects.html';
});

// Redireccionar hacia certifications.html
document.querySelectorAll('[data-redirect="education"]').forEach(element => {
        element.onclick = () => window.location.href = '/pages/education.html';
});

// Redireccionar hacia mi perfil de GitHub
document.querySelectorAll('[data-redirect="github"]').forEach(element => {
        element.onclick = () => window.location.href = 'https://github.com/Andres-Bermudez';
});

// Redireccionar hacia mi perfil de LinkedIn
document.querySelectorAll('[data-redirect="linkedin"]').forEach(element => {
        element.onclick = () => window.location.href = 'https://www.linkedin.com/in/andresfbermudez-in/';
});

// Redireccionar hacia un mensaje por correo
document.querySelectorAll('[data-redirect="outlook"]').forEach(element => {
        element.onclick = () => window.location.href = 'https://outlook.office.com/mail/deeplink/compose?to={Andres201900@outlook.com}';
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

// Activar div de contacto.
const subsectionHeaderContact = document.getElementById("subsectionHeaderContact");
const contactMenu = document.getElementById("contactMenu");

subsectionHeaderContact.addEventListener("click", function(event) {
    contactMenu.style.display = contactMenu.style.display === "flex" ? "none" : "flex";
    event.stopPropagation(); // Evita que el clic en el botón se propague al body
});

document.body.addEventListener("click", function() {
    contactMenu.style.display = "none";
});
