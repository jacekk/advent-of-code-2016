import { readInput } from '../utils'
import { countValidTriangles, countValidTrianglesVertically } from './triangles'

const INPUT = readInput(__dirname)

console.log('part 1:', countValidTriangles(INPUT)) // 862
console.log('part 2:', countValidTrianglesVertically(INPUT)) // 1577
