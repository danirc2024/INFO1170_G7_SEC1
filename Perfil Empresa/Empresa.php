<?php
// Incluir archivo de conexión a la base de datos
include 'Conex.inc';

// Verifica si el formulario fue enviado
if (isset($_POST['NombreEmpresa'], $_POST['CorreoEmpresa'], $_POST['Monto'], $_POST['Clave'])) {
    $nombreEmpresa = $_POST['NombreEmpresa'];
    $correoEmpresa = $_POST['CorreoEmpresa'];
    $monto = $_POST['Monto'];
    $clave = $_POST['Clave'];

    mysqli_set_charset($db, "utf8");

    $insertarDatos = "INSERT INTO Taller_Int_Empresas_Asociadas (nombre, correo, monto, clave) 
                      VALUES ('$nombreEmpresa', '$correoEmpresa', '$monto', '$clave')";

    $EjecutarInsert = mysqli_query($db, $InsertarDatos);

    
    if ($EjecutarInsert) {
        echo "<script>
                alert('Monto Enviado Correctamente, Muchas Gracias.');
              </script>";
    } else {
        echo "Error al insertar los datos: " . mysqli_error($db);
    }
} else {
    echo "Por favor, completa todos los campos.";
}

?>
