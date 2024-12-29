import { describe, test, expect } from 'vitest'
import { parameterise } from './index'

describe('parameterise', () => {
  test('replaces spaces with hyphens and converts to lowercase by default', () => {
    expect(parameterise('First Second Third')).toEqual('first-second-third')
  })

  test('replaces spaces with a custom seperator if specified', () => {
    expect(parameterise('First Second Third', '_')).toEqual(
      'first_second_third'
    )
  })

  test('preserves the case of characters in a string if specified', () => {
    expect(parameterise('First Second Third', '-', true)).toEqual(
      'First-Second-Third'
    )
  })

  test('preserves dashes and underscores unless they are used as separators', () => {
    expect(parameterise('First Second__')).toEqual('first-second__')
    expect(parameterise('First Second--', '_')).toEqual('first_second--')
    expect(parameterise('First_Second--', '.')).toEqual('first_second--')
  })
})
