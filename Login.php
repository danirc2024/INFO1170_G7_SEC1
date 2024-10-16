<?php
//Busca la conexion hacia la base de datos, en este caso conexionBD
include 'conexionBD.php';

//Verifica si los datos fueron enviados mediante POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    //Recive los datos de Username y Password
    $username = $_POST['username'];
    $password = $_POST['password'];

    //Consulta para verificar si el usuario existe
    $sql = "SELECT * FROM usuarios WHERE usuario = ?";
    $stmt = $db->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $resultado = $stmt->get_result();
    //Comprueba si el usuario existe
    if ($resultado->num_rows > 0) {
        $usuario = $resultado->fetch_assoc();

        //Verifica que la contraseña sea correcta
        if (password_verify($password, $usuario['contrasena'])) {
            echo "<p>¡Inicio de sesión exitoso!</p>";
        } else {
            echo "<p>Contraseña incorrecta.</p>";
        }
        //Si el usuario no existe dira "El usuario no existe"
    } else {
        echo "<p>El usuario no existe.</p>";
    }
    //Y esto cierra la conexion
    $stmt->close();
    $db->close();
}
?>
