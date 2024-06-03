function cadastroDoCarro (vetor, matrizNotas){
   for(let i=0; i<4 ; i++){
        let  objeto = {
            marca: prompt("Informe a marca do carro:"),
            modelo: prompt("Informe o modelo do carro:"),
            ano: parseInt(prompt("Informe o ano do carro:")),
            valor: parseFloat(prompt("Informe o valor do carro:"))
        }
        vetor.push(objeto)
        console.log('Carro inserido com sucesso!')
   }
}
function notasDosCarros(){
    for (let i =0; i<vetor.lenght; i++){
        matriz[i]=[]
        for(let j=0; j<5; j++){
            matriz[i][j]= parseInt((Math.random()*10)+1)//gera numeros de 1 a 10 para as notas
        }
    }
    console.log(matriz)
}

function principal (){
let vetor=[]
let matrizNotas=[]
cadastroDoCarro()
}
principal()