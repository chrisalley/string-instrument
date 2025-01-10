import { describe, test, expect } from 'vitest'
import { pascalise } from './index'

describe('pascalise', () => {
  const spaceSeparatedWords = 'first second third'
  const underscoreSeparatedWords = 'first_second_third'

  test('converts space and underscore separated words to pascal case', () => {
    const pascalCaseWords = 'FirstSecondThird'
    expect(pascalise(spaceSeparatedWords)).toEqual(pascalCaseWords)
    expect(pascalise(underscoreSeparatedWords)).toEqual(pascalCaseWords)
  })
})
