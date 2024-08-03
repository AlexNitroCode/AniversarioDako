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

function start() {
    document.body.classList.add('fade-to-white');
    const containers = document.querySelectorAll('.container, .styled-button, h1');
    containers.forEach(container => container.classList.add('fade-to-white'));

    // Redirigir a una nueva página después de que la animación termine (2s)
    setTimeout(() => {
        window.location.href = 'page/index.html'; // Cambia la URL por la de la nueva página
    }, 4000); // Duración de la animación en milisegundos
}

// Asignar la función start al botón en la segunda página
document.querySelector('#page2 .styled-button').onclick = start;
