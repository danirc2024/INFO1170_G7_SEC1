<?php
// Incluir archivo de conexión a la base de datos
include 'conexion.php';

// Verifica si el formulario fue enviado
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Encripta la contraseña
    $passwordHash = password_hash($password, PASSWORD_BCRYPT);

    // Preparar la consulta SQL
    $sql = "INSERT INTO usuarios (usuario, email, contrasena) VALUES (?, ?, ?)";
    $stmt = $db->prepare($sql);
    $stmt->bind_param("sss", $username, $email, $passwordHash);

    // Ejecuta la consulta y verifica el resultado
    if ($stmt->execute()) {
        echo "Registro exitoso. ¡Bienvenido, $username!";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Cierra la conexión
    $stmt->close();
    $db->close();
}
?>
