document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const feedback = document.getElementById('feedback');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const password = document.getElementById('password').value;
        const email = document.getElementById('email').value;

        if (nombre && password && email) {
            feedback.textContent = 'Usuario Registrado con Exitoo';
            feedback.className = 'feedback success';
            alert('Usuario Registrado con Exito :D')
            

            setTimeout(() => {
                window.location.href = 'home_paginw.html';
            }, 2000);

            form.reset();
        } else {
            feedback.textContent = 'Por favor, complete todos los campos.';
            feedback.className = 'feedback error';
            alert('No se pudo Registrar, llene los campos solicitados :q')
        }
    });
});