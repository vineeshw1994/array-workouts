const word = 'hello vineesh'

const result = Array.from(word).flatMap(letter => [letter])
console.log(result)


const numbers = [1, [2, 3], 4, [5, 6], 7, [8, 9,], 10]

const sam = numbers.flat(Infinity)
console.log(sam)