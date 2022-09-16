function printMenu() {

  let header_menu = document.querySelector(".header_menu")

  cadastrosMenu.forEach((item) => {

    let button_header = document.createElement("button")
    button_header.classList.add("button_header")
    button_header.innerText = item

    button_header.addEventListener("click", () => {
      printMenuItems(item)
      printDatabaseItems(item)
    })

    header_menu.appendChild(button_header)
  })
}
printMenu()

function printMenuItems(optionClicked) {

  if (optionClicked === "CPF/CNPJ") {

    let section_content = document.querySelector(".section_content")
    section_content.innerHTML = ""

    let h2_title = document.createElement("h2")
    h2_title.classList.add("h2_title")
    h2_title.innerText = "CPF/CNPJ"

    section_content.appendChild(h2_title)

    let button_add_new = document.createElement("button")
    button_add_new.classList.add("button_submit")
    button_add_new.innerText = "+"

    section_content.appendChild(button_add_new)

    button_add_new.addEventListener("click", (e) => {
      
      e.preventDefault()
      let h2_title = document.createElement("h2")
      h2_title.classList.add("h2_title")
      h2_title.innerText = "CPF/CNPJ"

      section_content.innerHTML = ""

      let button_add_new = document.createElement("button")
      button_add_new.classList.add("button_submit")
      button_add_new.innerText = "+"

      let form_add_new = document.createElement("form")
      form_add_new.classList.add("form_add_new")

      let h2_title_new_cad = document.createElement("h2")
      h2_title_new_cad.classList.add("h2_title_new_cad")
      h2_title_new_cad.innerText = "CADASTRAR NOVA PESSOA FÍSICA OU JURÍDICA"

      let label_input_name = document.createElement("label")
      label_input_name.innerText = "NOME/EMPRESA"

      let input_name = document.createElement("input")
      input_name.classList.add("inputs")
      input_name.placeholder = "NOME DA PESSOA OU EMPRESA"

      let label_input_cidade = document.createElement("label")
      label_input_cidade.innerText = "CIDADE"

      let input_cidade = document.createElement("input")
      input_cidade.classList.add("inputs")
      input_cidade.placeholder = "DIGITE A CIDADE"

      let label_input_contato = document.createElement("label")
      label_input_contato.innerText = "CONTATO"

      let input_contato = document.createElement("input")
      input_contato.classList.add("inputs")
      input_contato.placeholder = "CONTATO WHATSAPP"

      let button_submit = document.createElement("button")
      button_submit.classList.add("button_submit")
      button_submit.innerText = "CADASTRAR"

      button_submit.addEventListener("click", (e) => {
        e.preventDefault()
        let data = {
          nome: input_name.value,
          cidade: input_cidade.value
        }

        AddNewData(optionClicked, data)
        input_name.value = ""
        input_cidade.value = ""
        input_contato.value = ""


      })

      section_content.appendChild(h2_title)
      section_content.appendChild(button_add_new)
      form_add_new.appendChild(h2_title_new_cad)
      form_add_new.appendChild(label_input_name)
      form_add_new.appendChild(input_name)
      form_add_new.appendChild(label_input_cidade)
      form_add_new.appendChild(input_cidade)
      form_add_new.appendChild(label_input_contato)
      form_add_new.appendChild(input_contato)
      form_add_new.appendChild(button_submit)
      section_content.appendChild(form_add_new)

    })

  }

  if (optionClicked === "PORTFOLIO") {

    let section_content = document.querySelector(".section_content")
    section_content.innerHTML = ""

    let h2_title = document.createElement("h2")
    h2_title.classList.add("h2_title")
    h2_title.innerText = "PORTFOLIO"

    section_content.appendChild(h2_title)

    let button_add_new = document.createElement("button")
    button_add_new.classList.add("button_submit")
    button_add_new.innerText = "+"

    section_content.appendChild(button_add_new)

    button_add_new.addEventListener("click", () => {

      section_content.innerHTML = ""

      let h2_title = document.createElement("h2")
      h2_title.classList.add("h2_title")
      h2_title.innerText = "PORTFOLIO"

      let button_add_new = document.createElement("button")
      button_add_new.classList.add("button_submit")
      button_add_new.innerText = "+"

      let form_add_new = document.createElement("form")
      form_add_new.classList.add("form_add_new")

      let h2_title_new_cad = document.createElement("h2")
      h2_title_new_cad.classList.add("h2_title_new_cad")
      h2_title_new_cad.innerText = "CADASTRAR NOVO ITEM NO PORTFOLIO"

      let input_item_description = document.createElement("input")
      input_item_description.classList.add("inputs")
      input_item_description.placeholder = "DESCREVA O ITEM"

      let input_item_custo = document.createElement("input")
      input_item_custo.classList.add("inputs")
      input_item_custo.placeholder = "DIGITE O CUSTO DA PRODUÇÃO"

      let input_preco_venda = document.createElement("input")
      input_preco_venda.classList.add("inputs")
      input_preco_venda.placeholder = "DIGITE O PREÇO FINAL DO PRODUTO"

      let button_submit = document.createElement("button")
      button_submit.classList.add("button_submit")
      button_submit.innerText = "CADASTRAR"

        
      section_content.appendChild(h2_title)
      section_content.appendChild(button_add_new)
      form_add_new.appendChild(h2_title_new_cad)
      form_add_new.appendChild(input_item_description)
      form_add_new.appendChild(input_item_custo)
      form_add_new.appendChild(input_preco_venda)
      form_add_new.appendChild(button_submit)
      section_content.appendChild(form_add_new)

    })
  }

  if (optionClicked === "PEDIDOS") {

    let section_content = document.querySelector(".section_content")
    section_content.innerHTML = ""

    let h2_title = document.createElement("h2")
    h2_title.classList.add("h2_title")
    h2_title.innerText = "PEDIDOS"

    section_content.appendChild(h2_title)

    let button_add_new = document.createElement("button")
    button_add_new.classList.add("button_submit")
    button_add_new.innerText = "+"

    section_content.appendChild(button_add_new)

    button_add_new.addEventListener("click", () => {

      section_content.innerHTML = ""

      let h2_title = document.createElement("h2")
      h2_title.classList.add("h2_title")
      h2_title.innerText = "PEDIDOS"

      let button_add_new = document.createElement("button")
      button_add_new.classList.add("button_submit")
      button_add_new.innerText = "+"

      let form_add_new = document.createElement("form")
      form_add_new.classList.add("form_add_new")

      let h2_title_new_cad = document.createElement("h2")
      h2_title_new_cad.classList.add("h2_title_new_cad")
      h2_title_new_cad.innerText = "CADASTRAR NOVO PEDIDO"

      let input_client_name = document.createElement("input")
      input_client_name.classList.add("inputs")
      input_client_name.placeholder = "DIGITE O NOME DO CLIENTE"

      let input_item_name = document.createElement("input")
      input_item_name.classList.add("inputs")
      input_item_name.placeholder = "DESCREVA O ITEM"

      let input_item_description = document.createElement("input")
      input_item_description.classList.add("inputs_larger")
      input_item_description.placeholder = "DETALHES DO PEDIDO"

      let button_submit = document.createElement("button")
      button_submit.classList.add("button_submit")
      button_submit.innerText = "CADASTRAR"

      section_content.appendChild(h2_title)
      section_content.appendChild(button_add_new)
      form_add_new.appendChild(h2_title_new_cad)
      form_add_new.appendChild(input_client_name)
      form_add_new.appendChild(input_item_name)
      form_add_new.appendChild(input_item_description)
      form_add_new.appendChild(button_submit)
      section_content.appendChild(form_add_new)

    })
  }

  if (optionClicked === "OS") {

    let section_content = document.querySelector(".section_content")
    section_content.innerHTML = ""

    let h2_title = document.createElement("h2")
    h2_title.classList.add("h2_title")
    h2_title.innerText = "OS"

    section_content.appendChild(h2_title)

    let button_add_new = document.createElement("button")
    button_add_new.classList.add("button_submit")
    button_add_new.innerText = "+"

    section_content.appendChild(button_add_new)

    button_add_new.addEventListener("click", () => {

      section_content.innerHTML = ""

      let h2_title = document.createElement("h2")
      h2_title.classList.add("h2_title")
      h2_title.innerText = "OS"
  
      section_content.appendChild(h2_title)

      let button_add_new = document.createElement("button")
      button_add_new.classList.add("button_submit")
      button_add_new.innerText = "+"

      let form_add_new = document.createElement("form")
      form_add_new.classList.add("form_add_new")

      let h2_title_new_cad = document.createElement("h2")
      h2_title_new_cad.classList.add("h2_title_new_cad")
      h2_title_new_cad.innerText = "CADASTRAR NOVA ORDEM DE SERVIÇO"

      let input_client_name = document.createElement("input")
      input_client_name.classList.add("inputs")
      input_client_name.placeholder = "DIGITE O NOME DO CLIENTE"

      let input_item_name = document.createElement("input")
      input_item_name.classList.add("inputs")
      input_item_name.placeholder = "DESCREVA OS ITENS DA ORDEM DE SERVIÇO"

      let input_item_description = document.createElement("input")
      input_item_description.classList.add("inputs_larger")
      input_item_description.placeholder = "DETALHES DA ORDEM DE SERVIÇO"

      let button_submit = document.createElement("button")
      button_submit.classList.add("button_submit")
      button_submit.innerText = "CADASTRAR"

      section_content.appendChild(button_add_new)
      form_add_new.appendChild(h2_title_new_cad)
      form_add_new.appendChild(input_client_name)
      form_add_new.appendChild(input_item_name)
      form_add_new.appendChild(input_item_description)
      form_add_new.appendChild(button_submit)
      section_content.appendChild(form_add_new)

    })
  }

  if (optionClicked === "A RECEBER") {

    let section_content = document.querySelector(".section_content")
    section_content.innerHTML = ""

    let h2_title = document.createElement("h2")
    h2_title.classList.add("h2_title")
    h2_title.innerText = "A RECEBER"

    section_content.appendChild(h2_title)

    let button_add_new = document.createElement("button")
    button_add_new.classList.add("button_submit")
    button_add_new.innerText = "+"

    section_content.appendChild(button_add_new)

    button_add_new.addEventListener("click", () => {

      section_content.innerHTML = ""

      let h2_title = document.createElement("h2")
      h2_title.classList.add("h2_title")
      h2_title.innerText = "A RECEBER"
  
      section_content.appendChild(h2_title)

      let button_add_new = document.createElement("button")
      button_add_new.classList.add("button_submit")
      button_add_new.innerText = "+"

      let form_add_new = document.createElement("form")
      form_add_new.classList.add("form_add_new")

      let h2_title_new_cad = document.createElement("h2")
      h2_title_new_cad.classList.add("h2_title_new_cad")
      h2_title_new_cad.innerText = "CADASTRAR NOVO TÍTULO A RECEBER"

      let input_client_name = document.createElement("input")
      input_client_name.classList.add("inputs")
      input_client_name.placeholder = "DIGITE O NOME DO CLIENTE"

      let input_item_name = document.createElement("input")
      input_item_name.classList.add("inputs")
      input_item_name.placeholder = "DESCREVA OS ITENS"

      let input_item_description = document.createElement("input")
      input_item_description.classList.add("inputs_larger")
      input_item_description.placeholder = "DETALHES SOBRE O TÍTULO A RECEBER"

      let button_submit = document.createElement("button")
      button_submit.classList.add("button_submit")
      button_submit.innerText = "CADASTRAR"

      section_content.appendChild(button_add_new)
      form_add_new.appendChild(h2_title_new_cad)
      form_add_new.appendChild(input_client_name)
      form_add_new.appendChild(input_item_name)
      form_add_new.appendChild(input_item_description)
      form_add_new.appendChild(button_submit)
      section_content.appendChild(form_add_new)

    })
  }

  if (optionClicked === "A PAGAR") {

    let section_content = document.querySelector(".section_content")
    section_content.innerHTML = ""

    let h2_title = document.createElement("h2")
    h2_title.classList.add("h2_title")
    h2_title.innerText = "A PAGAR"

    section_content.appendChild(h2_title)

    let button_add_new = document.createElement("button")
    button_add_new.classList.add("button_submit")
    button_add_new.innerText = "+"

    section_content.appendChild(button_add_new)

    button_add_new.addEventListener("click", () => {

      section_content.innerHTML = ""

      let h2_title = document.createElement("h2")
      h2_title.classList.add("h2_title")
      h2_title.innerText = "A PAGAR"
  
      section_content.appendChild(h2_title)

      let button_add_new = document.createElement("button")
      button_add_new.classList.add("button_submit")
      button_add_new.innerText = "+"

      let form_add_new = document.createElement("form")
      form_add_new.classList.add("form_add_new")

      let h2_title_new_cad = document.createElement("h2")
      h2_title_new_cad.classList.add("h2_title_new_cad")
      h2_title_new_cad.innerText = "CADASTRAR NOVO TÍTULO A PAGAR"

      let input_client_name = document.createElement("input")
      input_client_name.classList.add("inputs")
      input_client_name.placeholder = "DIGITE O NOME DO CLIENTE"

      let input_item_name = document.createElement("input")
      input_item_name.classList.add("inputs")
      input_item_name.placeholder = "DESCREVA OS ITENS"

      let input_item_description = document.createElement("input")
      input_item_description.classList.add("inputs_larger")
      input_item_description.placeholder = "DETALHES SOBRE O TÍTULO A PAGAR"

      let button_submit = document.createElement("button")
      button_submit.classList.add("button_submit")
      button_submit.innerText = "CADASTRAR"

      section_content.appendChild(button_add_new)
      form_add_new.appendChild(h2_title_new_cad)
      form_add_new.appendChild(input_client_name)
      form_add_new.appendChild(input_item_name)
      form_add_new.appendChild(input_item_description)
      form_add_new.appendChild(button_submit)
      section_content.appendChild(form_add_new)

    })
  }

  if (optionClicked === "AGENDA") {

    let section_content = document.querySelector(".section_content")
    section_content.innerHTML = ""

    let h2_title = document.createElement("h2")
    h2_title.classList.add("h2_title")
    h2_title.innerText = "AGENDA"

    section_content.appendChild(h2_title)

    let button_add_new = document.createElement("button")
    button_add_new.classList.add("button_submit")
    button_add_new.innerText = "+"

    section_content.appendChild(button_add_new)

    button_add_new.addEventListener("click", () => {

      section_content.innerHTML = ""

      let h2_title = document.createElement("h2")
      h2_title.classList.add("h2_title")
      h2_title.innerText = "AGENDA"
  
      section_content.appendChild(h2_title)

      let button_add_new = document.createElement("button")
      button_add_new.classList.add("button_submit")
      button_add_new.innerText = "+"

      let form_add_new = document.createElement("form")
      form_add_new.classList.add("form_add_new")

      let h2_title_new_cad = document.createElement("h2")
      h2_title_new_cad.classList.add("h2_title_new_cad")
      h2_title_new_cad.innerText = "CADASTRAR NOVO COMPROMISSO"

      let input_client_name = document.createElement("input")
      input_client_name.classList.add("inputs")
      input_client_name.placeholder = "DIGITE O NOME DO CLIENTE"

      let input_item_name = document.createElement("input")
      input_item_name.classList.add("inputs")
      input_item_name.placeholder = "RESUMO DO COMPROMISSO"

      let input_item_description = document.createElement("input")
      input_item_description.classList.add("inputs_larger")
      input_item_description.placeholder = "DETALHES SOBRE O COMPROMISSO"

      let button_submit = document.createElement("button")
      button_submit.classList.add("button_submit")
      button_submit.innerText = "CADASTRAR"

      section_content.appendChild(button_add_new)
      form_add_new.appendChild(h2_title_new_cad)
      form_add_new.appendChild(input_client_name)
      form_add_new.appendChild(input_item_name)
      form_add_new.appendChild(input_item_description)
      form_add_new.appendChild(button_submit)
      section_content.appendChild(form_add_new)

    })
  }
}

