# String Instrument

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/chrisalley/string-instrument/blob/main/LICENSE)
[![NPM](https://img.shields.io/npm/v/string-instrument.svg)](https://www.npmjs.com/package/string-instrument)
[![CI](https://github.com/chrisalley/string-instrument/workflows/CI/badge.svg)](https://github.com/chrisalley/string-instrument/actions/workflows/ci.yml)

String Instrument is small library containing utility functions for working with
strings. It uses modern JavaScript module syntax and is limited to functionality
not present in the built in [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
and [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
objects.

The API was inspired by [Active Support Inflector](https://api.rubyonrails.org/classes/ActiveSupport/Inflector.html)
but does not follow it 1:1.

## Installation

```bash
npm install --save string-instrument
# yarn add string-instrument
# pnpm add string-instrument
```

## Documentation

Visit https://chrisalley.github.io/string-instrument to view the full
documentation.

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

### Separate

```js
import { separate } from 'string-instrument'

console.log(separate('oneTwoThree')) // one two three
console.log(separate('one_two_three')) // one two three
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

## License

String Instrument is released under the [MIT License](https://opensource.org/licenses/MIT).
