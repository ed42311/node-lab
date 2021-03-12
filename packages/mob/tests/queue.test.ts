import { queueTime } from '../src'
import { expect } from 'chai'
import 'mocha'

describe('Queuey the qqqqueue', () => {
  it('time should be zero with an empty array', () => {
    expect(queueTime([], 1)).to.equal(0)
  })
  it('time should equal sum of array with 1 till', () => {
    expect(queueTime([1, 2, 3, 4], 1)).to.equal(10)
  })
  it('time should equal the greatest amount of time when all customers have been seperated by equal amount of tills', () => {
    expect(queueTime([2, 2, 3, 3, 4, 4], 2)).to.equal(9)
  })

    // expect(queueTime([1, 2, 3, 4, 5], 100)).to.equal(5)
})
