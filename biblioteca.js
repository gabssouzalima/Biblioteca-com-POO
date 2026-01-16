// =======================
// CLASSE LIVRO
// =======================
class Livro {
    #emprestado = false;

    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }

    marcarComoEmprestado() {
        if (this.#emprestado) {
            throw new Error("Livro já está emprestado.");
        }
        this.#emprestado = true;
    }

    marcarComoDisponivel() {
        if (!this.#emprestado) {
            throw new Error("Livro já está disponível.");
        }
        this.#emprestado = false;
    }

    estaDisponivel() {
        return !this.#emprestado;
    }
}

// =======================
// CLASSE USUARIO
// =======================
class Usuario {
    #livrosEmprestados = [];

    constructor(nome) {
        this.nome = nome;
    }

    adicionarLivro(livro) {
        if (this.#livrosEmprestados.includes(livro)) {
            throw new Error("Usuário já possui este livro.");
        }
        this.#livrosEmprestados.push(livro);
    }

    removerLivro(livro) {
        const index = this.#livrosEmprestados.indexOf(livro);
        if (index === -1) {
            throw new Error("Usuário não possui este livro.");
        }
        this.#livrosEmprestados.splice(index, 1);
    }

    possuiLivro(livro) {
        return this.#livrosEmprestados.includes(livro);
    }

    consultarQuantidadeLivros() {
        return this.#livrosEmprestados.length;
    }
}

// =======================
// CLASSE BIBLIOTECA
// =======================
class Biblioteca {
    #livros = [];
    #usuarios = [];

    cadastrarLivro(livro) {
        this.#livros.push(livro);
    }

    cadastrarUsuario(usuario) {
        this.#usuarios.push(usuario);
    }

    emprestarLivro(livro, usuario) {
        if (!this.#livros.includes(livro)) {
            throw new Error("Livro não pertence a esta biblioteca.");
        }

        if (!this.#usuarios.includes(usuario)) {
            throw new Error("Usuário não cadastrado na biblioteca.");
        }

        livro.marcarComoEmprestado();
        usuario.adicionarLivro(livro);
    }

    devolverLivro(livro, usuario) {
        if (!usuario.possuiLivro(livro)) {
            throw new Error("Este usuário não possui este livro.");
        }

        livro.marcarComoDisponivel();
        usuario.removerLivro(livro);
    }
}


const livro1 = new Livro("É Assim Que Acaba", "Collen Hoover");
const livro2 = new Livro("Vidas Secas", "Graciliano Ramos");

const usuario1 = new Usuario("Gabriel");

const biblioteca = new Biblioteca();

biblioteca.cadastrarLivro(livro1);
biblioteca.cadastrarLivro(livro2);
biblioteca.cadastrarUsuario(usuario1);

// Testes com tratamento de erros
try {
    biblioteca.emprestarLivro(livro1, usuario1);
    biblioteca.emprestarLivro(livro1, usuario1); // erro
} catch (erro) {
    console.error("Erro:", erro.message);
}

try {
    biblioteca.devolverLivro(livro1, usuario1);
    biblioteca.devolverLivro(livro2, usuario1); // erro
} catch (erro) {
    console.error("Erro:", erro.message);
}
