import { describe, test, expect } from 'vitest'
import { underscore } from './index'

describe('underscore', () => {
  test('converts camelcase string to underscore seperated string', () => {
    expect(underscore('firstSecondThird')).toEqual('first_second_third')
  })

  test('converts pascalcase string to underscore seperated string', () => {
    expect(underscore('FirstSecondThird')).toEqual('first_second_third')
  })
})
