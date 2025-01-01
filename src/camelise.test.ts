import { describe, test, expect } from 'vitest'
import { camelise } from './index'

describe('camelise', () => {
  const spaceSeparatedWords = 'first second third'
  const underscoreSeparatedWords = 'first_second_third'

  test('converts space and underscore separated words to lower camel case by default', () => {
    const lowerCamelCaseWords = 'firstSecondThird'
    expect(camelise(spaceSeparatedWords)).toEqual(lowerCamelCaseWords)
    expect(camelise(underscoreSeparatedWords)).toEqual(lowerCamelCaseWords)
  })

  test('converts space and underscore separated words to pascal case when uppercase first letter is true', () => {
    const pascalCaseWords = 'FirstSecondThird'
    expect(camelise(spaceSeparatedWords, true)).toEqual(pascalCaseWords)
    expect(camelise(underscoreSeparatedWords, true)).toEqual(pascalCaseWords)
  })
})
