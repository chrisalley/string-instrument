import { describe, test, expect } from 'vitest'
import { humanise } from './index'

describe('humanise', () => {
  test('converts underscored string to a space seperated string with lowercase first letter by default', () => {
    expect(humanise('first_second_third')).toEqual('first second third')
  })

  test('converts underscored string to a space seperated string with uppercase first letter when uppercase first letter is true', () => {
    expect(humanise('first_second_third', true)).toEqual('First second third')
  })
})
