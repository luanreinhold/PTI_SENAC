"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menu = void 0;
var function_1 = require("./function");
var promptSync = require("prompt-sync");
var Hq_1 = require("../classes/Hq");
var prompt = promptSync();
function menu(produtos) {
    var escolha;
    while (escolha !== "0") {
        console.log("[1] Novo\n[2] Listar Produtos\n[3] Remover Produtos\n[4] Entrada Estoque\n[5] Saída Estoque\n[0] Sair");
        escolha = prompt("digite uma opção: ");
        var escolhaSwitch = parseInt(escolha);
        switch (escolhaSwitch) {
            // opção para cadastrar nova HQ
            case 1: {
                var cadastro = (0, function_1.cadastrarHq)();
                var hQ = new Hq_1.HQ(cadastro[0], // Título
                cadastro[1], // Número da edição
                cadastro[2], // Autor
                cadastro[3], // Ano de publicação
                cadastro[5], // Gênero
                cadastro[4] // Idiomas 
                );
                produtos.push(hQ);
                break;
            }
            // opção para listar todos os livros
            case 2: {
                if (!produtos[0]) {
                    console.log("Nenhum produto cadastrado no sistema! ");
                }
                else {
                    (0, function_1.listarProdutos)(produtos);
                }
                break;
            }
            // case responsável por remover o produto do array informado pelo usuario
            case 3: {
                (0, function_1.removerProduto)(produtos);
                break;
            }
            // case responsável por adicionar o livro no estoque informado pelo usuario
            case 4: {
                (0, function_1.adicionarEstoque)(produtos);
                break;
            }
            // case responsável por diminuir o estoque do livro informado pelo usuario
            case 5: {
                (0, function_1.removerEstoque)(produtos);
                break;
            }
            // case para encerrar o loop
            case 0: {
                console.log("O programa foi encerrado! ");
                break;
            }
        }
    }
}
exports.menu = menu;
