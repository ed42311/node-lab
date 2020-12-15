type flatNestType = Record<string, any>
// help no!
export const flattenNested = (
  objToFlatten: flatNestType,
  cumulativeKey: string
): flatNestType => {
  for (const key in objToFlatten) {
    if (typeof objToFlatten[key] === 'object') {
      const value = objToFlatten[key]
      return flattenNested(value, `${cumulativeKey}/${key}`)
    } else {
      const lastKey = `${cumulativeKey}/${key}`
      return {
        [lastKey.substr(1)]: objToFlatten[key],
      }
    }
  }
}

const input = {
  a: {
    b: {
      c: 'thing',
      d: ['thing'],
    },
  },
}

console.log(flattenNested(input, ''))
