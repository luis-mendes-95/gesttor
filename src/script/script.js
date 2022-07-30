let buttonCpfCnpj = document.getElementById("button-cpf-cnpj")
let buttonPortfolio = document.getElementById("button-portfolio")
let buttonCad = document.getElementById("button-submit")
let main_content = document.getElementById("main-content")
let inputName = document.getElementById("input-name")
let inputCidade = document.getElementById("input-cidade")
let inputItemDescription = document.getElementById("input-item-description")
let inputItemCusto = document.getElementById("input-item-custo")
let inputPrecoVenda = document.getElementById("input-preco-venda")
let buttonSubmitItem = document.getElementById("button-submit-item")

buttonCpfCnpj.addEventListener("click", () => {
  imprimirNovoCadCpfCnpj(),
  imprimirDatabaseCpfCnpj()
})

buttonPortfolio.addEventListener("click", () => {
  imprimirNovoCadPortfolio()
  imprimirDatabasePortfolio()
})

buttonSubmitItem.addEventListener("click", CadastrarItemPortfolio)

function CadastrarCpfCnpj() {

  let newItem = {
    nome: inputName.value,
    cidade: inputCidade.value
  }

  cadastrosCpfCnpj.push(newItem)

  inputName.value = ""
  inputCidade.value = ""

  imprimirDatabaseCpfCnpj()

  return console.log(cadastrosCpfCnpj)

}

function CadastrarItemPortfolio() {

  let newItem = {
    descricao: inputItemDescription.value,
    custo: inputItemCusto.value,
    precoVenda: inputPrecoVenda.value,
  }

  cadastrosPortfolio.push(newItem)

  inputItemDescription.value = ""
  inputItemCusto.value = ""
  inputPrecoVenda.value = ""

  //imprimirDatabasePortfolio()

  return console.log(cadastrosPortfolio)

}

function imprimirNovoCadCpfCnpj() {

  main_content.innerHTML = ""

  let section_add_new_cpf_cnpj = document.createElement("section")
  section_add_new_cpf_cnpj.classList.add("section-add-new-cpf-cnpj")

  let h2_title_new_cad = document.createElement("h2")
  h2_title_new_cad.classList.add("h2-title-new-cad")
  h2_title_new_cad.innerText = "ADICIONAR NOVO CADASTRO"

  let label_input_name = document.createElement("label")
  label_input_name.classList.add("labels")
  label_input_name.innerText = "Nome"

  let input_name = document.createElement("input")
  input_name.classList.add("inputs")
  input_name.id = "input-name"
  input_name.placeholder = "Digite o nome da pessoa ou empresa"
  inputName = input_name

  let label_input_cidade = document.createElement("label")
  label_input_cidade.classList.add("labels")
  label_input_cidade.innerText = "Cidade"
  let input_cidade = document.createElement("input")
  input_cidade.classList.add("inputs")
  input_cidade.id = "input-cidade"
  input_cidade.placeholder = "Digite a cidade"
  inputCidade = input_cidade
  
  let button_submit = document.createElement("button")
  button_submit.classList.add("button-submit")
  button_submit.innerText = "CADASTRAR"
  button_submit.id = "button-submit"
  button_submit.addEventListener("click", CadastrarCpfCnpj)

  section_add_new_cpf_cnpj.appendChild(h2_title_new_cad)
  section_add_new_cpf_cnpj.appendChild(label_input_name)
  section_add_new_cpf_cnpj.appendChild(input_name)
  section_add_new_cpf_cnpj.appendChild(label_input_cidade)
  section_add_new_cpf_cnpj.appendChild(input_cidade)
  section_add_new_cpf_cnpj.appendChild(button_submit)

  return main_content.appendChild(section_add_new_cpf_cnpj)
}
//imprimirNovoCadCpfCnpj()

