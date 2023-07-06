# Teste Leadster

## Experiência de Teste

Acredito que tenha chegado próximo ao que eu queria no teste. Não tive tempo para refatorar completamente, mas está bastante explicativo e seguindo boas práticas. Espero que goste do site!

## Decisões Tomadas

Decidi desenvolver o projeto de forma escalável, com componentes reutilizáveis e muito mais. Utilizei um template base, onde apenas os conteúdos das rotas precisam ser alterados. Todos os componentes foram testados e documentados com o Storybook, garantindo uma aplicação altamente escalável.

## Organização do Código

### src

- Este diretório contém todo o código referente ao site.

### app

- Contém todas as rotas do site.

### components

- Este diretório contém todos os componentes do site, incluindo sua documentação e testes. Além disso, esses componentes podem ser reutilizáveis em outros contextos.

### images

- Contém todas as imagens utilizadas no site.

### styles

- Contém o estilo global do site e variáveis globais reutilizáveis.

### template

- Contém o template base que é utilizado em toda a aplicação.

### utils

- Contém códigos reutilizáveis do site.

## Funcionalidades

A seguir estão as principais funcionalidades do projeto:

1. Navegação no site: O site oferece uma interface intuitiva e fácil de usar, permitindo que os usuários naveguem por diferentes seções e páginas.

2. Visualização de vídeos: Os usuários podem clicar em vídeos para assistir o conteúdo multimídia disponível. O projeto suporta a reprodução de vídeos em diferentes formatos e oferece uma experiência de visualização agradável.

3. Menu dinâmico em dispositivos móveis: Quando acessado por dispositivos móveis, o site apresenta um menu dinâmico, adaptado às telas menores, facilitando a navegação e a descoberta de conteúdo.

4. Escalabilidade: O projeto foi desenvolvido com foco na escalabilidade, permitindo futuras adições ou alterações de funcionalidades de forma eficiente. A arquitetura e o código foram organizados de maneira modular e extensível.

## Instruções de Instalação e Execução

```bash
#instale as dependencias
$ npm install ou yarn
```

Após a instalação das dependências, você está liberado para executar os testes, documentação e a aplicação.

### Testes

```bash
# execulte os testes
$ npm run test or yarn test
```

### Documentação dos componentes (Storybook)

```bash
# Execute o Storybook
$ npm run sb ou yarn sb
```

### Executar o site

```bash
$ npm run dev ou yarn dev
```

### Site em Produção

```bash
# 1
$ npm run build ou yarn build

#2
$ npm start ou yarn start

```

### Link do site em deploy

[link do site em deploy](https://site-leadster-joao-eduardo.vercel.app/)
