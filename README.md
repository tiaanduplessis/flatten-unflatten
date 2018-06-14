
# flatten-unflatten
[![package version](https://img.shields.io/npm/v/flatten-unflatten.svg?style=flat-square)](https://npmjs.org/package/flatten-unflatten)
[![package downloads](https://img.shields.io/npm/dm/flatten-unflatten.svg?style=flat-square)](https://npmjs.org/package/flatten-unflatten)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/flatten-unflatten.svg?style=flat-square)](https://npmjs.org/package/flatten-unflatten)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Flatten or unflatten a object

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install flatten-unflatten
$ # OR
$ yarn add flatten-unflatten
```

## Usage

```js
import {flatten, unflatten} from 'flatten-unflatten'

const foo = {
  bar: 5,
  baz: {
    bar: 1,
    foo: {
      ping: 'pong',
      arr: [1, 3, 4, 5]
    }
  }
}

const flatFoo = flatten(foo)
console.log(flatFoo) // {bar: 5, baz.bar: 1, baz.foo.ping: "pong", baz.foo.arr: Array[4]}

const starryFlatFoo = flatten(foo, { delimiter: '*' })
console.log(starryFlatFoo) // {bar: 5, baz*bar: 1, baz*foo*ping: "pong", baz*foo*arr: Array[4]}
console.log(flatten(foo, { arrays: true })) // {bar: 5, baz.bar: 1, baz.foo.ping: "pong", baz.foo.arr.0: 1, baz.foo.arr.1: 3…}

console.log(unflatten(flatFoo)) // {bar: 5, baz: Object}
console.log(unflatten(starryFlatFoo, { delimiter: '*' })) // {bar: 5, baz: Object}

```

## Contribute

1. Fork it and create your feature branch: git checkout -b my-new-feature
2. Commit your changes: git commit -am 'Add some feature'
3. Push to the branch: git push origin my-new-feature 
4. Submit a pull request

## License

MIT
    