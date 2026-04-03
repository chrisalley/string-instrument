import { describe, expect, test } from 'vitest'
import { downcaseFirst } from './index'

describe('downcaseFirst', () => {
  test('makes the first character of the first word lowercase', () => {
    expect(downcaseFirst('First Second Third')).toEqual('first Second Third')
  })
})
