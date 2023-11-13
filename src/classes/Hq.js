"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HQ = void 0;
var HQ = /** @class */ (function () {
    function HQ(titulo, numeroEdicao, autor, anoPublicacao, genero, idiomas) {
        this.titulo = titulo;
        this.numeroEdicao = numeroEdicao;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.genero = genero;
        this.idiomas = idiomas;
        this.estoque = 0;
    }
    Object.defineProperty(HQ.prototype, "getEstoque", {
        get: function () {
            return this.estoque;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HQ.prototype, "setEstoque", {
        set: function (nm) {
            this.estoque = nm;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HQ.prototype, "getTitulo", {
        get: function () {
            return this.titulo;
        },
        enumerable: false,
        configurable: true
    });
    // listar as propriedades do produto, como se fosse toString() do Java
    HQ.prototype.listarProduto = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo));
        console.log("Edi\u00E7\u00E3o: ".concat(this.numeroEdicao));
        console.log("Autor: ".concat(this.autor));
        console.log("Ano de Publica\u00E7\u00E3o: ".concat(this.anoPublicacao));
        console.log("Estoque: ".concat(this.getEstoque));
        console.log("G\u00EAnero: ".concat(this.genero.join(', ')));
        console.log("Idiomas: ".concat(this.idiomas));
        console.log("***************************************");
    };
    // exibir quantidade em estoque
    HQ.prototype.listarEstoque = function () {
        console.log("Em estoque: " + this.getEstoque);
    };
    // adicionar quantia ao produto em estoque
    HQ.prototype.adicionarEstoque = function (qtd) {
        if (qtd <= 0) {
            console.log("insira um número válido! ");
            return;
        }
        var emEstoque = this.getEstoque + qtd;
        this.setEstoque = emEstoque;
    };
    // remover quantia ao produto em estoque
    HQ.prototype.removerEstoque = function (qtd) {
        if (qtd <= 0) {
            console.log("insira um número válido! ");
            return;
        }
        else if (qtd > this.getEstoque) {
            console.log("Quantidade informada maior do que quantia disponível em estoque! ");
            return;
        }
        var emEstoque = this.getEstoque - qtd;
        this.setEstoque = emEstoque;
    };
    return HQ;
}());
exports.HQ = HQ;
var Manga = new HQ("Aventuras do Super-Herói", // Título
5, // Número da edição
"Autor Desconhecido", // Autor
2022, // Ano de publicação
["Ação e Aventura"], // Gênero
"Português" // Idiomas
);
