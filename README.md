# Sistema de Biblioteca em JavaScript (POO)

## Descrição

Este projeto consiste em um sistema de biblioteca desenvolvido em JavaScript, com foco na aplicação prática dos conceitos de Programação Orientada a Objetos (POO).

O sistema simula o cadastro de livros e usuários, bem como o controle de empréstimos e devoluções, aplicando regras de negócio e encapsulamento.

O objetivo principal é demonstrar organização de código, lógica e boas práticas em orientação a objetos.

---

## Conceitos Aplicados

- Programação Orientada a Objetos (POO)
- Classes e métodos
- Encapsulamento com propriedades privadas
- Controle de estado dos objetos
- Regras de negócio
- Validações para evitar estados inconsistentes

---

## Estrutura do Sistema

### Livro

Responsável por representar um livro da biblioteca.

- Armazena título e autor
- Controla o estado de empréstimo
- Permite marcar o livro como emprestado ou disponível
- Protege o estado interno por meio de encapsulamento

---

### Usuario

Responsável por representar um usuário da biblioteca.

- Gerencia os livros emprestados
- Permite adicionar e remover livros
- Verifica se o usuário possui determinado livro
- Controla a quantidade de livros emprestados

---

### Biblioteca

Responsável pelas regras centrais do sistema.

- Cadastro de livros
- Cadastro de usuários
- Controle de empréstimos
- Controle de devoluções
- Validações para impedir operações inválidas

---
