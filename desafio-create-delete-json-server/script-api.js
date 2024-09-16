const url = "http://localhost:3000"
const tabela = document.querySelector('#tabela')

const excluir = document.querySelector('#excluir')
const cadastrarBem = document.querySelector('#cadastrarBem')
const quantidade = document.querySelector('#quantidade')
const valor = document.querySelector('#valor')
const categoria = document.querySelector('#categoria')
const nome = document.querySelector('#nome')

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
    let idDelete = -1
    tabela.innerHTML = `
    <table>
        <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Quantidade</th>
            <th>Deletar</th>
        </tr>
        ${bens.map(bem => 
            `
            <tr>
                <td>${bem.id}</td>
                <td>${bem.nome}</td>
                <td>${bem.valor}</td>
                <td>${bem.categoria}</td>
                <td>${bem.quantidade}</td>
                <td><input type="checkbox" id="${idDelete++}"></td>
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

cadastrarBem.addEventListener('click', (e) => {
    cadastrar()
    renderizar(3)
})

async function cadastrar(){
    const data = {
        nome: nome.value, 
        valor: valor.value, 
        categoria: categoria.value, 
        quantidade: quantidade.value}
    await fetch(`${url}/bens`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
}

excluir.addEventListener('click',(e) => {
    e.preventDefault()
    deletar()
    renderizerTabela()

})

function deletar(){
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let checkedIds = [];
    
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkedIds.push(parseInt(checkbox.id));
        }
    });

    let contDecremento = 0
    checkedIds.forEach((id) => {
        bens.splice((id - contDecremento++), 1);
    })
}