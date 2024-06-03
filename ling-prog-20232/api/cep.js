// função deve ser assincrona pois tem uma chamada sincrona dentro dela
async function api(){
    //recupera cep informado pelo usuário
    let cep= Number(document.getElementById("cep").value)
    //vamos chamar a API usando a função fetch do JS
    // await é sincrono, pois teremos que aguardar a resposta para continuar 
    let respostas= await fetch(`https://viacep.com.br/ws/${cep}/json`)
    // os dados chegaram no formato string, vamos converter em JSON
    let dados = await respostas.json()
    // coloca o logradouro no formulario 
    document.getElementById("logradouro").value = dados.logradouro
    document.getElementById("complemento").value = dados.complemento
    document.getElementById("bairro").value = dados.bairro
    document.getElementById("localidade").value = dados.localidade
    document.getElementById("uf").value = dados.uf
    document.getElementById("ibge").value = dados.ibge
    document.getElementById("ddd").value = dados.ddd
    
}