import { describe, test, expect } from 'vitest'
import { camelise } from './index'

describe('camelise', () => {
  test('converts underscored string to camelcase with uppercase first letter by default', () => {
    expect(camelise('first_second_third')).toEqual('FirstSecondThird')
  })

  test('converts underscored string to camelcase with lowercase first letter when uppercase first letter is false', () => {
    expect(camelise('first_second_third', false)).toEqual('firstSecondThird')
  })
})
