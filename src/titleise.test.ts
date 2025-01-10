import { describe, test, expect } from 'vitest'
import { titleise } from './index'

describe('titleise', () => {
  const titlisedWords = 'First Second Third'

  test('capitalises each space separated word in the string', () => {
    expect(titleise('first second third')).toEqual(titlisedWords)
  })

  test('capitalises each underscore separated word, replacing underscores with spaces', () => {
    expect(titleise('first_second_third')).toEqual(titlisedWords)
  })

  test('adds a space between each word that already starts with a capital', () => {
    expect(titleise('firstSecondThird')).toEqual(titlisedWords)
    expect(titleise('FirstSecondThird')).toEqual(titlisedWords)
  })

  test('removes additional spaces in around and within title', () => {
    expect(titleise('  first  second  third  ')).toEqual('First Second Third')
  })
})
