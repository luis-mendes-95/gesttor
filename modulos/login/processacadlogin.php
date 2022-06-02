<?php
/* ESTA PÁGINA TEM COMO FUNCIONALIDADE CADASTRAR NOVOS USUÁRIOS NO BANCO DE DADOS*/

/* Aqui o include_once serve para tornar presente e válido nesta página um arquivo externo e todas suas variáveis*/
include_once('conecta_db.php');

/* a variável $login está sendo atribuída através do método POST do formulário proveniente de outra página, e assim
também senha e nível.*/
$login = $_POST["login"];
$senha = $_POST["senha"];
$nivel = $_POST["nivel"];

/* a variável $cadloginnosql está recebendo como atributo o ato de conectar ao banco de dados utilizando variáveis
já declaradas anteriormente, e cadastrar um novo usuário através de comandos sql*/
$cadloginnosql = 
    mysqli_query(
        $conecta_db,
            "INSERT INTO tb_usuarios 
                (login,senha,nivel) 
                values ('$login','$senha','$nivel')
            "
    );

/*Agora existe uma condicional, que se o ato atribuído ao $cadloginnosql for TRUE (tiver acontecido), então as ações
a seguir serão executadas, cujas em caso positivo são informar uma tela de cadastro efetuado, e em seguida direcionar
para a página de login*/
if ($cadloginnosql==true) {

    echo " <script>
    
    alert('Usuário cadastrado com sucesso.');
    window.location.href='login.php';
    
    </script> ";

} else if ($cadloginnosql==false) {

    /*Se não, informar falha no cadastro e encaminhar para a página de login*/

    echo " <script>
    
    alert('Falha no cadastro de usuário.');
    window.location.href='login.php';
    
    </script> ";
                

}

?>