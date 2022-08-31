function printMenu() {
  console.log("só pra testar o git")
  console.log("mais um teste para finalizar")

  let header_menu = document.querySelector(".header_menu")

  cadastrosMenu.forEach((item) => {

    let button_header = document.createElement("button")
    button_header.classList.add("button_header")
    button_header.innerText = item

    button_header.addEventListener("click", () => {
      printMenuItems(item)
    })

    header_menu.appendChild(button_header)
  })
}
printMenu()

function printMenuItems(optionClicked) {

  if (optionClicked === "CPF/CNPJ") {

    let section_content = document.querySelector(".section_content")
    section_content.innerHTML = ""

    let button_add_new = document.createElement("button")
    button_add_new.classList.add("button_submit")
    button_add_new.innerText = "+"

    section_content.appendChild(button_add_new)

    button_add_new.addEventListener("click", () => {

      section_content.innerHTML = ""

      let button_add_new = document.createElement("button")
      button_add_new.classList.add("button_submit")
      button_add_new.innerText = "+"

      let form_add_new = document.createElement("form")
      form_add_new.classList.add("form_add_new")

      let h2_title_new_cad = document.createElement("h2")
      h2_title_new_cad.classList.add("h2_title_new_cad")
      h2_title_new_cad.innerText = "CADASTRAR NOVA PESSOA FÍSICA OU JURÍDICA"

      let input_name = document.createElement("input")
      input_name.classList.add("inputs")
      input_name.placeholder = "NOME DA PESSOA OU EMPRESA"

      let input_cidade = document.createElement("input")
      input_cidade.classList.add("inputs")
      input_cidade.placeholder = "DIGITE A CIDADE"

      let input_contato = document.createElement("input")
      input_contato.classList.add("inputs")
      input_contato.placeholder = "CONTATO WHATSAPP"

      let button_submit = document.createElement("button")
      button_submit.classList.add("button_submit")
      button_submit.innerText = "CADASTRAR"

      section_content.appendChild(button_add_new)
      form_add_new.appendChild(h2_title_new_cad)
      form_add_new.appendChild(input_name)
      form_add_new.appendChild(input_cidade)
      form_add_new.appendChild(input_contato)
      form_add_new.appendChild(button_submit)
      section_content.appendChild(form_add_new)

    })
  }

  if (optionClicked === "PORTFOLIO") {

    let section_content = document.querySelector(".section_content")
    section_content.innerHTML = ""

    let button_add_new = document.createElement("button")
    button_add_new.classList.add("button_submit")
    button_add_new.innerText = "+"

    section_content.appendChild(button_add_new)

    button_add_new.addEventListener("click", () => {

      section_content.innerHTML = ""

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

    let button_add_new = document.createElement("button")
    button_add_new.classList.add("button_submit")
    button_add_new.innerText = "+"

    section_content.appendChild(button_add_new)

    button_add_new.addEventListener("click", () => {

      section_content.innerHTML = ""

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

    let button_add_new = document.createElement("button")
    button_add_new.classList.add("button_submit")
    button_add_new.innerText = "+"

    section_content.appendChild(button_add_new)

    button_add_new.addEventListener("click", () => {

      section_content.innerHTML = ""

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
      input_item_name.placeholder = "DESCREVA O ITEM"

      let input_item_description = document.createElement("input")
      input_item_description.classList.add("inputs_larger")
      input_item_description.placeholder = "DETALHES DO PEDIDO"

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