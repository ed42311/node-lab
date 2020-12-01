import { sortByWeight } from '../src/'
import { expect } from 'chai'
import 'mocha'

describe('Digit weight sorting', () => {
  it('should return a sorted string of digit strings', () => {
    const result = sortByWeight('26 12 35')
    expect(result).to.equal('12 26 35')
  })

  it('should return a sorted string of digit strings by "weight"', () => {
    const result = sortByWeight('26 12 35')
    expect(result).to.equal('12 26 35')
  })
})