function printDatabaseItems(optionClicked) {

  if (optionClicked === "CPF/CNPJ") {

    let section_database = document.querySelector(".section_database")
    section_database.classList.add("section_database")

    section_database.innerHTML = ""

    let table_database = document.createElement("table")
    table_database.classList.add("table_database")
    section_database.appendChild(table_database)

    let t_head = document.createElement("thead")
    table_database.appendChild(t_head)

    let th_nome = document.createElement("th")
    th_nome.innerText = "NOME"
    t_head.appendChild(th_nome)

    let th_cidade = document.createElement("th")
    th_cidade.innerText = "CIDADE"
    t_head.appendChild(th_cidade)


    cadastrosCpfCnpj.forEach((cadastro) => {

      let tr_input = document.createElement("tr")
      tr_input.classList.add("tr_inputs")
      table_database.appendChild(tr_input)

      let td_name = document.createElement("td")
      td_name.innerText = cadastro.nome
      tr_input.appendChild(td_name)

      let td_cidade = document.createElement("td")
      td_cidade.innerText = cadastro.cidade
      tr_input.appendChild(td_cidade)



    })

    


  }

  if (optionClicked === "PORTFOLIO") {

    let section_database = document.querySelector(".section_database")

    section_database.innerHTML = ""

    let table_database = document.createElement("table")
    table_database.classList.add("table_database")
    section_database.appendChild(table_database)

    let t_head = document.createElement("thead")
    table_database.appendChild(t_head)

    let th_item = document.createElement("th")
    th_item.innerText = "ITEM"
    t_head.appendChild(th_item)

    let th_custo = document.createElement("th")
    th_custo.innerText = "CUSTO"
    t_head.appendChild(th_custo)

    let th_preco = document.createElement("th")
    th_preco.innerText = "PREÇO FINAL"
    t_head.appendChild(th_preco)
  }

  if (optionClicked === "PEDIDOS") {
    console.log(cadastrosPedidos)
  }

  if (optionClicked === "OS") {
    console.log(cadastrosOs)
  }

  if (optionClicked === "A RECEBER") {
    console.log(cadastrosAReceber)
  }
  
  if (optionClicked === "A PAGAR") {
    console.log(cadastrosAPagar)
  }

  if (optionClicked === "AGENDA") {
    console.log(cadastrosAgenda)
  }
}

function AddNewData(optionClicked, data) {

if (optionClicked = "CPF/CNPJ") {

  cadastrosCpfCnpj.push(data)
  printDatabaseItems(optionClicked)
}

if (optionClicked === "PORTFOLIO") {

  cadastrosPortfolio.push(data)
  printDatabaseItems(optionClicked)
}

}