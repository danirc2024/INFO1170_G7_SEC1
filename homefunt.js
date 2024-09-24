function validarFormulario() {
    alert("Formulario enviado correctamente.");
}

const slider = document.querySelector('.testimonios-slider');
const izquierdaBtn = document.getElementById('izquierda-btn');
const derechaBtn = document.getElementById('derecha-btn');

izquierdaBtn.addEventListener('click', () => {
    slider.scrollBy({
        left: -300, // Desplaza 300px a la izquierda
        behavior: 'smooth'
    });
});

derechaBtn.addEventListener('click', () => {
    slider.scrollBy({
        left: 300, // Desplaza 300px a la derecha
        behavior: 'smooth'
    });
});

const formulario = document.getElementById('formulario-testimonio');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const estrellas = document.getElementById('estrellas').value;
    const mensaje = document.getElementById('mensaje').value;

    // Crear un nuevo testimonio
    const nuevoTestimonio = document.createElement('div');
    nuevoTestimonio.classList.add('testimonio');
    nuevoTestimonio.innerHTML = `
        <div class="avatar">${nombre.charAt(0).toUpperCase()}</div>
        <div class="detalles">
            <div class="estrellas">${'⭐'.repeat(estrellas)}</div>
            <p>${nombre}</p>
            <p>Hace unos momentos</p>
            <p>"${mensaje}"</p>
        </div>
    `;

    // Agregar el nuevo testimonio al slider
    slider.appendChild(nuevoTestimonio);

    // Limpiar el formulario
    formulario.reset();
});
