<?php
$host = 'localhost'; // Cambia esto si tu base de datos está en otro servidor
$usuario = 'cdarwitg2024'; // Cambia esto por tu usuario de MySQL
$contraseña = 'tu_contraseña'; // Cambia esto por tu contraseña de MySQL
$base_de_datos = 'tu_base_de_datos'; // Cambia esto por el nombre de tu base de datos

// Crear conexión
$conexion = new mysqli($host, $usuario, $contraseña, $base_de_datos);

// Comprobar conexión
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

echo "Conexión exitosa a la base de datos";

// Cerrar conexión
$conexion->close();
?>