function imprimirNovoCadPortfolio() {

  main_content.innerHTML = ""

  let section_add_new_cpf_cnpj = document.createElement("section")
  section_add_new_cpf_cnpj.classList.add("section-add-new-cpf-cnpj")
  let h2_title_new_cad = document.createElement("h2")
  h2_title_new_cad.classList.add("h2-title-new-cad")
  h2_title_new_cad.innerText = "ADICIONAR NOVO ITEM NO PORTFOLIO"
  let label_input_name = document.createElement("label")
  label_input_name.classList.add("labels")
  label_input_name.innerText = "Descrição"
  let input_name = document.createElement("input")
  input_name.classList.add("inputs")
  input_name.id = "input-name"
  input_name.placeholder = "Descreva o item"
  let label_input_cidade = document.createElement("label")
  label_input_cidade.classList.add("labels")
  label_input_cidade.innerText = "Custo"
  let input_cidade = document.createElement("input")
  input_cidade.classList.add("inputs")
  input_cidade.id = "input-cidade"
  input_cidade.placeholder = "Digite o custo da produção"
  let label_input_preco_final = document.createElement("label")
  label_input_preco_final.classList.add("labels")
  label_input_preco_final.innerText = "Preço final"
  let input_preco_final = document.createElement("input")
  input_preco_final.classList.add("inputs")
  input_preco_final.id = "input-cidade"
  input_preco_final.placeholder = "Digite o preço final do produto"
  let button_submit_item = document.createElement("button")
  button_submit_item.classList.add("button-submit")
  button_submit_item.innerText = "CADASTRAR"
  button_submit_item.id = "button-submit-item"
  button_submit_item = buttonSubmitItem
  section_add_new_cpf_cnpj.appendChild(h2_title_new_cad)
  section_add_new_cpf_cnpj.appendChild(label_input_name)
  section_add_new_cpf_cnpj.appendChild(input_name)
  section_add_new_cpf_cnpj.appendChild(label_input_cidade)
  section_add_new_cpf_cnpj.appendChild(input_cidade)
  section_add_new_cpf_cnpj.appendChild(label_input_preco_final)
  section_add_new_cpf_cnpj.appendChild(input_preco_final)
  section_add_new_cpf_cnpj.appendChild(button_submit_item)


  inputItemDescription.value = ""
  inputItemCusto.value = ""
  inputPrecoVenda.value = ""

  return main_content.appendChild(section_add_new_cpf_cnpj)
}

function imprimirDatabaseCpfCnpj() {

  main_content.innerHTML = ""
  imprimirNovoCadCpfCnpj()

  let section_database_cpf_cnpj = document.createElement("section")
  section_database_cpf_cnpj.classList.add("section-database-cpf-cnpj")
  let h2_title_new_cad = document.createElement("h2")
  h2_title_new_cad.classList.add("h2-title-new-cad")
  h2_title_new_cad.innerText = "BANCO DE DADOS"
  let table_database_cpf_cnpj = document.createElement("table")
  table_database_cpf_cnpj.classList.add("table-database-cpf-cnpj")
  let t_head_database = document.createElement("thead")
  let th_database_name = document.createElement("th")
  th_database_name.innerText = "NOME"
  let th_database_cidade = document.createElement("th")
  th_database_cidade.innerText = "CIDADE"

  t_head_database.appendChild(th_database_name)
  t_head_database.appendChild(th_database_cidade)
  table_database_cpf_cnpj.appendChild(t_head_database)
  section_database_cpf_cnpj.appendChild(h2_title_new_cad)

  cadastrosCpfCnpj.forEach((item) => {
    let currentItem = {
      nome: item.nome,
      cidade: item.cidade
    }

    let tr_inputs = document.createElement("tr")
    tr_inputs.classList.add("tr-inputs")
    let td_input_name = document.createElement("td")
    td_input_name.classList.add("td-inputs")
    td_input_name.innerText = currentItem.nome
    let td_input_cidade = document.createElement("td")
    td_input_cidade.classList.add("td-inputs")
    td_input_cidade.innerText = currentItem.cidade
    
    tr_inputs.appendChild(td_input_name)
    tr_inputs.appendChild(td_input_cidade)
    table_database_cpf_cnpj.appendChild(tr_inputs)
  })

  section_database_cpf_cnpj.appendChild(table_database_cpf_cnpj)
  
  return main_content.appendChild(section_database_cpf_cnpj)
}
//imprimirDatabaseCpfCnpj()



  



