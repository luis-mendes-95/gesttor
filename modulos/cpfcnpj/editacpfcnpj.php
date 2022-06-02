<?php
/*Incluído arquivo externo com Variáveis de ligação com o banco de dados*/ 
include_once('conexao.php');

/*Na página anterior a esta, foi clicado refereciando um id para editar, neste momento uma variável está
sendo declarada para capturar este valor */
$id= $_GET['id'];

/*Está sendo declarada uma variável $sql_consulta recebendo como ação a conexão com o banco de dados e inserindo lá
um código SQL para selecionar todos os dados da tabela tb_cpfcnpj onde o id seja igual ao $id cuja variável teve como
valor declarado o número do id*/ 
$sql_consulta = mysqli_query($conexao, "SELECT * FROM tb_cpfcnpj WHERE id='$id'");

/*a variável $resultados tem nela o array que foi gerado do código abaixo, o resultado da $sql_consulta foi 
arranjado em um array para ficar ordenadamente acessível */
$resultados=mysqli_fetch_array($sql_consulta);

?>

<!DOCTYPE html>
<html lang="pt=br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>cpfcnpj</title>
    <link rel="stylesheet" href="novocadcpfcnpj.css">
</head>
<body>
    <section class="cadastro">
        <table>
            <form method="post" action="proceditcpfcnpj.php">
                <fieldset class="cadastro">
                    <legend class="titulolegenda">Página individual</legend>
                    <label class="campos">CPF/CNPJ</label>
<!-- Para que um campo seja preenchido com uma informação do banco de dados, basta declarar uma variável onde
ocorra um fetch_array da tabela, aí dentro de VALUE no formulário basta inserir uma TAG PHP e fazer a referência
à variável e a posição da informação que será preenchida-->
                    <input type="hidden" name="id" value='<?=$resultados[0]?>'></input>
                    <input type="num" name="cpfcnpj" value='<?=$resultados[2]?>'></input>
                    <label class="campos">Nome/Razao Social</label>
                    <input type="text" name="nomerazaosocial"  value='<?=$resultados[1]?>'></input><br>
                    <label class="campos">Apelido/Nome Fantasia</label>
                    <input type="text" name="apelidofantasia" value='<?=$resultados[3]?>'></input>                
                    <label class="campos">CEP</label>
                    <input type="num" name="cep" value='<?=$resultados[4]?>'></input><br>      
                    <label class="campos">Endereço</label>
                    <input type="text" name="endereco" value='<?=$resultados[5]?>'></input>
                    <label class="campos">Nº</label>
                    <input type="text" name="numero" value='<?=$resultados[6]?>'></input><br>  
                    <label class="campos">Bairro</label>
                    <input type="text" name="bairro" value='<?=$resultados[7]?>'></input>
                    <label class="campos" >Cidade</label>
                    <input type="text"name="cidade" value='<?=$resultados[8]?>'></input>  
                    <label class="campos">Estado</label>
                    <input type="text" name="estado" value='<?=$resultados[9]?>'></input><br>
                    <label class="campos">E-mail</label>
                    <input type="E-mail" name="email" value='<?=$resultados[10]?>'></input>     
                    <label class="campos">Telefone</label>
                    <input type="text" name="telefone" value='<?=$resultados[11]?>'></input><br> 
                    <label class="campos">Celular/WhatsApp</label>
                    <input type="text" name="celwhats" value='<?=$resultados[12]?>'></input><br>                               
                    <label class="campoobs">Observações</label>
                    <input class="campoobs" type="text" name="obs" value='<?=$resultados[13]?>'></input>
                    <input type="submit" value="salvar" class="btn">                                                                                               
                </fieldset>
            </form>
        </table>
        <a href="/gesttor3/modulos/cpfcnpj/cpfcnpj.php"><nav><img class="novocad" src="voltar.png"></img><br>VOLTAR À CONSULTA</nav></a>
        <a href="/gesttor3/modulos/inicio/inicio.php"><nav><img class="novocad" src="voltar.png"></img><br>VOLTAR AO INÍCIO</nav></a>
    </section>
</body>
</html>