<?php
session_start();

$conn = new mysqli("localhost", "root", "", "site_do_lucas");
if ($conn->connect_error) { die("Conexão falhou: " . $conn->connect_error); }

$usuario = null;
if (isset($_SESSION['id_usuario'])) {
    $id = $_SESSION['id_usuario'];
    $sql = "SELECT * FROM usuarios WHERE id = $id";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        $usuario = $result->fetch_assoc();}}

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['enviar_feedback'])) {
    $_SESSION['feedback_concluido'] = true;}

if (isset($_POST['refazer_feedback'])) {
    unset($_SESSION['feedback_concluido']);}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Site do Lucas</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
    
    <style>
        .top-right-menu {
            position: absolute;
            top: 20px;
            right: 20px;
            z-index: 1000;
            display: flex;
            align-items: center;
            gap: 10px;}

        .btn-cadastre-se {
            background-color: #ffffff;
            color: #333;
            padding: 10px 20px;
            border-radius: 5px;
            text-decoration: none;
            font-weight: bold;
            box-shadow: 0px 0px 10px rgba(0,0,0,0.5);}

        .user-trigger {
            cursor: pointer;
            color: white;
            font-weight: bold;
            display: flex;
            align-items: center;
            gap: 10px;
            background: rgba(0,0,0,0.5);
            padding: 5px 15px;
            border-radius: 30px;}

        .user-pfp {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid white;}

        .custom-dropdown {
            display: none;
            position: absolute;
            top: 60px;
            right: 0;
            background-color: white;
            flex-direction: column;
            width: 200px;
            border-radius: 5px;
            overflow: hidden;
            box-shadow: 0px 5px 15px rgba(0,0,0,0.5);}

        .custom-dropdown button, .custom-dropdown a {
            display: block;
            width: 100%;
            padding: 12px;
            text-align: center;
            border: none;
            cursor: pointer;
            text-decoration: none;
            font-weight: bold;
            font-family: Arial, sans-serif;}

        .btn-amarelo { background-color: #FFFF00; color: black; }
        .btn-azul { background-color: #ADD8E6; color: black; }
        .btn-vermelho { background-color: #8B0000; color: black; }
        .btn-amarelo:hover { filter: brightness(0.9); }
        .btn-azul:hover { filter: brightness(0.9); }
        .btn-vermelho:hover { color: white; }

        .modal-overlay {
            display: none;
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.9);
            z-index: 2000;
            justify-content: center;
            align-items: center;
            flex-direction: column;}

        .modal-box {
            background: #222;
            padding: 30px;
            border-radius: 10px;
            text-align: center;
            border: 1px solid #555;
            color: white;}
        
        .sim-macabro {
            color: #ff0000;
            font-family: "Courier New", monospace;
            font-size: 24px;
            cursor: pointer;
            background: none;
            border: none;
            text-decoration: underline;}
        .sim-macabro:hover { text-shadow: 0 0 5px red; }

        .nao-confortante {
            color: #90EE90;
            font-family: "Arial", sans-serif;
            font-size: 24px;
            cursor: pointer;
            background: none;
            border: none;
            font-weight: bold;
            margin-left: 20px;}
        .nao-confortante:hover { transform: scale(1.1); }
        .feedback-msg { color: #90EE90; font-size: 1.5rem; font-weight: bold; margin-bottom: 20px; display:block; text-align:center;}
        .btn-refazer { background-color: #006400; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; }

        body {
            background-image: url('imagens/background_cadastro.jpg');
            background-size: cover;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;}
        form {
            background: rgba(0,0,0,0.6);
            padding: 30px;
            border-radius: 15px;
            max-width: 500px;
            width: 100%;}
    </style>
</head>
<body>

    <div class="top-right-menu">
        <?php if ($usuario): ?>
            <div class="user-trigger" onclick="toggleMenu()">
                <span><?php echo $usuario['nome']; ?></span>
                <img src="<?php echo !empty($usuario['foto_perfil']) ? $usuario['foto_perfil'] : 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/200px-Default_pfp.svg.png'; ?>" class="user-pfp">
            </div>
            <div class="custom-dropdown" id="menuDropdown">
                <a href="editar_conta.php" class="btn-amarelo">Editar minha conta</a>
                
                <a href="cadastro.php" class="btn-azul">Trocar de conta</a>
                
                <button onclick="abrirModal()" class="btn-vermelho">Sair...</button>
            </div>

        <?php else: ?>
            <a href="cadastro.php" class="btn-cadastre-se">Cadastre-se / Login</a>
        <?php endif; ?>
    </div>

    <div class="modal-overlay" id="modalExclusao">
        <div class="modal-box">
            <h2>Deseja apagar sua existência?</h2>
            <p>Todos os seus dados serão perdidos.</p>
            <br>
            <form action="deletar.php" method="POST" style="background:none; border:none; padding:0;">
                <button type="submit" class="sim-macabro">sim...</button>
                <button type="button" onclick="fecharModal()" class="nao-confortante">Não!</button>
            </form>
        </div>
    </div>


    <div style="text-align:center; margin-bottom: 20px; color: white;">
        <h1 style="font-family: Index;">Página principal</h1>
    </div>

    <?php if (isset($_SESSION['feedback_concluido'])): ?>
        
        <div style="text-align: center; background: rgba(0,0,0,0.8); padding: 40px; border-radius: 15px;">
            <span class="feedback-msg">Obrigado pelo feedback!</span>
            <form method="POST">
                <button type="submit" name="refazer_feedback" class="btn-refazer">Refazer feedback</button>
            </form>
        </div>

    <?php else: ?>

        <form method="POST" action="">
            <input type="hidden" name="enviar_feedback" value="1">

            <fieldset>
                <legend class="esquerda text-info">Informações:</legend>

                <div class="form-group">
                    <label style="font-family: Index;" for="nome" class="esquerda text-info">Nome:ﾠ</label><br>
                    <input style="font-family: Index;" 
                           value="<?php echo $usuario ? $usuario['nome'] : ''; ?>"
                           type="text" name="nome" id="nome" placeholder="Insira seu nome!" class="this nome form-control-lg centralizar" required <?php echo $usuario ? '' : 'autofocus'; ?>>
                </div>

            </fieldset>

            <fieldset>
                <div>
                    <span onclick="console.log('Insira seu comentário')" class="text-info centralizar input-group-text">Comentários 💬</span>
                </div>
                <div class="input-group">
                    <textarea class="form-control" id="Comentários" rows="4"></textarea>
                </div>
            </fieldset>

            <fieldset>
                <div class="form-group">
                    <label style="font-family: Index;" for="Lembrar" class="text-info">Lembrar de mim?</label required>
                    <select class="form-control centralizar" id="Lembrar" name="Lembrar">
                        <option style="font-family: Index;" class="text-dark">...</option>
                        <option style="font-family: Index;" class="text-success">Sim!</option>
                        <option style="font-family: Index;" class="text-danger">Não...</option>
                    </select>
                </div>

                <div class="text-info">Esse site é bem feito?</div>
                <div class="form-group">
                    <label class="text-success" style="font-family: Index;" id="range">Satisfação de 0-10</label><br>
                    
                    <div class="range-wrap">
                        <input style="cursor: move;" class="text-info custom-range" type="range" min="0" max="10" value="5" id="myRange" oninput="document.getElementById('rangeValue').innerText = this.value">
                        <span class="range-value text-white" id="rangeValue">5</span>
                    </div>
                </div>
            </fieldset>
            
            <input style="cursor: help;" class="submit BIGSHOT btn btn-lg btn-primary" type="submit" value="Enviar" id="transicaolink">
        </form>

    <?php endif; ?>

    <script>
        function toggleMenu() {
            var menu = document.getElementById("menuDropdown");
            if (menu.style.display === "flex") {
                menu.style.display = "none";
            } else {
                menu.style.display = "flex";}}

        function abrirModal() {
            document.getElementById("menuDropdown").style.display = "none";
            document.getElementById("modalExclusao").style.display = "flex";}

        function fecharModal() {
            document.getElementById("modalExclusao").style.display = "none";}
    </script>

</body>
</html>