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
            <form method="post" action="processacpfcnpj.php">
                <fieldset class="cadastro">
                    <legend class="titulolegenda">Cadastro de novo CPF / CNPJ</legend>
                    <label class="campos">CPF/CNPJ</label>
                    <input type="num" name="cpfcnpj"></input>
                    <label class="campos">Nome/Razao Social</label>
                    <input type="text" name="nomerazaosocial"></input><br>
                    <label class="campos">Apelido/Nome Fantasia</label>
                    <input type="text" name="apelidofantasia"></input>                
                    <label class="campos">CEP</label>
                    <input type="num" name="cep"></input><br>      
                    <label class="campos">Endereço</label>
                    <input type="text" name="endereco"></input>
                    <label class="campos">Nº</label>
                    <input type="text" name="numero"></input><br>  
                    <label class="campos">Bairro</label>
                    <input type="text" name="bairro"></input>
                    <label class="campos" >Cidade</label>
                    <input type="text"name="cidade"></input>  
                    <label class="campos">Estado</label>
                    <input type="text" name="estado"></input><br>
                    <label class="campos">E-mail</label>
                    <input type="E-mail" name="email"></input>     
                    <label class="campos">Telefone</label>
                    <input type="text" name="telefone"></input><br> 
                    <label class="campos">Celular/WhatsApp</label>
                    <input type="text" name="celwhats"></input><br>                               
                    <label class="campoobs">Observações</label>
                    <textarea class="campoobs" type="text" name="obs"></textarea>
                    <input type="submit" value="salvar" class="btn">                                                                                               
                </fieldset>
            </form>
        </table>
        <a href="/gesttor3/modulos/cpfcnpj/cpfcnpj.php"><nav><img class="novocad" src="voltar.png"></img><br>VOLTAR À CONSULTA</nav></a>
        <a href="/gesttor3/modulos/inicio/inicio.php"><nav><img class="novocad" src="voltar.png"></img><br>VOLTAR AO INÍCIO</nav></a>
    </section>
</body>
</html>