
<?php

session_start()

include 'Conex.inc';

$correo = $_POST['correo'];
$contra = $_POST['password'];

$validar = mysqli_query($conexion, "SELECT * FROM Taller_Int_Usuario where correo='$correo' and $contra='password'");

if (mysqli_num_rows($validad) > 0) {
    $_SESSION['usuario'] = $nombre;
    header("location: ../VentanaPerfil");
else{
    echo '
        <script>
            alert("Usuario no Registrado");
            window.location = "../Registro Login"
        </script>
        '
}
}


?>