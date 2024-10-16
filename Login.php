<?php
// Incluye el archivo de conexión a la base de datos
include 'conexion.php';

// Verifica si se recibieron los datos mediante POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Consulta para verificar si el usuario existe
    $sql = "SELECT * FROM usuarios WHERE usuario = ?";
    $stmt = $db->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $resultado = $stmt->get_result();

    if ($resultado->num_rows > 0) {
        $usuario = $resultado->fetch_assoc();

        // Verifica si la contraseña es correcta
        if (password_verify($password, $usuario['contrasena'])) {
            echo "<p>¡Inicio de sesión exitoso!</p>";
        } else {
            echo "<p>Contraseña incorrecta.</p>";
        }
    } else {
        echo "<p>El usuario no existe.</p>";
    }

    $stmt->close();
    $db->close();
}
?>
