const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

const lanches = require('./public/data/lanches.json');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


app.get('/sugestao', (req, res) => {
  const { nome, ingredientes } = req.query;

  const page = `
    <html>
      <head><title>Obrigado pela Sugestão!</title></head>
      <body>
        <h1>Obrigado pela sua sugestão, ${nome}!</h1>
        <p>Ingredientes sugeridos: ${ingredientes}</p>
        <a href="/">Voltar para o Início</a>
      </body>
    </html>
  `;
  res.status(200).send(page);
});

app.get('/contato', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contato.html'));
});

app.post('/contato', (req, res) => {
  const { nome, email, assunto, mensagem } = req.body;

  const page = `
    <html>
      <head><title>Mensagem Recebida</title></head>
      <body>
        <h1>Obrigado pelo seu contato, ${nome}!</h1>
        <p>Email: ${email}</p>
        <p>Assunto: ${assunto}</p>
        <p>Mensagem: ${mensagem}</p>
        <a href="/">Voltar para o Início</a>
      </body>
    </html>
  `;
  res.status(200).send(page);
});


app.get('/api/lanches', (req, res) => {
  res.status(200).json(lanches);
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor da DevBurger rodando em localhost:${PORT}`);
});