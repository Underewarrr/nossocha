### Health Status
...
## NossoCha
#### Hobby
Este projto esta sendo feito por Hobby então pode ser que atualizações e novas features demorem a ser implementadas.

#### Sobre o APP
Usuario pode ver os presentes diponiveis e doar um dos presentes diponiveis na lista.

Admin pode adicionar presentes para o usuario escolher, quando um persente é enviado o admin recebe uma notificação e pode aceitar ou recusar o presente recebido.

Admin pode visualizar os presentes aceitados e recusados, assim como os atuais presentes disponiveis para o usuario.

### Testando o app
#### Admin Role
Email: admin@admin.com
Password: teste
#### User Role Não Usado.
Email: user@user.com
Password: teste

#### Melhorias
O projeto pode possuir bugs assim como possiveis erros, ainda não foram implementados teste unitarios para manter uma melhor legibilidade do codigo assim como o eslint e o prettier ainda não estão configurados, o sistema de proteção de rotas pode ser melhorado para manter caminhos acessiveis apenas para o admin, como o projeto não usa o sistema de login do usuario eu o utilizei para ser o do admin, deveria existir 2 meios de proteção sendo um para o usuairo e um para o admin.

### Template
[Use este repositorio para iniciar um template com o sistema de login e auth!
](https://github.com/Underewarrr/template-vercel-serverless-fullstack)

### Vercel
- As funções [Serverless](https://vercel.com/docs/concepts/functions/serverless-functions) permitem que os desenvolvedores escrevam funções em JavaScript e outras linguagens para lidar com autenticação de usuário, envios de formulários, consultas de banco de dados  e muito mais.

- Logs nas funções Serverless.

### NextJS
- Seguindo o padrão da documentação da [vercel + nextjs](https://vercel.com/docs/frameworks/nextjs), você pode entender melhor sobre a organização das rotas da api ou paginas.

#### Front-end Routes :
##### OBS : Para as rotas e as requisições a pasta pages não será incluida a rota final sendo : /user/pagename.

`/pages/user/pagename`
- OBS: Observe que nesse exemplo teriamos um arquivo pagename.ts

- OBS: Se o nome do arquivo/pagina for index.ts então será carregado com o nome da pasta do arquivo exemplo :
`/pages/user/login`
- OBS: Observe que nesse caso teriamos um arquivo index.ts

#### Back-end Routes :
##### OBS : Para as rotas e as requisições a pasta pages não será incluida a rota final sendo : /api/user/pagename.

`/pages/api/user/pagename`
- OBS: Observe que nesse exemplo teriamos um arquivo pagename.ts

- OBS: Se o nome do arquivo/pagina for index.ts então será carregado com o nome da pasta do arquivo exemplo :
`/pages/api/user/login`
- OBS: Observe que nesse caso teriamos um arquivo index.ts

## Como rodar
OBS: Database ainda não configurada nesse repo.
### (Vercel-Pro-Way)
Fork o respositorio, entre no site da [vercel](https://vercel.com/) e importe o projeto, pronto agora é só esperar a vervel criar o dominio e colocar o app online!
### (Vercel-Config)
Após importar o projeto tudo feito, agora espere o build, enquanto isso podemos configurar nossas variaveis de ambiente direamente na vercel.
Infelizmente a vercel não importa diretamente do .env é necessario adicionar na interface do proprio website da vercel.
```
JWT_SECRET = JWT_SECRET
DB_USER = 
DB_PASS = 
DB_NAME =
DB_HOST = www.db4free.net
REACT_APP_API_PORT = 3000
```
### NodeConfig (NPM)
Lembre-se usando o ORM(squelize) é necessario antes rodar as migrations e seeders para popular a sua database.
com o comando `db:reset`
![image](https://github.com/Underewarrr/template-vercel-serverless-fullstack/assets/74227915/b6435c71-2932-4146-ab7a-4a0ebb2a3126)
Para configurar o usuario do Sequelize utilize o .env.example do projeto.


## AuthSystem
O sistema de proteção de rotas funciona com uma hoc [(High Order Component)](https://github.com/Underewarrr/template-vercel-serverless-fullstack/blob/master/pages/hoc/withAuth.tsx), como esse component é recarregado apenas nas rotas que o usuario tem permissão então algumas verificações e dados podem ser salvos e usados nesse component quando necessario!
Para proteger uma rota inicie o component `<ProtectedRoute />`

#### OBS : Ainda esta faltando configurar corretamente o middleware do Jsonwebtoken.

#### 

# Ferramentas
## Front-End
### Frameworks
- React 
- Bootstrap
### JustLibs
- jsonWebToken
- mdb-react-ui-kit
- axios
- react-dom
- swr NOT USED
## Back-End
### Frameworks
- NextJS

### JustLibs
- Sequelize
- Mysql2
### Languages
Typescript, Javascript

## Configuração de ORM (Database)
 - [x] [User](https://github.com/Underewarrr/template-vercel-serverless-fullstack/blob/master/database/models/User.ts)
## Rotas Front-End
- /user
  - /login
  - /register

## Rotas Back-end
- /api
  - /user
    - /login
    - /register

