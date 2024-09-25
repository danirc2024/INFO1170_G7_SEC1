document.getElementById('eventos-lista').addEventListener('click', (event) => {
    if (event.target.classList.contains('aceptar-btn')) {
        const misionTitulo = event.target.getAttribute('data-mision');
        alert(`Has aceptado la misión: "${misionTitulo}". Encargo aceptado.`);
    }
});




