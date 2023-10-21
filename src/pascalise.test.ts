import { describe, test, expect } from 'vitest'
import { pascalise } from './index'

describe('camelise', () => {
  test('converts underscored string to pascalcase', () => {
    expect(pascalise('first_second_third')).toEqual('FirstSecondThird')
  })
})
