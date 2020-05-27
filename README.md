
<h1 align="center">
Be The Hero
<h2 align="center">
Semana Omnistack 11 By RocketSeat
</h2>
</h1>

<p>
O objetivo deste projeto é criar um app para que ongs possam expor os casos de animais necessitando de ajuda que será consumido por um app mobile onde os usuários podem aceitar ser os heróis dos casos e ajudar a resolver um ou mais dos casos listados. Faz parte de um treinamento disponibilizado pela <b>Rocketseat</b> para ajudar desenvolvedores a firmar seus conhecimentos na Stack NodeJS + React + React Native:
</p>

<p align="center">
  <a href="#small_orange_diamond-deploy">Deploy</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-instalando">Instalando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#books-conhecimento">Conhecimentos adquiridos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#small_orange_diamond-contribuindo">Contribuindo</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#small_orange_diamond-customizando">Customizando</a>
</p>

<p align="center">
  <img alt="BeTheHero" src="img/be-the-hero.gif" width="50%">
</p>

## :small_orange_diamond: Deploy
  
Foi usado o servidor Heroku para o deploy da aplicação, tanto o Backend como o Frontend. A integração contínua com o GitHub também já está setada. Para testar a aplicação siga os passos abaixo.

1. Frontend, acesse: [https://bit.ly/cd_be-the-hero](https://bit.ly/cd_be-the-hero)

2. Mobile, faça o download e instale no Android o arquivo <b>'bethehero_1_0.apk'</b>.

3. Cadastre uma ong e seus respectivos casos. Depois acesse o app no smartphone para interagir com o caso desejado.

## :rocket: Tecnologias

Nesse projeto foram usadas as seguintes tecnologias:

- [Chocolatey](https://chocolatey.org/)
- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Insomnia](https://insomnia.rest/)
- [React](https://pt-br.reactjs.org/)
- [React Native](https://reactnative.dev/)
- [Celebrate](https://www.npmjs.com/package/celebrate)
- [Expo](https://expo.io/)

## :memo: Instalando

1. Faça o clone deste repositório numa pasta desejada.
2. Instale o NodeJS.
3. Entre nas pastas './backend', './frontend' e './mobile' uma por vez e rode os comandos: 

    `$ npm install`
Depois:
    `$ npm install`

4. Certifique-se de que a rota esteja apontando corretamente o ip da sua rede depois de levantar o servidor de backend. A alteração deve ser feita nos arquivos:

> ./frontend/src/services/api.js

> ./mobile/src/services/api.js

## :books: Conhecimento

Foi meu primeiro contato com a Stack e achei fantástica a facilidade de implementação. Outras características que foram marcantes:

- A importância do planejamento antes de codar.
- A estruturação organizada de pastas e arquivos do projeto.
- FlatList ao invés de ListView.
- Controlar o scroll infinito. 
- Uso do Expo para geração do apk e para integração contínua. 

## :small_orange_diamond: Contribuindo

Se encontrar dificuldade para a instalação do NodeJS no Windows através do Chocolatey poderá acessar o link abaixo para obter ajuda:

[Instalando o NodeJS no Windows](https://github.com/clovisdanielcosta/nodejs/)

## :small_orange_diamond: Customizando

Fiz uma pequena customização na parte do Mobile do projeto porque, durante a semana, a parte de descrição dos casos acabou não sendo implementada antes da geração do apk. Abaixo as linhas que foram adicionadas nos arquivos 'index.js' nas pastas de 'Incidents' e 'Detail':

```javascript
        <Text style={styles.incidentProperty}>DESCRIÇÃO:</Text>
        <Text style={styles.incidentValue}>{incident.description}</Text>                       
```                        

## :small_orange_diamond: Agradecimentos

Quero agradecer a RocketSeat pelas contribuições para o meu aprendizado neste projeto. Parabéns pelo trabalho de vocês. 

Muito obrigado!:clap::clap:
