export const squareDigits = (inputNum: number): number => {
  // const strNumArr = String(inputNum).split('')
  // const newStrNumArr = []
  // for (let i = 0; i < strNumArr.length; i++) {
  //   newStrNumArr.push(String(Number(strNumArr[i]) * Number(strNumArr[i])))
  // }
  // console.log(newStrNumArr)
  // const numSquared = Number(newStrNumArr.join(''))
  return Number(
    String(inputNum)
      .split('')
      .reduce((acc, cur) => `${acc}${Number(cur) * Number(cur)}`, '')
  )
}
