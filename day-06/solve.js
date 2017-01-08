import { readInput } from '../utils'
import { getMostFrequent, getLeastFrequent } from './signals-and-noise'

const INPUT = readInput(__dirname)

console.log('part 1:', getMostFrequent(INPUT)) // qoclwvah
console.log('part 2:', getLeastFrequent(INPUT)) // ryrgviuv
