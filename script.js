// script.js

function nextPage() {
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');

    // Añadir la clase de animación de salida
    page1.classList.add('fade-out-up');

    // Esperar el tiempo de la animación de salida antes de cambiar de página
    setTimeout(() => {
        page1.style.display = 'none';
        page2.style.display = 'flex';

        // Añadir la clase de animación de entrada
        page2.classList.add('fade-in-up');
    }, 1000); // Duración de la animación de salida en milisegundos
}
