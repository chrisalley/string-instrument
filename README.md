# String Instrument

A little library for working with strings.

## Installation

```bash
npm install --save string-instrument
# yarn add string-instrument
# pnpm add string-instrument
```

## Usage

```js
import {
  camelise,
  dasherise,
  downcaseFirst,
  humanise,
  ordinal,
  ordinalise,
  parameterise,
  pascalise,
  titleise,
  underscore
} from 'string-instrument'

console.log(camelise('hello_world')) // helloWorld
console.log(dasherise('hello_world')) // hello-world
console.log(downcaseFirst('Hello World')) // hello World
console.log(humanise('hello_world')) // hello world
console.log(ordinal(1)) // st
console.log(ordinalise(1)) // 1st
console.log(parameterise('Hello World')) // hello-world
console.log(pascalise('hello_world')) // HelloWorld
console.log(titleise('hello world')) // Hello World
console.log(underscore('helloWorld')) // hello_world
```
