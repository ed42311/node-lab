import { squareDigits } from '../src'

import { expect } from 'chai'
import 'mocha'

// 9119 number
// 9*9
// 81 1 1 81
// 811181 number

// Test organizer
describe.skip('Square Digits', () => {
  // Test Block
  it('Given 2 should be 4', () => {
    // Run function with input
    // expect the returned value to be...
    expect(squareDigits(2)).to.equal(4)
  })

  it('Given 123 should be 149', () => {
    expect(squareDigits(123)).to.equal(149)
  })

  it('Given 952 should be 81254', () => {
    expect(squareDigits(952)).to.equal(81254)
  })
})
