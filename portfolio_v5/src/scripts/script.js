// Para ver las imagenes en pantalla completa
export function enableFullscreenOnImages() {
    const images = document.querySelectorAll('#image');
    images.forEach((img) => {
        img.addEventListener('click', () => {
            img.requestFullscreen?.() ||
                img.mozRequestFullScreen?.() ||
                img.webkitRequestFullscreen?.() ||
                img.msRequestFullscreen?.();
        });
    });
}


// Para activar el menu de contacto
export function enableContactToggle() {
    const contactButton = document.getElementById('subsectionHeaderContact');
    const contactMenu = document.getElementById('contactMenu');

    const toggleMenu = (event) => {
        if (contactMenu) {
            contactMenu.style.display = contactMenu.style.display === 'flex' ? 'none' : 'flex';
            event.stopPropagation();
        }
    };

    const closeMenu = () => {
        if (contactMenu) contactMenu.style.display = 'none';
    };

    if (contactButton) {
        contactButton.addEventListener('click', toggleMenu);
        document.body.addEventListener('click', closeMenu);
    }

    return {
        cleanup: () => {
            contactButton?.removeEventListener('click', toggleMenu);
            document.body.removeEventListener('click', closeMenu);
        },
    };
}
