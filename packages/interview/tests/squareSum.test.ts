import { expect } from 'chai'
import { squareSum } from '../src/'
import 'mocha'

describe('Square summer', () => {
  it('should return an array of squared numbers', () => {
    const result = squareSum([1, 2, 3])
    const expected = 14

    expect(result).to.eql(expected)
  })
})
