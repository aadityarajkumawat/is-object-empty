# Is-object-empty

Checks if a given object has non-zero number of enumerable properties or not.

## Install

```bash
$ npm install is-object-empty
```

## Usage

```js
const isObjectEmpty = require("is-object-empty");

const a = { name: "Pegasus", age: 14 };
const b = {};

console.log(isObjectEmpty(a));
//=> false

console.log(isObjectEmpty(b));
//=> true
```
