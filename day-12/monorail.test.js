import { execLines } from './monorail'

describe('day 12 - monorail', () => {
	const sample = `
		cpy 41 a
		inc a
		inc a
		dec a
		jnz a 2
		dec a
	`

	const sample2 = `
		cpy -41 b
		inc b
		cpy b a
		jnz c 5
		inc a
	`

	const initialRegisters = {
		a: 0,
		b: 0,
		c: 0,
		d: 0,
	}

	it('should execute lines and get value of registry A', () => {
		expect(execLines(sample, 'a', initialRegisters)).toEqual(42)
		expect(execLines(sample2, 'a', initialRegisters)).toEqual(-39)
	})
})
