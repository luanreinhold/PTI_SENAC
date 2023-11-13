"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listarProdutos = exports.removerEstoque = exports.adicionarEstoque = exports.removerProduto = exports.cadastrarHq = void 0;
var promptSync = require("prompt-sync");
var prompt = promptSync();
function cadastrarHq() {
    var titulo = prompt("Insira o nome da HQ: ");
    var edicao = prompt("Insira a edição da HQ: ");
    var autor = prompt("Insira o nome do autor: ");
    var ano = parseInt(prompt("Insira o ano de publicação: "));
    var idioma = prompt("Insira o idioma disponível: ");
    var generos = [];
    var decisao = prompt("Você deseja inserir mais de um gênero? Insira S / N");
    decisao = decisao.toLowerCase();
    if (decisao == "n") {
        var genero = prompt("Insira o gênero : ");
        generos.push(genero);
    }
    else {
        var generosAr = [];
        var decisao_1;
        while (decisao_1 != "n") {
            var genero = prompt("Insira o gênero desejado : ");
            generosAr.push(genero);
            decisao_1 = prompt("Você quer adicionar mais um gênero, Insira S / N");
            decisao_1 = decisao_1.toLowerCase();
        }
        generos.push.apply(generos, generosAr);
    }
    return [titulo, edicao, autor, ano, idioma, generos];
}
exports.cadastrarHq = cadastrarHq;
function removerProduto(produtos) {
    var op = parseInt(prompt("digite a posição da hq : "));
    if (produtos[op] == undefined || !produtos[op]) {
        console.log("livro não existente na posição informada! ");
    }
    else {
        console.log("Livro " + produtos[op].getTitulo + " removido com sucesso!");
        produtos.splice(op, 1);
    }
}
exports.removerProduto = removerProduto;
function adicionarEstoque(produtos) {
    var opt = parseInt(prompt("Digite a posição do livro que deseja aumentar o estoque: "));
    var qtd = parseInt(prompt("Digite a quantidade:  "));
    if (opt >= produtos.length || qtd <= 0) {
        console.log("Posição não encontrada ou número negativo. ERRO!");
    }
    else {
        produtos[opt].adicionarEstoque(qtd);
    }
}
exports.adicionarEstoque = adicionarEstoque;
function removerEstoque(produtos) {
    var pos = parseInt(prompt("Digite a posição do livro que deseja diminuir no estoque: "));
    var qtd = parseInt(prompt("Digite a quantidade:  "));
    if (pos >= produtos.length || qtd <= 0) {
        console.log("Posição não encontrada ou número negativo. ERRO!");
    }
    else {
        produtos[pos].removerEstoque(qtd);
    }
}
exports.removerEstoque = removerEstoque;
function listarProdutos(produtos) {
    for (var _i = 0, produtos_1 = produtos; _i < produtos_1.length; _i++) {
        var produto = produtos_1[_i];
        produto.listarProduto();
    }
}
exports.listarProdutos = listarProdutos;
