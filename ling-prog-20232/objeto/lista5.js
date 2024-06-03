function exemplo(){
    // variáveis simples
   // let nome = prompt("Informe o nome")
   // let estoque = prompt("Informe o estoque")
   // let classificacao = prompt("Informe a classificao")
    // objeto
    let objeto = {
        nome: prompt("Informe o nome"),
        estoque: Number(prompt("Informe o estoque")),
        classificacao: prompt("Informe a classificao")
    }
    console.log(objeto)
    console.log(objeto.nome)
    console.log(objeto.estoque)
    console.log(objeto.classificacao)

    // outra forma
    let objeto2 = new Object()
    objeto2.nome =  prompt("Informe o nome"),
    objeto2.estoque = Number(prompt("Informe o estoque")),
    objeto2.classificacao = prompt("Informe a classificao")
}
function provaUsandoObjeto(){
    let vetor=[]
    for (let i = 1; i<4 ; i++){
        let objeto={
            nome: prompt("Informe o nome"),
            estoque: Number(prompt("Informe o estoque")),
            classificacao: prompt("Informe a classificacao").toUpperCase()
        }
        while(objeto.estoque<0){
            objeto.estoque = Number(prompt("informe estoque positivo"))
        }
        while(objeto.classificacao != "GAMER" && objeto.classificacao != "NOTEBOOK" && objeto.classificacao != "DESKTOP"){
            objeto.classificacao= prompt("Informe a classificacao correta").toUpperCase()
        }
        vetor.push(objeto)
    }
// realizar a compra
    for (let i = 1; i<2 ; i++){
        let objetoCompra={
            nomeCompra: prompt("Informe o nome do computador que deseja comprar"),
            qntCompra: Number(prompt(`Informe a quantidade que deseja comprar`)),
            classCompra: prompt(`Informe a classificacao do computador que deseja comprar`).toUpperCase()
        }
        let achou=false
            for (let j = 1; j<2 ; j++){
                if (objetoCompra.nomeCompra == vetor[j].nome && objetoCompra.classCompra == vetor[j].classificacao) {
                    achou= true 

                    if (objetoCompra.qntCompra <= vetor[j].estoque) {
                        alert(`Venda realizada com sucesso`)
                        vetor[j].estoque =vetor[j].estoque - objetoCompra.qntCompra
                    }else{
                        alert(`Não tem estoque suficiente`)
                    }
                }
            }
            if (!achou){
                alert(`Produto não existe`)
            }
    }
    let maiorEstoque = 0
    let posicaoMaiorEstoque=0
    let menorEstoque = Infinity
    let posicaoMenorEstoque=0
    let achou = false
    for(let i=1;i<4;i++){
        if (vetor[i].classificacao == "NOTEBOOK"){
            achou = true
            if (vetor[i].estoque > maiorEstoque){
                maiorEstoque = vetor[i].estoque
                posicaoMaiorEstoque=i
            }
            if (vetor[i].estoque < menorEstoque ){
                menorEstoque = vetor[i].estoque
                posicaoMenorEstoque=i
            }
        }
    }
    if (achou){
        console.log(vetor[posicaoMaiorEstoque].nome)
        console.log(vetor[posicaoMenorEstoque].nome)
    }

}
function exe1(){
//Faça um programa em JavaScript que solicite ao usuário dados de 10 bikes.
// Cada bike deve conter informações como marca, modelo, quadro, aro, ano e preço.
// Após a entrada de dados, o programa deve calcular e exibir ao usuário:
//1) a média de preço das bikes
//2) qual a bike é mais antiga, deve-se considerar empates
//3) quais as bikes são do marca Caloi
//4) quantas bikes possuem aro 29
//5) qual bike possui maior quadro, pode-se desconsiderar empates

let vetor = []
for(let i =0;i<3;i++){
    let objeto = {
        marca: prompt("Informe a marca da bike"),
        modelo: prompt("Informe o modelo da bike"),
        quadro: parseInt(prompt("Informe o tamanho do quadro da bike")),
        aro: parseInt(prompt("Informe o tamanho do aro da bike")),
        ano: parseInt(prompt("Informe o ano da bike")),
        preco: parseFloat(prompt("Informe o preço da bike"))
    }
    vetor.push(objeto) 
    console.log('Bike inserida com sucesso')
}
// média de preço das bikes
let soma = 0
for(let i=0;i<3;i++){
    soma = soma + vetor[i].preco
}   
console.log(`Média de preço das bikes ${soma/vetor.length}`)
// bike(s) mais antiga(s)
let maisAntiga = []
maisAntiga[0] = vetor[0] // atribui todo o objeto
for(let i=1;i<3;i++){
    if (vetor[i].ano < maisAntiga[0].ano){
        maisAntiga = [] //   o vetor
        maisAntiga[0] = vetor[i]
    }
    else if (vetor[i].ano == maisAntiga[0].ano){
        maisAntiga.push(vetor[i]) // mais uma com o mesmo ano
    }
}
console.log(`Bike(s) mais antiga(s)`)
console.log(maisAntiga)
//bikes da marca Caloi
let caloi = []
for(let i=0;i<3;i++){
    if (vetor[i].marca == 'CALOI'){
        caloi.push(vetor[i])
    }
}
console.log(caloi)
// qts bikes aro 29
let aro29 = 0
for(let i=0;i<vetor.length;i++){
    if (vetor[i].aro == 29){
        aro29++
    }
}
console.log(`Quantidade de bikes aro 29 ${aro29}`)
// qual bike possui maior quadro, desconsidere empates
let maiorQuadro = vetor[0]
for(let i=1;i<vetor.length;i++){
    if (vetor[i].quadro > maiorQuadro.quadro){
        maiorQuadro = vetor[i]
    }
}
console.log(maiorQuadro)
}

