<?php

$conexao = mysqli_connect("localhost","root","","gesttor");

?>

<!DOCTYPE html>
<html lang="pt=br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>cpfcnpj</title>
    <link rel="stylesheet" href="cpfcnpj.css">
</head>
<body>
    <section class="cadastro">
        <form method="get" action="">
	        Pesquisar: <input type="text" name="filtro" class="campo" required autofocus>
	        <input type="submit" value="pesquisar" class="btn">
        </form>
        <a href="/gesttor3/modulos/cpfcnpj/novocadcpfcnpj.php"><nav><img class="novocad" src="novocad.png"></img><br>CADASTRAR NOVO</nav></a>
        <a href="/gesttor3/modulos/inicio/inicio.php"><nav><img class="novocad" src="voltar.png"></img><br>VOLTAR</nav></a>
        <table>
            <thead>
                <th colspan="3">CONSULTA DE CADASTROS</th><tr>
                <td>NOME</td>
                <td>TELEFONE</td>
                <td>CIDADE</td>
            </thead>    
            <?php

            $sql = "select * from tb_cpfcnpj";
            $consulta = mysqli_query($conexao,$sql);

            while($cadscpfcnpj = mysqli_fetch_array($consulta)){
                $id = $cadscpfcnpj[0];
                $nome = $cadscpfcnpj[1];
                $telefone = $cadscpfcnpj[10];
                $cidade = $cadscpfcnpj[8];
                
                echo "<tr>";
                echo "<td> <a href='editacpfcnpj.php?id=$id'>$nome</td><td class='linha l200'>$telefone</td><td class='linha l200'>$cidade</td>";
                echo "</tr>";
                
               

            }

            ?>
            
        </table>

    </section>
</body>
</html>