const atividade = document.querySelector('#atividade')
const sala = document.querySelector('#sala')
const dataInicial = document.querySelector('#data_inicial')
const datafinal = document.querySelector('#data_final')
const btnReservar = document.querySelector('#btnReservar')
const tabela = document.querySelector('#tabela')

const reservas = []

function addReserva(atividade, sala, dataInicial, datafinal){
    const reserva = {
        atividade: atividade,
        sala: sala,
        dataInicial: new Date(dataInicial),
        datafinal: new Date(datafinal)
    }
    reservas.push(reserva)
    renderizerTabela()
}

function renderizerTabela(){
    tabela.innerHTML = `
    <table>
        <tr>
            <th>Atividade</th>
            <th>Sala</th>
            <th>Data início</th>
            <th>Data fim</th>
        </tr>
        ${reservas.map(reserva => 
            `
            <tr>
                <td>${reserva.atividade}</td>
                <td>${reserva.sala}</td>
                <td>${getDataFormatada(reserva.dataInicial)}</td>
                <td>${getDataFormatada(reserva.datafinal)}</td>
            </tr>
            `
        ).join('')}
    </table>
    `
}

function getDataFormatada(data){
    return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()} - ${data.getHours()}:${data.getMinutes()}`
}

btnReservar.addEventListener('click', (e) => {
    e.preventDefault()
    addReserva(
        atividade.value,
        sala.value,
        dataInicial.value,
        datafinal.value
    )
})