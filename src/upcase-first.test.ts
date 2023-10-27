import { describe, test, expect } from 'vitest'
import { upcaseFirst } from './index'

describe('upcaseFirst', () => {
  test('makes the first character of the first word uppercase', () => {
    expect(upcaseFirst('first second third')).toEqual('First second third')
  })
})
