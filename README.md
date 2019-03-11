# **Site do casamento Danilo & Jéssica**

Site criado para apresentar todos os detalhes do casamento aos amigos, familiares e convidados em geral.

# Tecnologias
Para o desenvolvimento foram utilizadas as seguintes tecnologias:
- [NodeJS](https://nodejs.org/en/)
  - [Express](https://expressjs.com/)
  - [EJS](https://ejs.co/)
  
- [Bootstrap](https://getbootstrap.com/)

- [MongoDB](https://www.mongodb.com/)
  - [Mongoose](https://mongoosejs.com/)

- [SASS](https://sass-lang.com/)

- JavaScript

# Rodando a aplicação

Para rodar a aplicação é necessário a instalação do [NodeJS](https://nodejs.org/en/) versão 8+ e do [MongoDB](https://www.mongodb.com/).

Após isso, siga os passos à seguir:

1. Crie o arquivo email.js na raiz da aplicação e configure o email que será utilizado para envio dos emails em ambiente de desenvolvimento seguindo o exemplo à seguir:


```
module.exports = {
  host: 'your-host',
  port: 0,
  secureConnection: false,
  requireTLS: false,
  user: 'your-user',
  password: 'your-password',
}
```

2. Instale as dependências da aplicação com o comando:

npm install


3. Inicie a aplicação com o comando:

npm start

Após isso a aplicação estará disponível no endereço:

http://localhost:3000/
