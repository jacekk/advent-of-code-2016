import { readInput } from '../utils'
import { findComparingBotNumber, multiplyOutputsValues } from './balance-bots'

const INPUT = readInput(__dirname)

console.log('part 1:', findComparingBotNumber(INPUT, [61, 17])) // 98
console.log('part 2:', multiplyOutputsValues(INPUT, [0, 1, 2])) // 4042
