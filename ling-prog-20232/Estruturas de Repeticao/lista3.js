function exe1(){
    let cont2=1
    while (cont2<=5) {
        let a = Number(prompt("informe o valor de A"))
        let b = Number(prompt("informe o valor de B"))
        let c = Number(prompt("informe o valor de C"))
        let d = Number(prompt("informe o valor de D"))
        document.getElementById("ordemDi").innerHTML =`Ordem digitada: ${a},${b},${c},${d} `
        let cont=1
    
        while (cont<=3) {
            if (a>b) {
                let aux=a
                a=b
                b=aux
            }
            if (b>c) {
                let aux= b
                b=c
                c=aux
            }
            if (c>d) {
                let aux=c
                c=d
                d=aux
            }
            cont++
        }
        alert(`Ordem crescente: ${a},${b},${c},${d } `)
        alert(`Ordem decrescente: ${d},${c},${b},${a} `)
        cont2++
    }
}
function exe2(){
    let qnt= 120
    const custo=200
    let corpo=``
    let lucro=0
    let maiorLucro=0
    let maiorPreco=0
    let maiorQnt=0
    for (let preco = 5; preco >= 1; preco= preco-0.5){
        let lucro = ((preco * qnt) - custo)
        if (lucro >maiorLucro) {
            maiorLucro= lucro
            maiorPreco= preco
            maiorQnt= qnt
        }
        corpo = corpo + `<tr> <td> ${preco.toFixed(2)} </td> <td> ${qnt} </td> <td> ${custo.toFixed(2)}</td> <td>${lucro.toFixed(2)} </td> </tr>`
        qnt=qnt+26
    }
    document.getElementById("corpo").innerHTML = corpo
}
function exe5(){
    let corpo =``
    for (let tabuada = 1; tabuada<=10; tabuada++) {
        for (let fator1 = 1; fator1 <=10; fator1++) {
         corpo = corpo +` <tr> <td>${tabuada}</td> <td> x ${fator1} </td> <td> = ${tabuada*fator1}</td> </tr>`
        }
    }
    document.getElementById("corpo").innerHTML = corpo
}

