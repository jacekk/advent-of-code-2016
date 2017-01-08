import { readInput } from '../utils'
import { makeEmptyScreen, multipleOperations, countOn, printScreen } from './two-factor-auth'

const INPUT = readInput(__dirname)

const screen = multipleOperations(makeEmptyScreen(), INPUT)

console.log('part 1:', countOn(screen)) // 128
console.log('part 2:')
printScreen(screen) // EOARGPHYAO
