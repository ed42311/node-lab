'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.sortByWeight = void 0
const sortByWeight = (unsortedDigitStr) => {
  // Weight is defined as the sum of all digits in a single digit string
  // i.e. the digit string 234 with all it's digits summed together would
  // have a "weight" of 9
  const createWeightObj = (digitStr) => ({
    weight: digitStr.split('').reduce((a, b) => Number(a) + Number(b), 0),
    original: digitStr,
  })
  return unsortedDigitStr
    .split(' ')
    .map((digitStr) => createWeightObj(digitStr))
    .sort((a, b) => a.weight - b.weight)
    .map((i) => i.original)
    .join(' ')
}
exports.sortByWeight = sortByWeight
//# sourceMappingURL=index.js.map
