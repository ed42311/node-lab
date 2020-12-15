type weightObj = { weight: number; original: string }

export const sortByWeight = (unsortedDigitStr: string): string => {
  // Weight is defined as the sum of all digits in a single digit string
  // i.e. the digit string 234 with all it's digits summed together would
  // have a "weight" of 9

  const createWeightObj = (digitStr: string): weightObj => ({
    weight: digitStr.split('').reduce((a, b) => Number(a) + Number(b), 0),
    original: digitStr,
  })

  return unsortedDigitStr
    .split(' ')
    .map((digitStr: string) => createWeightObj(digitStr))
    .sort((a: weightObj, b: weightObj) => a.weight - b.weight)
    .map((i) => i.original)
    .join(' ')
}

export * from './object'

export * from './squareSum'

export * from './repeatCounter'
