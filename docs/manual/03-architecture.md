# Architecture

## Sumário

1. [Fluxo do GIT](./01-git-flow.md)
2. [Commits](./02-commits.md)
3. [Arquitetura](./03-architecture.md)
4. [Tecnologias](./04-technologies.md)
5. [Lint](./05-lint.md)
6. [Padrões](./06-patterns.md)

## Pastas

```sh
├── build-scripts
│   └── api
├── dist
├── docs
│   └── manual
├── helpers
│   └── component
├── images
├── server
├── source
│   ├── components
│   │   ├── form
│   │   ├── header
│   │   ├── loading
│   │   └── menu
│   ├── config
│   ├── helpers
│   |   ├── auth
│   │   └── url
│   ├── json
│   ├── middlewares
│   ├── reducers
│   ├── styles
│   │   ├── base
│   │   ├── components
│   │   └── partials
│   └── views
│       ├── actions
│       ├── advertising
│       ├── create-action
│       └── create-advertising
├── tests
│   ├── specs
│   └── utils
└── webpack
```

## Componentes

  - components
    - button
      - button-component.js `component`
      - button.styl `style`
      - button.story.js `storybook`
      - button.test.js `tests`
      - index.js

## CLI

### Sem redux

```bash
./helpers/component/create.sh component-name path
```

```sh
└── component-name
    ├── component-name/index.js
    ├── component-name/component-name-component.js
    └── component-name/component-name.test.js
```

### Com redux

```bash
./helpers/component/create-with-redux.sh component-name path
```

```sh
└── component-name
    ├── component-name/index.js
    ├── component-name/component-name-actions.js
    ├── component-name/component-name-component.js
    ├── component-name/component-name-constants.js
    ├── component-name/component-name-container.js
    ├── component-name/component-name-reducer.js
    └── component-name/component-name.test.js
```

**[⬆ voltar para o topo](#markdown-header-sumario)**
