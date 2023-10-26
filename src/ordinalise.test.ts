import { describe, test, expect } from 'vitest'
import { ordinalise } from './index'

describe('ordinalise', () => {
  describe('st suffix rules', () => {
    test('adds st suffix when non-teen numbers end with 1', () => {
      expect(ordinalise(1)).toEqual('1st')
      expect(ordinalise(21)).toEqual('21st')
    })

    test('does not add st suffix when teen number ends in 1', () => {
      expect(ordinalise(11)).not.toEqual('11st')
    })
  })

  describe('nd suffix rules', () => {
    test('adds nd suffix when non-teen numbers end in 2', () => {
      expect(ordinalise(2)).toEqual('2nd')
      expect(ordinalise(22)).toEqual('22nd')
    })

    test('does not add nd suffix when teen number ends in 2', () => {
      expect(ordinalise(12)).not.toEqual('12nd')
    })
  })

  describe('rd suffix rules', () => {
    test('adds rd suffix when non-teen numbers end in 3', () => {
      expect(ordinalise(3)).toEqual('3rd')
      expect(ordinalise(23)).toEqual('23rd')
    })

    test('does not add rd suffix when teen number ends in 3', () => {
      expect(ordinalise(13)).not.toEqual('13nd')
    })
  })

  describe('th suffix rules', () => {
    test('adds th suffix when number is 0', () => {
      expect(ordinalise(0)).toEqual('0th')
    })

    test('adds th suffix when non-teen numbers do not end in 1, 2, or 3', () => {
      expect(ordinalise(4)).toEqual('4th')
      expect(ordinalise(10)).toEqual('10th')
      expect(ordinalise(24)).toEqual('24th')
    })

    test('adds th suffix when teen numbers end in 1, 2, or 3', () => {
      expect(ordinalise(11)).toEqual('11th')
      expect(ordinalise(12)).toEqual('12th')
      expect(ordinalise(13)).toEqual('13th')
    })

    test('adds th suffix for other teen numbers', () => {
      expect(ordinalise(14)).toEqual('14th')
      expect(ordinalise(19)).toEqual('19th')
    })
  })
})
