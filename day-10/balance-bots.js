const RE_INIT = /^value (\d+) goes to bot (\d+)$/
const RE_JOB = /^bot (\d+) gives low to (bot|output) (\d+) and high to (bot|output) (\d+)$/

let bots = {}
let outputs = {}

export const sortNumbersAsc = (a, b) => a - b

export const areArraysSame = (a, b) => a
	.filter((item, index) => a[index] === b[index])
	.length === a.length

const passValueToBot = (targetType, destNumber, srcNumber) => {
	const collection = targetType === 'bot' ? bots : outputs
	const target = collection[destNumber] || { values: [], jobs: [] }
	const value = bots[srcNumber].values.splice(0, 1).pop()

	target.values.push(value)
	target.values.sort(sortNumbersAsc)

	collection[destNumber] = target
}

const readInstructions = (line) => {
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
}

const countJobs = () => Object
	.keys(bots)
	.map(number => bots[number].jobs.length)
	.reduce((sum, item) => sum + item, 0)

const removeWhitespacesAndLineBreaks = input => input
	.trim()
	.split('\n')
	.map(item => item.trim())
	.filter(Boolean)

export const findComparingBotNumber = (input, needleValues) => {
	bots = {}
	outputs = {}

	const lines = removeWhitespacesAndLineBreaks(input)
	const searchedValues = needleValues.sort(sortNumbersAsc)
	const botNumber = []

	const executeBotJobs = (number) => {
		const { values, jobs } = bots[number]

		if (values.length === needleValues.length) {
			if (areArraysSame(values, searchedValues)) {
				botNumber.push(+number)
			}

			jobs.splice(0, 1).pop()()
		}
	}

	lines.forEach(readInstructions)
	while (countJobs() > 0) {
		Object.keys(bots).forEach(executeBotJobs)
	}

	return botNumber.pop()
}

export const multiplyOutputsValues = (input, outputsNumbers) => {
	bots = {}
	outputs = {}

	const lines = removeWhitespacesAndLineBreaks(input)

	const executeBotJobs = (number) => {
		const { values, jobs } = bots[number]

		if (values.length === 2) {
			jobs.splice(0, 1).pop()()
		}
	}

	lines.forEach(readInstructions)
	while (countJobs() > 0) {
		Object.keys(bots).forEach(executeBotJobs)
	}

	return Object.keys(outputs)
		.filter(index => outputsNumbers.indexOf(+index) > -1)
		.map(index => outputs[index])
		.map(output => output.values.pop())
		.reduce((prev, value) => prev * value, 1)
}
