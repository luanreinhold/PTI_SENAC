export class HQ {
    private estoque : number = 0
    constructor(
        protected titulo: string,
        protected numeroEdicao: string | number,
        protected autor: string,
        protected anoPublicacao: number,
        protected genero: string[],
        protected idiomas: string
    ) {
        
    }

    get getEstoque() {
        return this.estoque
    }

    set setEstoque(nm : any) {
        this.estoque = nm
    }

    get getTitulo () {
        return this.titulo
    }



    // listar as propriedades do produto, como se fosse toString() do Java
    listarProduto(): void {
        console.log(`Título: ${this.titulo}`);
        console.log(`Edição: ${this.numeroEdicao}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Ano de Publicação: ${this.anoPublicacao}`);
        console.log(`Estoque: ${this.getEstoque}`);
        console.log(`Gênero: ${this.genero.join(', ')}`);
        console.log(`Idiomas: ${this.idiomas}`);
        console.log("***************************************")
    }

    // exibir quantidade em estoque
    listarEstoque() : void {
        console.log("Em estoque: " + this.getEstoque)
    }


    // adicionar quantia ao produto em estoque
    adicionarEstoque(qtd: number) : void {
        if (qtd <= 0) {
            console.log("insira um número válido! ")
            return;
        }
        const emEstoque = this.getEstoque + qtd
        this.setEstoque = emEstoque
    }

    // remover quantia ao produto em estoque
    removerEstoque(qtd: number) : void {
        if (qtd <= 0) {
            console.log("insira um número válido! ")
            return;
        }
        else if (qtd > this.getEstoque) {
            console.log("Quantidade informada maior do que quantia disponível em estoque! ")
            return;
        }
        
        const emEstoque = this.getEstoque - qtd
        this.setEstoque = emEstoque
    }
}

const Manga = new HQ(
  "Aventuras do Super-Herói", // Título
  5, // Número da edição
  "Autor Desconhecido", // Autor
  2022, // Ano de publicação
  ["Ação e Aventura"], // Gênero
  "Português" // Idiomas
);




