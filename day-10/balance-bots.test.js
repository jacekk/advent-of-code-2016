import { findComparingBotNumber } from './balance-bots'

describe('day 10 - balance bots', () => {
	it('should find bot number who had compared values first', () => {
		const instructions = `
			value 5 goes to bot 2
			bot 2 gives low to bot 1 and high to bot 0
			value 3 goes to bot 1
			bot 1 gives low to output 1 and high to bot 0
			bot 0 gives low to output 2 and high to output 0
			value 2 goes to bot 2
		`
		expect(findComparingBotNumber(instructions, [5, 2])).toEqual(2)
	})
})
