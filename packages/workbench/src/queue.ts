export const queueTime = (customers: number[], tills: number): number => {
  if (customers.length) {
    if (tills === 1) {
      // makes a sum of the array
      return customers.reduce(
        (accumulator, current) => accumulator + current,
        0
      )
    }
    // have an array of arrays that is filled with
    // the number of tills
    // 2 tills => [[], []]
    // have a running total time
    const arrayOfTills = [[], []] as number[][]
    for (let index = 0; index < customers.length; index++) {
      const element = customers[index] // customer time, eg 5
      // alternate between the array of tills ?
      // which one is the shorter queue ?
      // total the incoming queue ?

      const hello = arrayOfTills[0].reduce(
        (accumulator, current) => accumulator + current,
        0
      )
    }
  } else {
    return 0
  }
}
