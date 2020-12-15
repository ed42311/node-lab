export const repeatCounter = (allTheChars: string): string => {
  // given "aabbbcca"
  // should return 2a3b2c1a
  // inst var
  let lastChar
  let count = 1
  let allTheCharsCount = ''

  for (let i = 0; i <= allTheChars.length; i++) {
    if (lastChar === allTheChars[i]) {
      count = count + 1
    } else {
      if (lastChar) {
        allTheCharsCount += `${count}${lastChar}`
      }
      lastChar = allTheChars[i]
      count = 1
    }
  }

  return allTheCharsCount
}
