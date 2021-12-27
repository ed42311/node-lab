export const squareDigits = (inputNum: number): number => {
  return Number(
    String(inputNum)
      .split('')
      .reduce((acc, cur) => `${acc}${Number(cur) * Number(cur)}`, '')
  )
}
