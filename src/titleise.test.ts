import { describe, test, expect } from 'vitest'
import { titleise } from './index'

describe('titleise', () => {
  test('capitalises each space seperated word in the string', () => {
    expect(titleise('first second third')).toEqual('First Second Third')
  })

  test('capitalises each underscore seperated word, replacing underscores with spaces', () => {
    expect(titleise('first_second_third')).toEqual('First Second Third')
  })

  test('adds a space between each word that already starts with a capital', () => {
    expect(titleise('FirstSecondThird')).toEqual('First Second Third')
  })

  test('remove additional spaces in around and within title', () => {
    expect(titleise('  first  second  third  ')).toEqual('First Second Third')
  })
})
