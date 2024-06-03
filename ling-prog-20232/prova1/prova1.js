function prova1(){
    let modelo=[]
    let estoque=[]
    let classificacao=[]
    // entrada de dados 
    for (let i = 0; i<5; i++) {
        modelo.push(String(prompt(`DIGITE O MODELO DO ${i+1}° COMPUTADOR:`)))
        classificacao.push(String(prompt(`DIGITE A CLASSIFICAÇÃO DO ${i+1}° COMPUTADOR: PODE SER (gamer, notebook, desktop)`)))
        estoque.push(Number(prompt(`DIGITE O TOTAL DE ESTOQUE DO ${i+1}° COMPUTADOR:`)))
        if (estoque<0) {
            estoque.push(Number(prompt(`DIGITE O TOTAL DE ESTOQUE DO ${i+1}° COMPUTADOR:`)))
        }
    }
    //compra do cliente 
    for (let i = 0; i<4; i++) {
        let produto= String(prompt(`DIGITE O MODELO DO COMPUTADOR QUE VOCÊ DESEJA COMPRAR EM LETRAS MINUSCULAS:`))
        let qnt= Number(prompt(`DIGITE A QUANTIDADE COMPUTADORES QUE VOCÊ DESEJA COMPRAR:`))
        let cod =String(prompt(`DIGITE A CLASSIFICAÇÃO DO COMPUTADOR QUE VOCÊ DESEJA COMPRAR EM LETRAS MINUSCULAS:`))
    }
        //verifica se o produto existe e se tem estoque 
        let achou =false
        for (let i = 0; i<5; i++) {
            if (modelo[i]==produto && classificacao[i]==cod) {//verifica se tem o modelo digitado 
                achou = true //achou o modelo
                if (estoque[i]>=qnt) {
                    alert(`VENDA REALIZADA COM SUCESSO`)
                    estoque[i]=estoque[i]-qnt
                }else{
                    alert(`COMPRA CANCELADA`)
                    break//sai do programa 
                }
            }
            if (!achou) { //não encontrou o produto
                alert(`COMPRA CANCELADA`)
                break//sai do programa 
            }
        }
    let maior=estoque[0]
    let menor= estoque[0]
    //for para encontrar o maior e menor estoque 
    for (let i = 1; i<5; i++) {
        if (classificacao== "NOTEBOOK" || classificacao=="notebook") {
            if (estoque[i]>maior) {
                maior= estoque[i]
            }  
            if (estoque[i]<menor) {
                menor=estoque[i]
            } 
        } 
    }
    alert(`MODELO DO CUMPUTADOR DE CLASSIFICAÇÃO NOTEBOOK COM MAIOR ESTOQUE É: ${modelo[estoque.indexOf(maior)]}`)
    alert(`MODELO DO CUMPUTADOR DE CLASSIFICAÇÃO NOTEBOOK COM MENOR ESTOQUE É: ${modelo[estoque.indexOf(menor)]}`)
}
function prova1(){
    let nomes = []
    let estoque = []
    let classificacao = []
    // entrada de dados
    for(let i=0;i<3;i++){
        nomes.push(prompt(`Informe o nome do computador ${i+1}`))
        let auxEstoque
        do {
            auxEstoque = Number(prompt(`Informe o estoque do computador ${i+1}`))
        }
        while (auxEstoque < 0)
        estoque.push(auxEstoque)
        
        let auxCla
        do {
            auxCla = prompt(`Informe a classificação do computador ${i+1}`).toUpperCase()
        }
        while (auxCla != "GAMER" && auxCla != "NOTEBOOK" && auxCla != "DESKTOP")
        classificacao.push(auxCla)
    }
    let nomeCompra
    let qtdCompra
    let clasCompra 
    for(let i=0;i<4;i++){
        nomeCompra = prompt(`Informe o nome do computador que deseja comprar`)
        qtdCompra = Number(prompt(`Informe a quantidade que deseja comprar`))
        clasCompra = prompt(`Informe a classificação do computador que deseja comprar`).toUpperCase()
        // verifica se o produto existe
        let achou = false
        for(let j=0;j<3;j++){ // para percorrer os vetores dos produtos
            console.log(nomeCompra, nomes[j], clasCompra, classificacao[j])
            if (nomeCompra == nomes[j] && clasCompra == classificacao[j]){
                achou = true
                // verifica se tem estoque
                if (qtdCompra <= estoque[j]){
                    console.log(`Venda realizada com sucesso`)
                    estoque[j] = estoque[j] - qtdCompra
                }
                else {
                    console.log(`Não tem estoque suficiente`)
                }
            }
        }
        if (!achou){
            console.log(`Produto não existe`)
        }
    }
    let maiorEstoque = 0
    let menorEstoque = Infinity
    let achou = false
    for(let i=1;i<3;i++){
        if (classificacao[i] == "NOTEBOOK"){
            achou = true
            if (maiorEstoque > estoque[i]){
                maiorEstoque = estoque[i]
            }
            if (menorEstoque < estoque[i]){
                menorEstoque = estoque[i]
            }
        }
    }
    if (achou){
        console.log(nomes[estoque.indexOf(menorEstoque)])
        console.log(nomes[estoque.indexOf(maiorEstoque)])
    }
}