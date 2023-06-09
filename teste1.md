# *Controle de projetos - teste_técnico_backend*

## Configuração do banco de dados; 
- Crie um aquivo .env e configure o banco de dados desejado seguindo o exemplo abaixo;

- Todos os campos devem ser preenchidos;
```
  DATABASE_URL="postgres://Micro:123456@localhost:5432/teste_tecnico"
  APP_PORT=3000
  DB= teste_tecnico
  DB_USER=Micro
  DB_PASSWORD=123456
  DB_HOST=localhost
  DB_PORT=5432
  DB_DIALECT=postgres
  SECRET_KEY="chaveSecreta"
```
 
## Comandos para inicialização da Api; 
- Apos a configuração do banco de dados basta criar as tabelas e popular o banco de dados seguindo as intruções abaixo; 

- Todas as migrations e seeds ja adicionadas ao projeto, basta executar os seguintes comando no terminal; 
  - Criar todas a tabelas: `npx sequelize-cli db:migrate` 
  - Popular todas as tabelas: `npx sequelize-cli db:seed:all`
  
- Para criação de uma única tabela;
  - `npx sequelize-cli migration:generate --name <nome da migração>`
 
- Para popular uma única tabela;
  - `npx sequelize-cli seed:generate --name<nome do seed>`

- Para iniciar a Api localmente;
  - `npm run dev`

## Usuario Admin 
  - Após a criação das tabelas, será criada uma tabela chamada "admin" que já estará populada com um usuário e senha;   
    - Usuário: `users@admin.com`
    - Senha:  `123456`

### Mais informações no README da aplicação 


# *Controle de projetos - teste_técnico_frontend*

## Comandos para inicialização da aplicação; 

- Para iniciar localmente;
  - `npm run dev`

## Usuario Admin 
  - usuario principal da aplicação;   
    - Usuário: `users@admin.com`
    - Senha:  `123456`
