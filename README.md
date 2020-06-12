# Teste de Desenvolvimento Web

Olá RedFox! Meu nome é João Pedro Rangel, desenvolvedor WEB FullStack, usando JavaScript, TypeScript, NodeJs, ReactJS, React Native e Angular.

Para o desafio proposto, optei em desenvolver o Back-End da aplicação, utilizando as tecnologias NodeJS, TypeScript, TypeORM, Express, Multer, e banco de dados PostGres.

## Iniciando a Aplicação

Primeiramente, faça um clone do repositório git clone https://github.com/jprangel7/teste-desenvolvimento-web

Agora, acesse o diretório do projeto e instale as dependências, com Yarn: ```yarn add``` ou NPM: ```npm install```

Após a instalação, use o comando ```yarn dev:server``` ou ```npm dev:server``` para iniciar a aplicação localmente.

## Desenvolvimento

Primeiramente, utilizei o docker para criar uma imagem do PostGres, e gerar um novo banco de dados. Após a criação do banco de dados, utilizei o TypeORM,
um ferramenta de Mapeamento Objeto-Relacional, para criar as migrations e gerar as tabelas do banco de dados e o model Pokemon.


### Funcionalidades / Rotas

As funcionalidades que julguei necessário para um primeiro MVP, Minimum Viable Product (Produto Variável Mínimo), da aplicação foram:

* ``` GET /pokemon/ ```: Retorna todos os Pokemons do banco de dados;

* ``` GET /pokemon/getByName ```: Recebe uma nome (string) e, caso encontre, retorna o pokemon de mesmo nome;

* ``` GET /pokemon/getByType ```: Recebe um tipo (string) e, caso encontre, retorna todos os Pokemons do tipo informado;

* ``` GET /pokemon/:pokedexNumber ```: Recebe um Pokedex Number, e caso encontre, retorna o pokemon de mesmo Pokedex Number;

* ``` POST /pokemon/ ```: Recebe um Pokemon, e cria no banco de dados um novo Pokemon com as informações recebidas. Retorna o Pokemon criado. Ao criar um Pokemon, é gerado automaticamente um id único para o mesmo, usando a biblioteca UUIDv4;

* ``` POST /pokemon/importCSV ```: Recebe um arquivo csv, e cria no banco de dados todos os Pokemons informados no arquivo. Retorna todos os Pokemons criados. Ao criar um Pokemon, é gerado automaticamente um id único para o mesmo, usando a biblioteca UUIDv4. A tratativa do csv é feita utilizando a biblioteca Multer;

* ``` PUT /pokemon/ ```: Recebe um Pokemon e, caso ele exista no banco de dados, atualiza o Pokemon. Retorna o Pokemon atualizado;

* ``` DELETE /pokemon/:id ```: Recebe um id, caso ache um Pokemon de mesmo id no banco de dados, o Pokemon é deletado.
