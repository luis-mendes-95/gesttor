<?php

$conexao = mysqli_connect("localhost","root","","gesttor");

$cpfcnpj = isset($_POST['cpfcnpj'])?($_POST['cpfcnpj']):"";
$nomerazaosocial = isset($_POST['nomerazaosocial'])?($_POST['nomerazaosocial']):"";  
$apelidofantasia = isset($_POST['apelidofantasia'])?($_POST['apelidofantasia']):"";
$cep = isset($_POST['cep'])?($_POST['cep']):"";
$endereco = isset($_POST['endereco'])?($_POST['endereco']):"";
$numero = isset($_POST['numero'])?($_POST['numero']):"";
$bairro = isset($_POST['bairro'])?($_POST['bairro']):"";
$cidade = isset($_POST['cidade'])?($_POST['cidade']):"";
$estado = isset($_POST['estado'])?($_POST['estado']):"";
$email = isset($_POST['email'])?($_POST['email']):"";
$telefone = isset($_POST['telefone'])?($_POST['telefone']):"";
$celwhats = isset($_POST['celwhats'])?($_POST['celwhats']):"";
$obs = isset($_POST['obs'])?($_POST['obs']):"";

// INSERINDO REGISTROS

$sql = "INSERT INTO tb_cpfcnpj (cpfcnpj,nomerazaosocial,
apelidofantasia,cep,endereco,numero,bairro,cidade,estado
,email,telefone,celwhats,obs) values ('$cpfcnpj', '$nomerazaosocial',
'$apelidofantasia','$cep','$endereco','$numero','$bairro','$cidade',
'$estado','$email','$telefone','$celwhats','$obs')";

$salvar = mysqli_query($conexao,$sql);

header("Location:novocadcpfcnpj.php");


?>