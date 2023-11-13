import * as promptSync from 'prompt-sync'
const prompt = promptSync();

export function cadastrarHq() {
    let titulo = prompt("Insira o nome da HQ: ");
    let edicao = prompt("Insira a edição da HQ: ");
    let autor = prompt("Insira o nome do autor: ");
    let ano = parseInt(prompt("Insira o ano de publicação: "));
    let idioma = prompt("Insira o idioma disponível: ");
    let generos : string[] | string = [];

    let decisao = prompt("Você deseja inserir mais de um gênero? Insira S / N")
    decisao = decisao.toLowerCase()

    
    if (decisao == "n") {
        let genero = prompt("Insira o gênero : ");
        generos.push(genero)

    } else {
        let generosAr : string[] = []
        let decisao;
        while (decisao != "n") {
            let genero : string = prompt("Insira o gênero desejado : ");
            generosAr.push(genero)
            decisao = prompt("Você quer adicionar mais um gênero, Insira S / N")
            decisao = decisao.toLowerCase()
        }
        generos.push(...generosAr)
    }

    return [titulo, edicao, autor, ano, idioma, generos]

}



export function removerProduto(produtos): void {
    let op = parseInt(prompt("digite a posição da hq : "));
    if (produtos[op] == undefined || !produtos[op]) {
        console.log("livro não existente na posição informada! ");
    }
    else {
        console.log("Livro " + produtos[op].getTitulo + " removido com sucesso!");
        produtos.splice(op, 1);
    }
}

export function adicionarEstoque(produtos): void {
    let opt = parseInt(prompt("Digite a posição do livro que deseja aumentar o estoque: "))
    let qtd = parseInt(prompt("Digite a quantidade:  "))
    if (opt >= produtos.length || qtd <= 0 ) {
        console.log("Posição não encontrada ou número negativo. ERRO!")
    }
    else {
        produtos[opt].adicionarEstoque(qtd)
    }
}

export function removerEstoque(produtos) : void {
    let pos = parseInt(prompt("Digite a posição do livro que deseja diminuir no estoque: "));
    let qtd = parseInt(prompt("Digite a quantidade:  "));

    if (pos >= produtos.length || qtd <= 0 ) {
        console.log("Posição não encontrada ou número negativo. ERRO!")
    }
    else {
        produtos[pos].removerEstoque(qtd)
    }
}

export function listarProdutos(produtos) : void {
    for (let produto of produtos) {
        produto.listarProduto()
    }
}