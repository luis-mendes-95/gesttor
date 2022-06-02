<?php

include_once('conexao.php');

$id = $_POST['id'];

$conexao = mysqli_connect("localhost","root","","gesttor");

$descricao = isset($_POST['descricao'])?($_POST['descricao']):"";
$valor = isset($_POST['valor'])?($_POST['valor']):"";  
$tipo = isset($_POST['tipo'])?($_POST['tipo']):"";
$item1 = isset($_POST['item1'])?($_POST['item1']):"";
$qtd1 = isset($_POST['qtd1'])?($_POST['qtd1']):"";
$custo1 = isset($_POST['custo1'])?($_POST['custo1']):"";
$item2 = isset($_POST['item2'])?($_POST['item2']):"";
$qtd2 = isset($_POST['qtd2'])?($_POST['qtd2']):"";
$custo2 = isset($_POST['custo2'])?($_POST['custo2']):"";
$item3 = isset($_POST['item3'])?($_POST['item3']):"";
$qtd3 = isset($_POST['qtd3'])?($_POST['qtd3']):"";
$custo3 = isset($_POST['custo3'])?($_POST['custo3']):"";
$item4 = isset($_POST['item4'])?($_POST['item4']):"";
$qtd4 = isset($_POST['qtd4'])?($_POST['qtd4']):"";
$custo4 = isset($_POST['custo4'])?($_POST['custo4']):"";
$item5 = isset($_POST['item5'])?($_POST['item5']):"";
$qtd5 = isset($_POST['qtd5'])?($_POST['qtd5']):"";
$custo5 = isset($_POST['custo5'])?($_POST['custo5']):"";
$item6 = isset($_POST['item6'])?($_POST['item6']):"";
$qtd6 = isset($_POST['qtd6'])?($_POST['qtd6']):"";
$custo6 = isset($_POST['custo6'])?($_POST['custo6']):"";
$item7 = isset($_POST['item7'])?($_POST['item7']):"";
$qtd7 = isset($_POST['qtd7'])?($_POST['qtd7']):"";
$custo7 = isset($_POST['custo7'])?($_POST['custo7']):"";
$item8 = isset($_POST['item8'])?($_POST['item8']):"";
$qtd8 = isset($_POST['qtd8'])?($_POST['qtd8']):"";
$custo8 = isset($_POST['custo8'])?($_POST['custo8']):"";
$item9 = isset($_POST['item9'])?($_POST['item9']):"";
$qtd9 = isset($_POST['qtd9'])?($_POST['qtd9']):"";
$custo9 = isset($_POST['custo9'])?($_POST['custo9']):"";
$item10 = isset($_POST['item10'])?($_POST['item10']):"";
$qtd10 = isset($_POST['qtd10'])?($_POST['qtd10']):"";
$custo10 = isset($_POST['custo10'])?($_POST['custo10']):"";
$custototal = isset($_POST['custototal'])?($_POST['custototal']):"";
$margem = isset($_POST['margem'])?($_POST['margem']):"";

// INSERINDO REGISTROS

$sql_atualizar=mysqli_query($conexao, "UPDATE tb_portfolio SET descricao='$descricao', valor='$valor', tipo='$tipo'
WHERE id='$id'");

header("Location:portfolio.php");

?>

