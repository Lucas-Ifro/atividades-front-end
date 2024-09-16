const url = "http://localhost:3000"
const tabela = document.querySelector('#tabela')

const pagina1 = document.querySelector('#pagina1')
const pagina2 = document.querySelector('#pagina2')
const pagina3 = document.querySelector('#pagina3')


let bens = []

async function renderizar(pagina) {
    await listarbens(pagina)
    renderizerTabela()
}

renderizar(1)

pagina1.addEventListener('click', (e) => {
    e.preventDefault()
    renderizar(1)
})
pagina2.addEventListener('click', (e) => {
    e.preventDefault()
    renderizar(2)
})
pagina3.addEventListener('click', (e) => {
    e.preventDefault()
    renderizar(3)
})

function renderizerTabela(){
    tabela.innerHTML = `
    <table>
        <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Quantidade</th>
        </tr>
        ${bens.map(bem => 
            `
            <tr>
                <td>${bem.id}</td>
                <td>${bem.nome}</td>
                <td>${bem.valor}</td>
                <td>${bem.categoria}</td>
                <td>${bem.quantidade}</td>
            </tr>
            `
        ).join('')}
    </table>
    `
}

async function listarbens(pagina) {
    await fetch(`${url}/bens?_page=${pagina}`)
        .then(response => response.json())
        .then(response => bens = response.data)
        .catch(error =>console.log(error))
}


