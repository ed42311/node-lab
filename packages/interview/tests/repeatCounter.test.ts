import { expect } from 'chai'
import { repeatCounter } from '../src'
import 'mocha'

describe.only('Repeat counter', () => {
  it('should return a shortened string', () => {
    const result = repeatCounter('aabbbcca')
    const expected = '2a3b2c1a'

    expect(result).to.equal(expected)
  })

  it('all the same char', () => {
    const result = repeatCounter('aaaaaaaaaa')
    const expected = '10a'

    expect(result).to.equal(expected)
  })

  it('handles number', () => {
    const result = repeatCounter('999999')
    const expected = '69'

    expect(result).to.equal(expected)
  })
  it('handles longer strings with numbers', () => {
    const result = repeatCounter('999999aaabbbcccfgh')
    const expected = '693a3b3c1f1g1h'

    expect(result).to.equal(expected)
  })
  it('handles emojis and random chars', () => {
    const result = repeatCounter('999999---Ls:)🐕')
    const expected = '693-1L1s1:1)1\ud83d1\udc15'

    expect(result).to.equal(expected)
  })
})
