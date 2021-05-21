import BotaoConclui from './componentes/concluiTarefa.js'
import BotaoDeleta from './componentes/deletaTarefa.js'

    const criarTarefa = (evento) => {

    event.preventDefault()

    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const tarefa = document.createElement('li')
    tarefa.classList.add('task')

    const conteudo = `<p class="content">${valor}</p>`

    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())
    lista.appendChild(tarefa)
    input.value = " "
}

const  NovaTarefa = document.querySelector('[data-form-button]')

NovaTarefa.addEventListener('click', criarTarefa)
