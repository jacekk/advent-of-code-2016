import { readInput } from '../utils'
import { decompresses, countSequence, decompressesRecursively } from './explosives-in-cyberspace'

const INPUT = readInput(__dirname)

console.log('part 1:', countSequence(decompresses(INPUT))) // 99145
console.log('part 2:', decompressesRecursively(INPUT)) // 10943094568