let exe2 = () => {
    // cadastra as farmácias
    let farmacias = []
    for(let i=0;i<5;i++){
        let objeto = {
            codigo: parseInt(prompt(`Informe o código da farmácia`)),
            nome: prompt(`Informe o nome da farmácia`),
            endereco: prompt(`Informe o endereço da farmácia`)
        }
        while (farmacias.some( (item) => item.codigo == objeto.codigo )){
            objeto.codigo = parseInt(prompt(`Código já existente. Informe outro código`))
        } //some: ele retorna true ou false
        farmacias.push(objeto)
    }
    // cadastra os remédios
    let remedios = []
    for(let i=0;i<5;i++){
        let objeto = {
            codFarmacia: parseInt(prompt('Código da farmácia')),
            nome: prompt('Nome do remédio').toUpperCase(),
            qtde: parseInt(prompt('Qtde do remédio')),
            preco: parseFloat(prompt('Preço do remédio'))
        }
        while(!farmacias.some( (item) => item.codigo == objeto.codFarmacia)){
            objeto.codFarmacia = 
                    parseInt(prompt('Farmácia não existe. Informe novamente o código'))
        }
        let indice = remedios.findIndex( (item) => item.codFarmacia == objeto.codFarmacia && item.nome == objeto.nome)
        // findIndex: ele retorna a posição do objeto encontrado
        if (indice == -1){ // remedio não existe
            remedios.push(objeto) // insere remédio
        }
        else { // já existe, atualiza estoque
            remedios[indice].qtde = remedios[indice].qtde + objeto.qtde
        }
    }
    // 5 vendas
    for(let i=0;i<5;i++){
        let venda = {
            farmacia: parseInt(prompt('Informe código da farmácia')),
            remedio: prompt('Informe nome do remédio').toUpperCase(),
            qtde: parseInt(prompt('Informe qtde para compra'))
        }
        // verifica se existem - some retorna true ou false
        if (remedios.some( (item) =>
            (item.codFarmacia == venda.farmacia && item.remedio == venda.remedio) )){
                // recupera o índice do remédio - findIndex retorna o índice do vetor
                let indice = remedios.findIndex((item => 
                  item.nome == venda.remedio && item.codFarmacia == venda.remedio))
                if (venda.qtde <= remedios[indice].qtde){
                    // atualiza o estoque
                    remedios[indice].qtde = remedios[indice].qtde - venda.qtde
                    alert('Venda realizada com sucesso')
                }
                else {
                    alert('Estoque insuficiente')
                }
        }
        else {
                alert('Farmácia ou remédio inexistente')
        }
    }
}
let exe3 = () => {
    let partidos = [] // cadastra os partidos
    for(let i=0;i<5;i++){
        let objeto = { // cria objeto
            codigo: parseInt(prompt('Informe o código do partido')),
            nome: prompt('Informe o nome do partido'),
            sigla: prompt('Informe a sigla do partido'),
            presidente: prompt('Informe o presidente do partido'),
            qtde: parseInt(prompt('Informe a quantidade de candidatos'))
        }
        // verifica se o código já existe ou menor que 0
        while (partidos.some((item) => item.codigo == objeto.codigo || 
                objeto.codigo < 0)){
            objeto.codigo =  parseInt(prompt('Código já existe. Informe novo código'))
        }
        while (partidos.some((item) => item.sigla == objeto.sigla)){
            objeto.sigla =  prompt('Sigla já existe. Informe nova sigla')
        }
        partidos.push(objeto) // insere objeto no vetor
        alert('Partido cadastrado com sucesso')
    }
    let politicos = [] // cadastrar os políticos
    for(let i=0;i<5;i++){
        let objeto = {
            codPartido : parseInt(prompt('Informe código do partido do candidato')),
            nome: prompt('Informe nome do candidato'),
            qtde: 0,
            cargo: prompt('Informe cargo do candidato')
        }
        while (!partidos.some((item) => item.codigo == objeto.codPartido)){
            objeto.codPartido = parseInt(prompt('Partido não encontrado, informe um novo'))
        }
        while (politicos.some((item) => item.nome == objeto.nome)){
            objeto.nome = prompt('Nome já existe, informe outro nome')
        }
        politicos.push(objeto)
        alert('Político cadastrado com sucesso')
    }
    // realizar 10 votos
    for(let i=0;i<10;i++){
        let votacao = {
            partido: parseInt(prompt('Informe código do partido')),
            candidato: prompt('Informe o nome do candidato')
        }
        let aux = politicos.find((item) => item.codPartido == votacao.partido && 
            item.nome == votacao.candidato) // find: ele retorna o objeto encontrado
        if (aux != undefined){
            // achou
            aux.qtde++
            alert('Votação realizada com sucesso')
        }
        else { // não achou
            alert('Partido e/ou candidato não existem')
        }
    }
    // candidato com mais votos
    let candidatoMaisVotado = politicos[0]
    for(let i=1;i<politicos.length;i++){
        if (politicos[i].qtde > candidatoMaisVotado.qtde){
            candidatoMaisVotado = politicos[i]
        }
    }
    console.log(candidatoMaisVotado)
}

function bubbleSort1(vetor){
    for (let i = 0; i < vetor.length - 1 ; i++) {
        for (let j = 0; j<vetor.length-i-1; j++) {
            if (vetor[j]> vetor[j+1]) {
                let aux= vetor[j]
                vetor[j] = vetor[j+1]
                vetor[j+1]= aux  
            }
        }
    }
            console.log(vetor)
}

function principal(){
    let valorVetor = [3,5,1,6]
    bubbleSort1(valorVetor)
}
