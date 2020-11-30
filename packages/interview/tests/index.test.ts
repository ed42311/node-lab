import 'mocha'
import { expect } from 'chai'

import { testFunction } from '../src'

describe('Simple tests', () => {
  it('return one', () => {
    expect(testFunction()).to.equal(1)
  })
})
