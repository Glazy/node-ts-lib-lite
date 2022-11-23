import { describe, expect, it } from 'vitest'
import { add } from '../lib/index'

describe('add', () => {
  it('successfully adds two numbers', () => {
    expect(add(1, 1)).toEqual(2)
  })
})
