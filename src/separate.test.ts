import { describe, test, expect } from 'vitest'
import { separate } from './index'

describe('separate', () => {
  const spaceSeparatedWords = 'first second third'

  test('converts camelcase separated words to space separated', () => {
    expect(separate('firstSecondThird')).toEqual(spaceSeparatedWords)
    expect(separate('FirstSecondThird')).toEqual(spaceSeparatedWords)
  })

  test('converts underscore separated words to space separated', () => {
    expect(separate('first_second_third')).toEqual(spaceSeparatedWords)
  })
})
