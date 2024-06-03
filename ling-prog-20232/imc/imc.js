function calcular() {
    // recupera o valor do peso digitado pelo usuario 
    // vamos usar o recurso DOM(document object model)
    // js nao é tipado
    let peso = document.getElementById("peso").value
    // recupera o valor da altura
    let altura = document.getElementById("altura").value
    // calcular o IMC
    let imc = peso / (altura * altura)/*ou altura ** 2, os dois asteriscos é o chapeuzinho */
    // mostrar dados 
    // alert ("O seu IMC é" + imc)
    //template string 
    alert(`O seu IMC é ${imc.toFixed(2)}`)
    //devolve o imc para o HTML 
    document.getElementById("imc").innerHTML = `O seu IMC é: ${imc.toFixed(2)}`
    let classificacao
    if (imc >= 0 && imc < 18.5) {
        classificacao = "MAGREZA"
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = "NORMAL"
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = "SOBREPESO"
    } else if (imc >= 30 && imc < 34.9) {
        classificacao = "OBESIDADE GRAU 1"
    } else if (imc >= 35 && imc < 39.9) {
        classificacao = "OBESIDADE GRAU 2"
    } else if (imc > 40) {
        classificacao = "OBESIDADE GRAU 3"
    }else{
        classificacao="IMPOSSÍVEL CALCULAR PESO OU ALTURA NEGATIVO"
    }
    alert(classificacao)
}