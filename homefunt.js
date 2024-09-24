function validarFormulario() {
<<<<<<< HEAD
    alert("Formulario enviado correctamente.");
}

=======
    const nombre = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('message').value;

    if (nombre.length < 3) {
        alert('El nombre debe tener al menos 3 caracteres.');
        return false;
    }
    if (!email.includes('@')) {
        alert('Por favor, ingresa un correo válido.');
        return false;
    }
    if (mensaje.trim() === '') {
        alert('El mensaje no puede estar vacío.');
        return false;
    }
    return true;
}


>>>>>>> 862a52d0286536125115e2f2f737f3f43f361e47
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
