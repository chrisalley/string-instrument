import { describe, test, expect } from 'vitest'
import { dasherise } from './index'

describe('dasherise', () => {
  const spaceSeparatedWords = 'first second third'
  const underscoreSeparatedWords = 'first_second_third'

  test('converts space or underscore separated string to a hyphen separated string', () => {
    const hyphenSeparatedWords = 'first-second-third'
    expect(dasherise(spaceSeparatedWords)).toEqual(hyphenSeparatedWords)
    expect(dasherise(underscoreSeparatedWords)).toEqual(hyphenSeparatedWords)
  })
})
