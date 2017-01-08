import { readInput } from '../utils'
import { getDistance, getFirstVisitedTwiceDistance } from './taxicab'

const INPUT = readInput(__dirname)

console.log('part 1:', getDistance(INPUT)) // 230
console.log('part 2:', getFirstVisitedTwiceDistance(INPUT)) // 154
