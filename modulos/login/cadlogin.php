<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro de usuário</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
    <section>
<!-- O formulário com método POST vai capturar informações ali digitadas e jogar para a action processalogin.php.
    lá os dados inseridos neste formulário serão processados.-->
        <form method="POST" action="processacadlogin.php">
            <figure>
                <img src="logo.png" alt="tejas" title="tejas">
            </figure>
            <p>Preencha os campos</p>
            <input type="text" class="campo" maxlength="25" name="login" placeholder="Qual será o login?" required autofocus></a> <br>
            <input type="password" class="campo" maxlength="25" name="senha" placeholder="Escolha a senha" required><br><br>
            Nível de Acesso:<br>
            <select name="nivel" placeholder="Nível de Acesso" null>
                <option>Administrador</option>   
                <option>Vendedor</option>
                <option>Arte finalista</option>
                <option>Produção</option>
                <option>Logística</option>                         
            </select><br><br>
<!-- Todo input de SUBMIT dentro de um FORM de método POST, vai encaminhar as informações digitadas à página de 
processamento que é o ACTION=-->
            <input type="submit" value="Cadastrar">
            <br><br>
            <a href="login.php">Voltar ao Login</a>
        </form>
    </section>
</body>
<footer>
</footer>
</html>