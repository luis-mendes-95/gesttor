<?php
/* ESTA PÁGINA TEM COMO FUNCIONALIDADE VALIDAR A EXISTÊNCIA DE UM USUÁRIO NO BANCO DE DADOS E AUTORIZAR ACESSO*/

/*Abaixo foi incluído o arquivo que tem como objetivo fazer a conexão com o banco de dados através de usuário, senha
e endereço de conexão atribuídos em variáveis*/
include_once('conecta_db.php');


/*Neste momento a variável login e senha passam a receber os valores digitados pelo usuário que tenta acessar o sistema*/
$login = $_POST['login'];
$senha = $_POST['senha'];

/*A variável $sqlcomparadb vai comparar os dados inseridos pelo usuário no formulário de login com o banco de dados,
e validar sua existência*/
$sqlcomparadb = 
    mysqli_query (
        $conecta_db,
        " SELECT * FROM tb_usuarios
            WHERE login ='$login' and senha='$senha';
        "
    );

/*A condicional diz que se o comportamento das linhas de comando do SQL após o ato acima for DIFERENTE DE ZERO, o header
vai direcionar para a página inicial do sistema*/
if(mysqli_num_rows($sqlcomparadb)!=0) {
    header('location:/gesttor3/modulos/inicio/inicio.php');
}

/*Caso não exista nenhum usuário cadastrado e as linhas de comando SQL forem = ZERO, informar falha ao acessar sistema*/
else {
    echo "Falha no login<br> <a href='/gesttor3/modulos/login/login.php'>Tentar novamente</a>";

}

?>