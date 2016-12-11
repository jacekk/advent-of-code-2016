import { findComparingBotNumber } from './balance-bots'

describe('day 10 - balance bots', () => {
	const sampleInstructions = `
		value 5 goes to bot 2
		bot 2 gives low to bot 1 and high to bot 0
		value 3 goes to bot 1
		bot 1 gives low to output 1 and high to bot 0
		bot 0 gives low to output 2 and high to output 0
		value 2 goes to bot 2
	`

	it('should find bot number who had compared values first', () => {
		expect(findComparingBotNumber(sampleInstructions, [5, 2])).toEqual(2)
	})
})
