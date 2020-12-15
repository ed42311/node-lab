import { expect } from 'chai'
import { flattenNested } from '../src/'
import 'mocha'

type flatNestType = Record<string, any>

describe('Object flattener', () => {
  it('should return a flattened object', () => {
    const input: flatNestType = {
      a: {
        b: {
          c: 'thing',
        },
      },
    }
    const output: flatNestType = {
      'a/b/c': 'thing',
    }
    expect(flattenNested(input, '')).to.eql(output)
  })
})
