import { describe, test, expect } from 'vitest'
import {
  camelise,
  dasherise,
  downcaseFirst,
  parameterise,
  titleise,
  underscore
} from './index'

describe('camelise', () => {
  test('converts underscored string to camelcase with uppercase first letter by default', () => {
    expect(camelise('first_second_third')).toEqual('FirstSecondThird')
  })

  test('converts underscored string to camelcase with lowercase first letter when uppercase first letter is false', () => {
    expect(camelise('first_second_third', false)).toEqual('firstSecondThird')
  })
})

describe('dasherise', () => {
  test('converts underscored string to a hyphenated string', () => {
    expect(dasherise('first_second_third')).toEqual('first-second-third')
  })
})

describe('downcaseFirst', () => {
  test('makes the first character of the first word lowercase', () => {
    expect(downcaseFirst('First Second Third')).toEqual('first Second Third')
  })
})

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

describe('underscore', () => {
  test('converts camelcase string to underscore seperated string', () => {
    expect(underscore('firstSecondThird')).toEqual('first_second_third')
  })

  test('converts pascalcase string to underscore seperated string', () => {
    expect(underscore('FirstSecondThird')).toEqual('first_second_third')
  })
})
