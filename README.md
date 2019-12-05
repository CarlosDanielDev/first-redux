# Redux Project!

Olá, me chamo carlos Daniel, e hoje vamos falar de Redux!, neste [link](https://github.com/DanPHP7/modulo-react-rocketseat), você confere um tutorial de como inicializar uma aplicação React, Siga os passos até [concluir](https://github.com/DanPHP7/modulo-react-rocketseat#beleza-agora-temos-nosso-padr%C3%A3o-de-c%C3%B3digo-configurado-e-pronto-pra-codar-d) a padronização de código, depois volte para prosseguirmos com nsso projeto  utilizando Redux!

## Roteamento

Bem, agora vamos configurar o esquma de rotas da nossa aplicação React com Redux, primeiro instale um biblioteca chamda `react-router-dom`.

```bash
yarn add react-router-dom
```

Agora, na pasta `src`, crie um arquivo chamado `routes.js`, é nesse arquivo que vamos configurar as rotas da nossa aplicação.

```bash
touch src/routes.js
```
Como de costume, vamos configurar a estruturas das nossas `pages`, dentro da pasta `src`,crie uma pasta com o nome `pages`, e dentro de pages crie 2 `views`, `Home`, `Cart`.
```bash
mkdir src/pages src/pages/Home src/pages/Cart && touch src/pages/Home/index.js src/pages/Cart/index.js
```

> O esquema de pastas deve ficar assim
```
└── pasta-raiz
    ├── node_modules
    ├── public
    │   └── index.html
    ├── src
    │   ├── pages
    │   │   ├── Home
    │   │   │   └── index.js
    │   │   └── Cart
    │   │       └── index.js
    │   ├── App.js
    │   ├── index.js
    │   └── routes.js
    ├── .editorconfig
    ├── .eslintrc.js
    ├── .gitignore
    ├── .prettierrc
    ├── package.json
    ├── README.md
    └── yarn.lock
```
Agora vamos editar o arquivo `routes.js`, deixe-o exatamente assim:

```jsx
import React from 'react';
import { Switch, Route } from 'react-router-dom';
```
