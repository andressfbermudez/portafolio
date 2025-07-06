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
