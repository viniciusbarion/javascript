function funcao(){
    var vet = []
    for(var i=0; i<5; i++){
        var objeto = {}
        // coloca dados no objeto
        objeto.codigo = Number(prompt("Código"))
        objeto.number = prompt("Nome")
        objeto.qtde = Number(prompt("Qtde"))
        objeto.preco = Number(prompt("Preço"))
        // coloca objeto no vetor
        vet.push(objeto)
    }
}