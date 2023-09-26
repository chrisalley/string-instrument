import { describe, test, expect } from 'vitest'
import { dasherise } from './index'

describe('dasherise', () => {
  test('converts underscored string to a hyphenated string', () => {
    expect(dasherise('first_second_third')).toEqual('first-second-third')
  })
})
