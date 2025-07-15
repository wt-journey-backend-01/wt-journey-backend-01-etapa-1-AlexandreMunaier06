## Visão Geral do Projeto

Este projeto consiste em um pequeno servidor web que apresenta o cardápio da hamburgueria e permite que os clientes enviem sugestões de novos lanches. É uma excelente oportunidade para praticar conceitos fundamentais de back-end com Node.js, como a criação de servidores, o gerenciamento de rotas e o tratamento de formulários.

## Estrutura de Arquivos

```bash
seu-repositório/
├── public/
│   ├── css/
│   │   └── style.css
│   ├── images/
│   │    └── logo.png (opcional)
│   ├── data
│   │     └── lanches.json
│   └── 404.html (opcional)
│
├── views/
│   ├── index.html
│   └── contato.html        
│
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── server.js
```

- **`public/`**: Contém todos os arquivos estáticos que serão servidos diretamente ao cliente, como folhas de estilo (CSS), imagens, arquivos JSON e scripts do lado do cliente.
- **`views/`**: Contém os arquivos HTML estáticos que serão servidos por cada endpoint.
- **`server.js`**: O coração da nossa aplicação, onde o servidor Express será configurado e todas as rotas serão definidas.
- **`package.json`**: Arquivo de manifesto do projeto Node.js, que inclui as dependências (como o Express).
- **`README.md`**: Este arquivo, com a documentação do projeto.

## Como Iniciar o Servidor

Siga os passos abaixo para configurar e rodar o projeto em sua máquina local.

**1. Crie o projeto seguindo a estrutura**

Clone o repositório e execute o seguinte comando: 

```npm init -y```

Depois, crie os repositórios e arquivos e diretórios seguindo a estrutura de exemplo.

**2. Instale as Dependências**

Navegue até o diretório raiz do projeto pelo terminal e instale o Express.js:

```bash
npm install express
```
Se você estiver recebendo os dados do formulário via POST, precisará de um middleware para interpretar o corpo da requisição. O Express já inclui o express.urlencoded.

**3. Inicie o Servidor**

Execute o seguinte comando no terminal:

```bash
npm start
```

O servidor será iniciado, e você deverá ver uma mensagem no console, por exemplo:

Servidor da DevBurger rodando em http://localhost:3000

Agora, você pode abrir seu navegador e acessar http://localhost:3000. O texto "Hello World!" deverá ser exibido no seu navegador.

