const BotaoConclui = () => {
    const botaoConclui = document.createElement('button')

    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'concluir'

    botaoConclui.addEventListener ('click', concluiTarefa)

    return botaoConclui
}

const concluiTarefa = (evento) => {
    const botaoConlui = evento.target

    const tarefaCompleta = botaoConlui.parentElement

    tarefaCompleta.classList.toggle('done')
}

export default BotaoConclui