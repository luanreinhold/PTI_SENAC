import { adicionarEstoque, cadastrarHq, removerEstoque, removerProduto, listarProdutos} from './function';

import * as promptSync from 'prompt-sync'

import { HQ } from '../classes/Hq';

const prompt = promptSync();

export function menu(produtos) {
    let escolha;
    while (escolha !== "0") {
        console.log("[1] Novo\n[2] Listar Produtos\n[3] Remover Produtos\n[4] Entrada Estoque\n[5] Saída Estoque\n[0] Sair");
        escolha = prompt("digite uma opção: ");
        let escolhaSwitch = parseInt(escolha);
        switch (escolhaSwitch) {
            // opção para cadastrar nova HQ
            case 1: {
                let cadastro: any = cadastrarHq()
                let hQ = new HQ(
                cadastro[0], // Título
                cadastro[1], // Número da edição
                cadastro[2], // Autor
                cadastro[3], // Ano de publicação
                cadastro[5], // Gênero
                cadastro[4]  // Idiomas 
                );
                produtos.push(hQ);
                break;
            }

            // opção para listar todos os livros
            case 2: {
                if(!produtos[0]) {
                    console.log("Nenhum produto cadastrado no sistema! ")
                }
                else {
                    listarProdutos(produtos)
                }
                break;
            }

            // case responsável por remover o produto do array informado pelo usuario
            case 3: {
                removerProduto(produtos)
                break;
            }

            // case responsável por adicionar o livro no estoque informado pelo usuario
            case 4: {
                adicionarEstoque(produtos)
                break;
            }

            // case responsável por diminuir o estoque do livro informado pelo usuario
            case 5: {
                removerEstoque(produtos)
                break;
            }
            // case para encerrar o loop
            case 0: {
                console.log("O programa foi encerrado! ")
                break;
            }
        }
    }
}