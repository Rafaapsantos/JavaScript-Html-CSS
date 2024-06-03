function lerMatriz(matriz){
// 3 x 4 (3 linhas e 4 colunas)
for(let i =0; i<3; i++){// para cada linha 
    matriz[i]=[] // cria um vetor dentro de um vetor
    alert(`Informe os elementos da linha ${i+1}:`)
    for(let j =0; j<4; j++){
        matriz[i][j]= Number(prompt(`Informe um número da coluna ${j+1}:`))
    }
}
}
function mostraMatriz(matriz){
    console.log(matriz)
}

function principal(){
    let matriz= []
    lerMatriz(matriz)
    mostraMatriz(matriz)
        // quando quero calcular a coluna, é so colocar o j primeiro que o i
        // quando quero calcular a linha, é so colocar o i primeiro que o 
        //i= linha 
        //j = coluna
}