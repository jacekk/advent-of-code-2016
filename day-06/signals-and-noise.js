import { countNameChars, orderNameCharsTopMost } from '../day-04/rooms'

const reduceNoise = (input, pickFromOrdered) => {
	const lines = input
		.trim()
		.split('\n')
		.map(line => line.trim())
	const lineChars = lines[0].split('')

	return lineChars
		.map((char, index) => {
			const chars = []

			lines.forEach((line) => {
				chars.push(line[index])
			})

			const charsCounted = countNameChars(chars)
			const charsOrdered = orderNameCharsTopMost(charsCounted)

			return pickFromOrdered(charsOrdered)
		}).join('')
}

export const getMostFrequent = input => reduceNoise(input, chars => chars[0].char)
export const getLeastFrequent = input => reduceNoise(input, chars => chars.pop().char)
