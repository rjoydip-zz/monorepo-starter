# monorepo-starter

[![Build Status](https://travis-ci.org/rjoydip/monorepo-starter.svg?branch=master)](https://travis-ci.org/rjoydip/monorepo-starter)
[![Build status](https://ci.appveyor.com/api/projects/status/qe5x7i3ift8q7rkv/branch/master?svg=true)](https://ci.appveyor.com/project/rjoydip/monorepo-starter/branch/master)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![License](https://img.shields.io/npm/l/make-coverage-badge.svg)](https://github.com/rjoydip/monorepo-starter/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request)

> Lerna javascript monorepo project starter.

## Features

- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [Jest](https://jestjs.io/)
- [lerna](https://lernajs.io/)

## Requirements

- [Node.js](http://nodejs.org/) >= 6
- [Yarn](https://yarnpkg.com/lang/en/) >= 1

## Install

```
$ git clone https://github.com/rjoydip/monorepo-starter.git
$ cd monorepo-starter
$ npm install
```

## Structure

Inside monorepo.

```
monorepo-starter
└── packages
    ├── cli       # Project CLI
    └── core      # Core modules
```

## Scripts

Existing npm scripts.

- [add](https://github.com/lerna/lerna/tree/master/commands/add#readme) Add a dependency to matched packages
- [boot](https://github.com/lerna/lerna/tree/master/commands/bootstrap#readme) Link local packages together and install remaining package dependencies
- [lerna:test](https://github.com/lerna/lerna/tree/master/commands/run#readme) 
- [clean](https://github.com/lerna/lerna/tree/master/commands/clean#readme) Remove the node_modules directory from all packages
- [ls](https://github.com/lerna/lerna/tree/master/commands/list#readme) List local packages
- [link](https://github.com/lerna/lerna/tree/master/commands/link#readme) Symlink together all packages that are dependencies of each other
- [global](#scripts) Install `monorepo-starter` CLI globally in local machine
- [cleanup](#scripts) Remove the `node_modules` directory from all packages and re-install them
- [test](#scripts) Used [Jest](https://jestjs.io/) Run an npm script in each package that contains that script
- [lint](#scripts) Used [prettier](https://prettier.io/) and [eslint](https://eslint.org/) for linting utility

## CLI

```
$ npm run global
```

```
$ monorepo-starter
Welcome to lerna javascript monorepo project starter
```

## License

MIT © [Joydip Roy](https://github.com/rjoydip)
