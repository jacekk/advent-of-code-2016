import { readInput } from '../utils'
import { niceGameChess, niceGameChessBetter } from './chess'

const INPUT = readInput(__dirname)

console.log('part 1:', niceGameChess(INPUT, '00000', 8)) // c6697b55
console.log('part 2:', niceGameChessBetter(INPUT, '00000', 8)) // 8c35d1ab
