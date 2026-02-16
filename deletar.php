<?php
session_start();

$conn = new mysqli("localhost", "root", "", "site_do_lucas");

if (isset($_SESSION['id_usuario'])) {
    $id = $_SESSION['id_usuario'];
    $sql = "DELETE FROM usuarios WHERE id = $id";    
    if ($conn->query($sql) === TRUE) {
        session_destroy();
        echo "<script>
                alert('Sua conta foi apagada... Adeus.');
                window.location.href = 'cadastro.php';
              </script>";
    } else {
        echo "Erro ao tentar apagar: " . $conn->error;}
} else {
    header("Location: cadastro.php");}
?>