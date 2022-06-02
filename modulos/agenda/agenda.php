<?php
$conexao = mysqli_connect("localhost","root","","cpfcnpj");
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Novo cadastro de CPF / CNPJ</title>
    <link rel="stylesheet" href="agenda.css">
</head>
<body>
<section class="cadastro">
        <table>
            <thead>
                <th colspan="2">AGENDA</th><tr>
                <td>CLIENTE</td>
                <td>DESCRIÇÃO</td>
            </thead>    
            <?php

            $sql = "select * from cpfcnpj";
            $consulta = mysqli_query($conexao,$sql);

            while($cadscpfcnpj = mysqli_fetch_array($consulta)){
                $id = $cadscpfcnpj[0];
                $nome = $cadscpfcnpj[2];
                $telefone = $cadscpfcnpj[11];
                $cidade = $cadscpfcnpj[8];
                
                echo "<tr>";
                echo "<td> <a href='atualizacpfcnpj.php?id=$id'>$nome</td><td>'Descrição do agendamento'</td>";
                echo "</tr>";
            }
            ?>           
        </table>
    </section> 
    <section>
        <form method="post" action="processa.php">
            <fieldset class="cadastro">
                <legend class="titulolegenda">Cadastrar compromisso</legend>
                <label class="campos">Cliente</label>
                <input type="num" name="cliente"></input>                         
                <label class="campoobs">Descrição</label>
                <textarea class="campoobs" type="text" name="descricao"></textarea>
                <input type="submit" value="salvar" class="btn">                                                                                               
            </fieldset>
        </form>
    </section>
</body>
</html>