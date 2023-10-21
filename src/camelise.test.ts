import { describe, test, expect } from 'vitest'
import { camelise } from './index'

describe('camelise', () => {
  test('converts underscored string to camelcase with lowercase first letter by default', () => {
    expect(camelise('first_second_third')).toEqual('firstSecondThird')
  })

  test('converts underscored string to camelcase with lowercase first letter when uppercase first letter is true', () => {
    expect(camelise('first_second_third', true)).toEqual('FirstSecondThird')
  })
})
