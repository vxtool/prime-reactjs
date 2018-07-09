# Lint

## Sumário

1. [Fluxo do GIT](./01-git-flow.md)
2. [Commits](./02-commits.md)
3. [Arquitetura](./03-architecture.md)
4. [Tecnologias](./04-technologies.md)
5. [Lint](./05-lint.md)
6. [Padrões](./06-patterns.md)

## Regras utilizadas:

- ESLint recomendado : https://eslint.org/docs/rules/
- Google : https://github.com/google/eslint-config-google
- Prettier: https://prettier.io/

## E regras personalizadas:

- Usando arrow function, se tiver apenas 1 paramentro, não usar o parenteses;

ex:

```
item => item
(item, index) => ${item}-${index}
```

- Ordem de importacao de arquivos. Ordem:
  - dependencias no node_modules
  - arquivos internos - js
  - arquivos internos - styl

ex:

```
import axios from 'axios';
import jwtDecode from 'jwt-decode';

import { configApi, localStorageConfig } from '../../config';
```

- Não usar index para a propriedade key

ex:

```
[{ id: '1233' }].map(item => <Component key={item.id} /> )
```

- Dar preferencia para spread operator

ex:

```
const { page } = objeto.subnivel.location;
```

- Declaracao de objeto com as propriedades na mesma linha, irá quebrar caso tenha mais de 120 colunas, colocando uma embaixo da outra ( o mesmo serve para atributos de um componente ).

ex:

```
const { getAdvertisings, changeRunningAdvertising, listAdvertisings, location } = this.props;

const {
getAdvertisings,
changeRunningAdvertising,
listAdvertisings,
location,
example1,
example2,
example3,
} = this.props;
```

**[⬆ voltar para o topo](#markdown-header-sumario)**
