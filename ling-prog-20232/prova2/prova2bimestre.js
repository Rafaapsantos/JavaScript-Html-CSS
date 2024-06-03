function cadastrarCarro (vetor){
    for(let i= 0; i<4; i++){
        let objeto = {
            marca: prompt("Informe a marca do carro:"),
            modelo: prompt("Informe o modelo do carro:"),
            ano: parseInt(prompt("Informe o ano do carro:")),
            valor: parseFloat(prompt("Informe o valor do carro:"))
        }
    }
    vetor.push(objeto)
    console.log(`Carro inserido com sucesso!`)
}
 
function notasDosCarros (matriz){
    for (let i =0; i<vetor.lenght; i++){
        matriz[i]=[]
        for(let j=0; j<5; j++){
            matriz[i][j]= parseFloat(prompt(`Informe a nota ${j + 1} do carro ${i + 1}:`))
        }
    }
    console.log(matriz)
}
 
function mediaNotas(vetor, matriz){
    let soma = 0
    for (let i =0; i<vetor.lenght; i++){
        for(let j=0; j<5; j++){
            soma = matriz[i][j] + soma
        }
        let media = soma/ vetor.lenght
        console.log(`A media das notas do ${i+1}º carro é:  ${media}, o modelo é: ${vetor[i].modelo} e a marca é: ${vetor[i].marca}`)
    }
    if(vetor.length = 0){
        console.log('Não existe nenhum carro cadastrado')
    }
}
 
function menorNota(vetor, matriz){
    menorNota = matriz[0][0]
    for (let i =0; i<vetor.lenght; i++){
        for(let j=0; j<5; j++){
            if(matriz[i][j]< menorNota){
                menorNota=matriz[i][j]
            }
        }
        console.log(`O modelo do carro com menor avaliação é: ${modelo[matriz[i][j].indexOf(menorNota)]}`)
    }
    if(vetor.length = 0){
        console.log('Não existe nenhum carro cadastrado')
    }
}

function menorMedia (vetor,matriz){
    let soma = 0
    menorMedia = matriz[0][0]
    for (let i =0; i<vetor.lenght; i++){
        for(let j=0; j<5; j++){
            soma = matriz[i][j] + soma
        }
        let media = soma/ vetor.lenght
        if (media< menorMedia){
            menorMedia = matriz[i][j]
        }
        console.log(`A menor media de avaliação foi: ${menorMedia}`)
        }
    if(vetor.length = 0){
        console.log('Não existe nenhum carro cadastrado')
    }
}

 
function principal (){
    let vetor = []
    let matriz= []
    let opcao
    do{
        opcao = Number(prompt("Informe a opção escolhida: \n 1-Cadastrar carro \n 2- cadastrar notas dos carros \n 3- Média de notas de cada carro \n 4- Modelo do carro com menor nota \n 5- Menor média \n 6- sair" ))
        switch(opcao){
            case 1: cadastrarCarro(vetor); break
            case 2: notasDosCarros(matriz); break
            case 3: mediaNotas(vetor, matriz); break
            case 4: menorNota(vetor,matriz); break
            case 5: menorMedia(vetor,matriz); break
            case 6: alert(`Programa será encerrado`); break
            default: alert("opção invalida");
        }
    }
    while( opcao!=7 )
}