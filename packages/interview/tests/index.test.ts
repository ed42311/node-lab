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

  it('should return sorted string with digit string lengths of x', () => {
    const result = sortByWeight('265 124 3532')
    expect(result).to.equal('124 265 3532')

    const result2 = sortByWeight('325238769856790 265 10000000000000')
    expect(result2).to.equal('10000000000000 265 325238769856790')
  })
})
