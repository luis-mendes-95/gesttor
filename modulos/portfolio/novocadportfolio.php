<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="novocadportfolio.css">
    <title>Document</title>
</head>
<body>
    <section>
        <form method="post" action="processacadportfolio.php">
            <a href="/gesttor3/modulos/portfolio/portfolio.php"><nav><img class="novocad" src="voltar.png"></img><br>VOLTAR À CONSULTA</nav></a>
            <a href="/gesttor3/modulos/inicio/inicio.php"><nav><img class="novocad" src="voltar.png"></img><br>VOLTAR AO INÍCIO</nav></a><br>
            <h1>CADASTRAR ITEM NO PORTFOLIO</h1><br>
            <label for="descricao">DESCRIÇÃO DO ITEM</label><br>
            <input class="descricao" type="text" name="descricao"><br><br>
            <label for="valor">VALOR</label><br>
            <input class="valor" type="text" name="valor"><br><br>
            <label for="descricao">TIPO DE ITEM</label><br>
            <select name="tipo" id="">
                <option value="">Produto</option><option value="">Serviço</option>
            </select><br><br><br>
            <h2>ITENS QUE COMPÕEM</h2><br>
            <label for="">ITEM #1</label>
            <input class="material" type="text" name="item1"><br>
            <label for="">QTD</label>
            <input class="qtd" type="text" name="qtd1">
            <label for="">CUSTO</label>
            <input class="custo" type="text" name="custo1"><br><br>
            <label for="">ITEM #2</label><br>
            <input class="material" type="text" name="item2"><br>
            <label for="">QTD</label>
            <input class="qtd" type="text" name="qtd2">
            <label for="">CUSTO</label>
            <input class="custo" type="text" name="custo2"><br><br>
            <label for="">ITEM #3</label><br>
            <input class="material" type="text" name="item3"><br>
            <label for="">QTD</label>
            <input class="qtd" type="text" name="qtd3">
            <label for="">CUSTO</label>
            <input class="custo" type="text" name="custo3"><br><br>
            <label for="">ITEM #4</label><br>
            <input class="material" type="text" name="item4"><br>
            <label for="">QTD</label>
            <input class="qtd" type="text" name="qtd4">
            <label for="">CUSTO</label>
            <input class="custo" type="text" name="custo4"><br><br>
            <label for="">ITEM #5</label><br>
            <input class="material" type="text" name="item5"><br>
            <label for="">QTD</label>
            <input class="qtd" type="text" name="qtd5">
            <label for="">CUSTO</label>
            <input class="custo" type="text" name="custo5"><br><br>
            <label for="">ITEM #6</label>
            <input class="material" type="text" name="item6"><br>
            <label for="">QTD</label>
            <input class="qtd" type="text" name="qtd6">
            <label for="">CUSTO</label>
            <input class="custo" type="text" name="custo6"><br><br>
            <label for="">ITEM #7</label><br>
            <input class="material" type="text" name="item7"><br>
            <label for="">QTD</label>
            <input class="qtd" type="text" name="qtd7">
            <label for="">CUSTO</label>
            <input class="custo" type="text" name="custo7"><br><br>
            <label for="">ITEM #8</label><br>
            <input class="material" type="text" name="item8"><br>
            <label for="">QTD</label>
            <input class="qtd" type="text" name="qtd8">
            <label for="">CUSTO</label>
            <input class="custo" type="text" name="custo8"><br><br>
            <label for="">ITEM #9</label><br>
            <input class="material" type="text" name="item9"><br>
            <label for="">QTD</label>
            <input class="qtd" type="text" name="qtd9">
            <label for="">CUSTO</label>
            <input class="custo" type="text" name="custo9"><br><br>
            <label for="">ITEM #10</label><br>
            <input class="material" type="text" name="item10"><br>
            <label for="">QTD</label>
            <input class="qtd" type="text" name="qtd10">
            <label for="">CUSTO</label>
            <input class="custo" type="text" name="custo10"><br><br><br>
            <label for="custo">CUSTO</label><br>
            <input class="valor" type="text" name="custototal"><br><br>
            <label for="margem">MARGEM</label><br>
            <input class="valor" type="text" name="margem"><br><br>
            <input type="submit" value="salvar" class="btn">  
        </form>
        
    </section>
</body>
</html>