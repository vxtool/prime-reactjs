## Pré-requisitos

- [Node >= v8.9.4](https://nodejs.org/en/)
- NPM >= v5.6.0
- [Yarn >= v1.3.2](https://yarnpkg.com/en/docs/install#linux-tab) or `npm install -g yarn`

### Pré-requisitos para o desenvolvimento

- **Editor Config**:
  - [Atom](https://github.com/sindresorhus/atom-editorconfig#readme)
  - [Sublime text](https://github.com/sindresorhus/editorconfig-sublime#readme)
  - [Brackets](https://github.com/kidwm/brackets-editorconfig/)
  - [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
  - [Vim](https://github.com/editorconfig/editorconfig-vim#readme)
- **ESLint**:
  - [Atom](https://atom.io/packages/linter-eslint)
  - [Sublime text](https://github.com/roadhump/SublimeLinter-eslint)
  - [IntelliJ IDEA, RubyMine, WebStorm, PhpStorm, PyCharm](http://plugins.jetbrains.com/plugin/7494)
  - [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Vim](https://github.com/scrooloose/syntastic/tree/master/syntax_checkers/javascript)
- **Prettier**:
  - [Atom](https://atom.io/packages/prettier-atom)
  - [Sublime text](https://github.com/jonlabelle/SublimeJsPrettier)
  - [IntelliJ IDEA, RubyMine, WebStorm, PhpStorm, PyCharm](https://plugins.jetbrains.com/plugin/10456-prettier)
  - [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [Vim](https://github.com/prettier/vim-prettier)
- **Stylint**:
  - [Atom](https://atom.io/packages/linter-stylint)
  - [Sublime text](https://packagecontrol.io/packages/SublimeLinter-contrib-stylint)
  - [IntelliJ IDEA, RubyMine, WebStorm, PhpStorm, PyCharm](https://plugins.jetbrains.com/plugin/9162-stylint)
  - [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=vtfn.stylint)

## Instalação

```bash
yarn
```

*Caso não seja possível usar o `yarn`, o `npm run` pode ser usado.

## Comandos

- **yarn start**: levanta um servidor de desenvolvimento em [http://localhost:8000](http://localhost:8000)
- **yarn lint**: verifica o code style e patterns de react e es6.
- **yarn lint:fix**: verifica o code style e patterns de react e es6 e corrige coisas simples.
- **yarn ci**: roda os tests e o lint
- **yarn build**: gera a pasta `dist`, que vai para produção

## Criar Tag

Exemplo de tag atual: 1.0.0-beta.4

Comando:

```bash
yarn release 1.0.0-beta.5
```

Perguntas e respostas:

```sh
- ? Show updated files? `Yes`
- M  package.json

- ? Commit (Release 1.0.0-beta.5)? `Yes`
- ? Tag (1.0.0-beta.5)? `Yes`
- ? Push? `Yes`
- ? Publish "prime-reactjs" to npm? `No`
```

## Deploy

É necessário ter o arquivo de configuração para o deploy, na pasta do seu usuário na sua máquina.

```
// aws-credential-prime-reactjs.json
{
  "accessKeyId": "",
  "secretAccessKey": ""
}
```

### AWS - Configuração do bucket (S3)

Para os arquivos ficarem disponiveis publicamente com o deploy, deverá ser atualizada a politica do bucket com o código abaixo:

- Acessar no console: Clicar no bucket >  `Permissions` > `Bucket Policy`
- No código abaixo: alterar `nome_do_bucket`
- Posteriormente: Só executar o comando de deploy `deploy ou deploy:staging`

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::nome_do_bucket/*"
    }
  ]
}
```

## Manual

1. [Fluxo do GIT](./docs/manual/01-git-flow.md)
2. [Commits](./docs/manual/02-commits.md)
3. [Arquitetura](./docs/manual/03-architecture.md)
4. [Tecnologias](./docs/manual/04-technologies.md)
5. [Lint](./docs/manual/05-lint.md)
6. [Padrões](./docs/manual/06-patterns.md)

**[⬆ voltar para o topo](#markdown-header-pre-requisitos)**
