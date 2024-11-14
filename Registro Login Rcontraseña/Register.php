<?php
include 'Conex.inc';

if (isset($_POST['NombreUser'], $_POST['Password'], $_POST['Email'], $_POST['RolUser'])) {
    $Nombre = $_POST['NombreUser'];
    $Contra = $_POST['Password'];
    $Correo = $_POST['Email'];
    $RolUser = $_POST['RolUser'];

    mysqli_set_charset($db, "utf8");

    $InsertarDatos = "INSERT INTO Taller_Int_Usuario (NombreUser, Password, Email, RolUser) VALUES ('$Nombre', '$Contra', '$Correo', '$RolUser')";

    $EjecutarInsert = mysqli_query($db, $InsertarDatos);

    if ($EjecutarInsert) {
        echo "<script>
                alert('Datos insertados correctamente.');
                setTimeout(function() {
                    window.location.href = 'index.html';
                }, 1000);
              </script>";
    } else {
        echo "Error al insertar los datos: " . mysqli_error($db);
    }
} else {
    echo "Por favor, completa todos los campos.";
}
?>
