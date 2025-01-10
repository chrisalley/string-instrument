import { describe, test, expect } from 'vitest'
import { underscore } from './index'

describe('underscore', () => {
  const underscoreSeparatedWords = 'first_second_third'

  test('converts camel case string to underscore separated string', () => {
    expect(underscore('firstSecondThird')).toEqual(underscoreSeparatedWords)
  })

  test('converts pascal case string to underscore separated string', () => {
    expect(underscore('FirstSecondThird')).toEqual(underscoreSeparatedWords)
  })

  test('converts space separated string to underscore separated string', () => {
    expect(underscore('first second third')).toEqual(underscoreSeparatedWords)
  })
})
