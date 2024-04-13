<?php
function OpenCon()
{
    $dbhost = 'localhost';
    $dbuser = 'root';
    $dbpass = '1234';
    $db = 'Acessos_api';
    $conn = new mysqli($dbhost,$dbuser,$dbpass, $db) or die("Falha na conexão!  %s\n" . $conn->error);
    return $conn;
}

function CloseCon($conn)
{
    $conn -> close();
}
?>
