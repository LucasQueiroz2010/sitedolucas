<?php
$mensagem = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $conn = new mysqli("localhost", "root", "", "site_do_lucas");

    if ($conn->connect_error) {
        die("Falha na conexão: " . $conn->connect_error);}

    $nome = $conn->real_escape_string($_POST['nome']);
    $email = $conn->real_escape_string($_POST['email']);
    $senha = password_hash($_POST['senha'], PASSWORD_DEFAULT);

    $foto_link = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/200px-Default_pfp.svg.png';
    
    if (isset($_FILES['foto']) && $_FILES['foto']['error'] == 0) {
        $diretorio_destino = "uploads/";
        if (!is_dir($diretorio_destino)) { mkdir($diretorio_destino, 0777, true); }
        
        $nome_arquivo = basename($_FILES["foto"]["name"]);
        $caminho_final = $diretorio_destino . time() . "_" . $nome_arquivo;
        
        if (move_uploaded_file($_FILES["foto"]["tmp_name"], $caminho_final)) {
            $foto_link = $caminho_final;}}

    $sql = "INSERT INTO usuarios (nome, email, senha, foto_perfil) VALUES ('$nome', '$email', '$senha', '$foto_link')";

    if ($conn->query($sql) === TRUE) {
        $mensagem = "<p class='sucesso'>Usuário cadastrado com sucesso!</p>";
    } else {
        $mensagem = "<p class='erro'>Erro: " . $conn->error . "</p>";}

    $conn->close();}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estilo.css">
	<link rel="stylesheet" href="normalize.css">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <title>Cadastro - Site do Lucas</title>
    
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet">

    <style>
        
        body {
            background-image: url('background_cadastro.jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;            
            font-family: 'Index';            
            height: 100vh;
            margin: 0;
            display: flex;
            justify_content: center;
            align-items: center;}

        .container {
            background-color: rgba(255, 255, 255, 0.9);
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            width: 350px;
            text-align: center;}

        h2 { margin-bottom: 20px; color: #333; }

        input[type="text"], input[type="email"], input[type="password"], input[type="file"] {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-sizing: border-box;}

        .senha-container {
            position: relative;}

        .btn-toggle {
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            cursor: pointer;
            font-size: 14px;
            color: #666;
            font-weight: bold;}

        button.btn-enviar {
            width: 100%;
            padding: 12px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
            margin-top: 15px;
            transition: background 0.3s;}

        button.btn-enviar:hover {
            background-color: #0056b3;}

        .sucesso { color: green; font-weight: bold; }
        .erro { color: red; font-weight: bold; }
    </style>
</head>
<body>
    <div class="container">
        <h2>Criar Conta</h2>        
        <?php echo $mensagem; ?>

        <form action="" method="POST" enctype="multipart/form-data">            
            <label style="float: left;">Qual é seu nome?</label>
            <input type="text" name="nome" placeholder="Digite seu nome" required>
            <label style="float: left;">Qual é o seu e-mail?</label>
            <input type="email" name="email" placeholder="Digite seu e-mail" required>
            <label style="float: left;">Sua Senha:</label>
            <div class="senha-container">
                <input type="password" name="senha" id="minhaSenha" placeholder="Digite sua senha" required>
                <button type="button" class="btn-toggle" onclick="alternarSenha()">👁️</button>
            </div>
            <label style="float: left;">Foto de Perfil (Opcional):</label>
            <input type="file" name="foto" accept="image/*">
            <small style="display:block; text-align:left; color:#666; font-size:12px;">Se você não enviar uma foto, será utilizado uma foto genérica.</small>
            <button type="submit" class="btn-enviar">Cadastrar.</button>
        </form>
    </div>

    <script>
        function alternarSenha() {
            var campoSenha = document.getElementById("minhaSenha");
            if (campoSenha.type === "password") {
                campoSenha.type = "text";
            } else {
                campoSenha.type = "password";}}
    </script>
</body>
</html>