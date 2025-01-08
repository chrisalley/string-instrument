import { describe, test, expect } from 'vitest'
import { humanise } from './index'

describe('humanise', () => {
  const spaceSeparatedWords = 'first second third'
  const underscoreSeparatedWords = 'first_second_third'

  test('converts space and underscore separated words to a space seperated string with lowercase first letter by default', () => {
    expect(humanise('first_second_third')).toEqual('first second third')

    const humanisedWordsLowerCaseFirstLetter = 'first second third'
    expect(humanise(spaceSeparatedWords)).toEqual(
      humanisedWordsLowerCaseFirstLetter
    )
    expect(humanise(underscoreSeparatedWords)).toEqual(
      humanisedWordsLowerCaseFirstLetter
    )
  })

  test('converts space and underscore separated words to a space seperated string with uppercase first letter when uppercase first letter is true', () => {
    const humanisedWordsUppercaseFirstLetter = 'First second third'
    expect(humanise(spaceSeparatedWords, true)).toEqual(
      humanisedWordsUppercaseFirstLetter
    )
    expect(humanise(underscoreSeparatedWords, true)).toEqual(
      humanisedWordsUppercaseFirstLetter
    )
  })
})
