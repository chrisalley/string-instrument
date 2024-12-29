import { describe, test, expect } from 'vitest'
import { ordinal } from './index'

describe('ordinal', () => {
  describe('st suffix rules', () => {
    test('produces st suffix when non-teen numbers end with 1', () => {
      expect(ordinal(1)).toEqual('st')
      expect(ordinal(21)).toEqual('st')
    })

    test('does not produce st suffix when teen number ends in 1', () => {
      expect(ordinal(11)).not.toEqual('st')
    })
  })

  describe('nd suffix rules', () => {
    test('produces nd suffix when non-teen numbers end in 2', () => {
      expect(ordinal(2)).toEqual('nd')
      expect(ordinal(22)).toEqual('nd')
    })

    test('does not produce nd suffix when teen number ends in 2', () => {
      expect(ordinal(12)).not.toEqual('nd')
    })
  })

  describe('rd suffix rules', () => {
    test('produces rd suffix when non-teen numbers end in 3', () => {
      expect(ordinal(3)).toEqual('rd')
      expect(ordinal(23)).toEqual('rd')
    })

    test('does not produce rd suffix when teen number ends in 3', () => {
      expect(ordinal(13)).not.toEqual('nd')
    })
  })

  describe('th suffix rules', () => {
    test('produces th suffix when number is 0', () => {
      expect(ordinal(0)).toEqual('th')
    })

    test('produces th suffix when non-teen numbers do not end in 1, 2, or 3', () => {
      expect(ordinal(4)).toEqual('th')
      expect(ordinal(10)).toEqual('th')
      expect(ordinal(24)).toEqual('th')
    })

    test('produces th suffix when teen numbers end in 1, 2, or 3', () => {
      expect(ordinal(11)).toEqual('th')
      expect(ordinal(12)).toEqual('th')
      expect(ordinal(13)).toEqual('th')
    })

    test('produces th suffix for other teen numbers', () => {
      expect(ordinal(14)).toEqual('th')
      expect(ordinal(19)).toEqual('th')
    })
  })
})
