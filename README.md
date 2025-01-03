# String Instrument

A little library for working with strings.

## Installation

```bash
npm install --save string-instrument
# yarn add string-instrument
# pnpm add string-instrument
```

## Usage

### Camelise

```js
import { camelise } from 'string-instrument'

console.log(camelise('one two_three')) // oneTwoThree
console.log(camelise('one two_three', true)) // OneTwoThree
```

### Dasherise

```js
import { dasherise } from 'string-instrument'

console.log(dasherise('one two_three')) // one-two-three
```

```js
import {
  downcaseFirst,
  humanise,
  ordinal,
  ordinalise,
  parameterise,
  pascalise,
  titleise,
  underscore,
  upcaseFirst
} from 'string-instrument'

console.log(downcaseFirst('Hello World')) // hello World
console.log(humanise('hello_world')) // hello world
console.log(ordinal(1)) // st
console.log(ordinalise(1)) // 1st
console.log(parameterise('Hello World')) // hello-world
console.log(pascalise('hello_world')) // HelloWorld
console.log(titleise('hello world')) // Hello World
console.log(underscore('helloWorld')) // hello_world
console.log(upcaseFirst('hello world')) // Hello world
```
