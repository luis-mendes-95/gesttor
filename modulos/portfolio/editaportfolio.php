<?php
/*Incluído arquivo externo com Variáveis de ligação com o banco de dados*/ 
include_once('conexao.php');

/*Na página anterior a esta, foi clicado refereciando um id para editar, neste momento uma variável está
sendo declarada para capturar este valor */
$id= $_GET['id'];

/*Está sendo declarada uma variável $sql_consulta recebendo como ação a conexão com o banco de dados e inserindo lá
um código SQL para selecionar todos os dados da tabela tb_cpfcnpj onde o id seja igual ao $id cuja variável teve como
valor declarado o número do id*/ 
$sql_consulta = mysqli_query($conexao, "SELECT * FROM tb_portfolio WHERE id='$id'");

/*a variável $resultados tem nela o array que foi gerado do código abaixo, o resultado da $sql_consulta foi 
arranjado em um array para ficar ordenadamente acessível */
$resultados=mysqli_fetch_array($sql_consulta);

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="novocadportfolio.css">
    <title>Portfolio</title>
</head>
<body>
    <section>
        <form method="post" action="processaeditportfolio.php">
            <a href="/gesttor3/modulos/portfolio/portfolio.php"><nav><img class="novocad" src="voltar.png"></img><br>VOLTAR À CONSULTA</nav></a>
            <a href="/gesttor3/modulos/inicio/inicio.php"><nav><img class="novocad" src="voltar.png"></img><br>VOLTAR AO INÍCIO</nav></a><br>
            <h1>ITEM DO PORTFOLIO</h1><br>
            <label for="descricao">DESCRIÇÃO DO ITEM</label><br>
            <input class="descricao" type="text" name="descricao" value='<?=$resultados[1]?>'><br><br>
            <label for="valor">VALOR</label><br>
            <input class="valor" type="text" name="valor" value='<?=$resultados[2]?>'><br><br>
            <label for="tipo">TIPO DE ITEM</label><br>
            <select name="tipo" id="" value='<?=$resultados[3]?>'>
                <option value="">Produto</option><option value="">Serviço</option>
            </select><br><br><br>
            <h2>ITENS QUE COMPÕEM</h2><br>
            <label for="">ITEM #1</label>
            <input class="material" type="text" name="item1" value='<?=$resultados[4]?>'><br>
            <label for="">QTD</label>
            <input class="qtd" type="text" name="qtd1" value='<?=$resultados[5]?>'>
            <label for="">CUSTO</label>
            <input class="custo" type="text" name="custo1" value='<?=$resultados[6]?>'><br><br>
            <label for="">ITEM #2</label><br>
            <input class="material" type="text" name="item2" value='<?=$resultados[7]?>'><br>
            <label for="">QTD</label>
            <input class="qtd" type="text" name="qtd2" value='<?=$resultados[8]?>'>
            <label for="">CUSTO</label>
            <input class="custo" type="text" name="custo2" value='<?=$resultados[9]?>'><br><br>
            <label for="">ITEM #3</label><br>
            <input class="material" type="text" name="item3" value='<?=$resultados[10]?>'><br>
            <label for="">QTD</label>
            <input class="qtd" type="text" name="qtd3" value='<?=$resultados[11]?>'>
            <label for="">CUSTO</label>
            <input class="custo" type="text" name="custo3" value='<?=$resultados[12]?>'><br><br>
            <label for="">ITEM #4</label><br>
            <input class="material" type="text" name="item4" value='<?=$resultados[13]?>'><br>
            <label for="">QTD</label>
            <input class="qtd" type="text" name="qtd4" value='<?=$resultados[14]?>'>
            <label for="">CUSTO</label>
            <input class="custo" type="text" name="custo4" value='<?=$resultados[15]?>'><br><br>
            <label for="">ITEM #5</label><br>
            <input class="material" type="text" name="item5" value='<?=$resultados[16]?>'><br>
            <label for="">QTD</label>
            <input class="qtd" type="text" name="qtd5" value='<?=$resultados[17]?>'>
            <label for="">CUSTO</label>
            <input class="custo" type="text" name="custo5" value='<?=$resultados[18]?>'><br><br>
            <label for="">ITEM #6</label>
            <input class="material" type="text" name="item6" value='<?=$resultados[19]?>'><br>
            <label for="">QTD</label>
            <input class="qtd" type="text" name="qtd6" value='<?=$resultados[20]?>'>
            <label for="">CUSTO</label>
            <input class="custo" type="text" name="custo6" value='<?=$resultados[21]?>'><br><br>
            <label for="">ITEM #7</label><br>
            <input class="material" type="text" name="item7" value='<?=$resultados[22]?>'><br>
            <label for="">QTD</label>
            <input class="qtd" type="text" name="qtd7" value='<?=$resultados[23]?>'>
            <label for="">CUSTO</label>
            <input class="custo" type="text" name="custo7" value='<?=$resultados[24]?>'><br><br>
            <label for="">ITEM #8</label><br>
            <input class="material" type="text" name="item8" value='<?=$resultados[25]?>'><br>
            <label for="">QTD</label>
            <input class="qtd" type="text" name="qtd8" value='<?=$resultados[26]?>'>
            <label for="">CUSTO</label>
            <input class="custo" type="text" name="custo8" value='<?=$resultados[27]?>'><br><br>
            <label for="">ITEM #9</label><br>
            <input class="material" type="text" name="item9" value='<?=$resultados[28]?>'><br>
            <label for="">QTD</label>
            <input class="qtd" type="text" name="qtd9" value='<?=$resultados[29]?>'>
            <label for="">CUSTO</label>
            <input class="custo" type="text" name="custo9" value='<?=$resultados[30]?>'><br><br>
            <label for="">ITEM #10</label><br>
            <input class="material" type="text" name="item10" value='<?=$resultados[31]?>'><br>
            <label for="">QTD</label>
            <input class="qtd" type="text" name="qtd10" value='<?=$resultados[32]?>'>
            <label for="">CUSTO</label>
            <input class="custo" type="text" name="custo10" value='<?=$resultados[33]?>'><br><br><br>
            <label for="custo">CUSTO</label><br>
            <input class="valor" type="text" name="custototal" value='<?=$resultados[34]?>'><br><br>
            <label for="margem">MARGEM</label><br>
            <input class="valor" type="text" name="margem" value='<?=$resultados[35]?>'><br><br>
            <input type="submit" value="salvar" class="btn">  
        </form>
    </section>
</body>
</html>