<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iniciar sessão</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
    <section>

<!-- O formulário com método POST vai capturar informações ali digitadas e jogar para a action processalogin.php.
    lá os dados inseridos neste formulário serão processados.-->
        <form method="POST" action="processalogin.php">
            <figure>
                <img src="logo.png" alt="tejas" title="tejas">
            </figure>
            <p>Login ou <a href="cadlogin.php">Cadastre-se</a></p>
            <input type="text" class="campo" maxlength="25" name="login" placeholder="Login" required autofocus> <br>
            <input type="password" class="campo" maxlength="25" name="senha" placeholder="Digite sua senha" required><br><br>
<!-- Todo input de SUBMIT dentro de um FORM de método POST, vai encaminhar as informações digitadas à página de 
processamento que é o ACTION=-->
            <input type="submit" value="Entrar">
        </form>
    </section>
</body>
<footer>
</footer>
</html>