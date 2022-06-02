<?php

$conexao = mysqli_connect("localhost","root","","gesttor");

?>

<!DOCTYPE html>
<html lang="pt=br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
    <link rel="stylesheet" href="portfolio.css">
</head>
<body>
    <section class="cadastro">
        <form method="get" action="">
	        Pesquisar: <input type="text" name="filtro" class="campo" required autofocus>
	        <input type="submit" value="pesquisar" class="btn">
        </form>
        <a href="/gesttor3/modulos/portfolio/novocadportfolio.php"><nav><img class="novocad" src="novocad.png"></img><br>CADASTRAR NOVO</nav></a>
        <a href="/gesttor3/modulos/inicio/inicio.php"><nav><img class="novocad" src="voltar.png"></img><br>VOLTAR</nav></a>
        <table>
            <thead>
                <th colspan="3">CONSULTA DE ITENS DO PORTFOLIO</th><tr>
                <td>DESCRIÇÃO</td>
                <td>VALOR</td>
                <td>MARGEM</td>
            </thead>    
            <?php

            $sql = "select * from tb_portfolio";
            $consulta = mysqli_query($conexao,$sql);

            while($dados = mysqli_fetch_array($consulta)){
                $id = $dados[0];
                $descricao = $dados[1];
                $valor = $dados[2];
                $margem = $dados[35];
                
                echo "<tr>";
                echo "<td> <a href='editaportfolio.php?id=$id'>$descricao</td><td class='linha l200'>$valor</td><td class='linha l200'>$margem</td>";
                echo "</tr>";
                
               

            }

            ?>
            
        </table>

    </section>
</body>
</html>