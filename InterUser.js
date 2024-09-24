document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const feedback = document.getElementById('feedback');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const password = document.getElementById('password').value;
        const email = document.getElementById('email').value;

        if (nombre && password && email) {
            feedback.textContent = 'Usuario Registrado con Exito :)';
            feedback.className = 'feedback success';
            form.reset(); // Reiniciar el formulario
        } else {
            feedback.textContent = 'Por favor, complete todos los campos.';
            feedback.className = 'feedback error';
        }
    });
});
