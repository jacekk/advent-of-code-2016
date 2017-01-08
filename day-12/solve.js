import { readInput } from '../utils'
import { execLines } from './monorail'

const INPUT = readInput(__dirname)

console.log('part 1:', execLines(INPUT, 'a', {
	a: 0,
	b: 0,
	c: 0,
	d: 0,
})) // 318007
console.log('part 2:', execLines(INPUT, 'a', {
	a: 0,
	b: 0,
	c: 1,
	d: 0,
})) // 9227661
