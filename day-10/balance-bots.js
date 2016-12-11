const RE_INIT = /^value (\d+) goes to bot (\d+)$/
const RE_JOB = /^bot (\d+) gives low to (bot|output) (\d+) and high to (bot|output) (\d+)$/

export const sortNumbersAsc = (a, b) => a - b

export const areArraysSame = (a, b) => a
	.filter((item, index) => a[index] === b[index])
	.length === a.length

export const findComparingBotNumber = (input, needleValues) => {
	const searchedValues = needleValues.sort(sortNumbersAsc)
	const lines = input.trim().split('\n').map(item => item.trim())
	const bots = {}
	const outputs = {}


	const passValueToBot = (targetType, destNumber, srcNumber) => {
		const collection = targetType === 'bot' ? bots : outputs
		const target = collection[destNumber] || { values: [], jobs: [] }
		const value = bots[srcNumber].values.splice(0, 1).pop()

		target.values.push(value)
		target.values.sort(sortNumbersAsc)

		collection[destNumber] = target
	}

	lines.forEach((line) => {
		if (line.indexOf('value') === 0) {
			const match = line.match(RE_INIT)

			const value = +match[1]
			const number = +match[2]

			const bot = bots[number] || { values: [], jobs: [] }

			bot.values.push(value)
			bot.values.sort(sortNumbersAsc)

			bots[number] = bot
		} else {
			const match = line.match(RE_JOB)

			const number = +match[1]
			const lowTarget = match[2]
			const lowNumber = +match[3]
			const highTarget = match[4]
			const highNumber = +match[5]

			const bot = bots[number] || { values: [], jobs: [] }

			bot.jobs.push(() => {
				passValueToBot(lowTarget, lowNumber, number)
				passValueToBot(highTarget, highNumber, number)
			})

			bots[number] = bot
		}
	})

	const countJobs = () => Object
		.keys(bots)
		.map(number => bots[number].jobs.length)
		.reduce((sum, item) => sum + item, 0)

	const botNumber = []

	const checkBotValues = (number) => {
		const bot = bots[number]

		if (bot.values.length === 2) {
			if (areArraysSame(bot.values, searchedValues)) {
				botNumber.push(+number)
			}

			bot.jobs
				.splice(0, 1)
				.pop()()
		}
	}

	while (countJobs() > 0) {
		Object.keys(bots).forEach(checkBotValues)
	}

	return botNumber.pop()
}
