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

### Pascalise

```js
import { pascalise } from 'string-instrument'

console.log(pascalise('one two_three')) // OneTwoThree
```

### Titleise

```js
import { titleise } from 'string-instrument'

console.log(titleise('one two_three')) // One Two Three
console.log(titleise('oneTwoThree')) // One Two Three
```

### Underscore

```js
import { underscore } from 'string-instrument'

console.log(underscore('oneTwoThree')) // one_two_three
console.log(underscore('one two three')) // one_two_three
```

### Upcase First

```js
import { upcaseFirst } from 'string-instrument'

console.log(upcaseFirst('one two three')) // One two three
```
