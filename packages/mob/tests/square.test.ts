import { squareDigits } from '../src'

import { expect } from 'chai'
import 'mocha'

describe('Sqaure Digits', () => {
  it('should be one', () => {
    expect(squareDigits(1)).to.equal(1)
  })
})
