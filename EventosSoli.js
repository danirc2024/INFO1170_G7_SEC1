document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.aceptar-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const mision = button.getAttribute('data-mision');
            alert(`${mision} 
                
Encargo aceptado con Exito `);
        });
    });
});
