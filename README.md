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

### Downcase First

```js
import { downcaseFirst } from 'string-instrument'

console.log(downcaseFirst('One Two Three')) // one Two Three
```

### Humanise

```js
import { humanise } from 'string-instrument'

console.log(humanise('one two_three')) // one two three
console.log(humanise('one two_three', true)) // One two three
```

### Ordinal

```js
import { ordinal } from 'string-instrument'

console.log(ordinal(1)) // st
console.log(ordinal(42)) // nd
console.log(ordinal(111)) // th
```

### Ordinalise

```js
import { ordinalise } from 'string-instrument'

console.log(ordinalise(1)) // 1st
console.log(ordinalise(42)) // 42nd
console.log(ordinalise(111)) // 111th
```

### Parameterise

```js
import { parameterise } from 'string-instrument'

console.log(parameterise('one two three')) // one-two-three
console.log(parameterise('one two three', '_')) // one_two_three
console.log(parameterise('One Two Three', '-', true)) // One-Two-Three
```

```js
import { pascalise, titleise, underscore, upcaseFirst } from 'string-instrument'

console.log(pascalise('hello_world')) // HelloWorld
console.log(titleise('hello world')) // Hello World
console.log(underscore('helloWorld')) // hello_world
console.log(upcaseFirst('hello world')) // Hello world
```
