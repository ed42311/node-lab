export const squareSum = (arrayOfNums: number[]): number => {
  return arrayOfNums.reduce((a, b) => a + Math.pow(b, 2), 0)
}
