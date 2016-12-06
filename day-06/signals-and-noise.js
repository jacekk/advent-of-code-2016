import { countNameChars, orderNameCharsTopMost } from '../day-04/rooms'

export const clearNoise = (input) => {
	const lines = input
		.trim()
		.split('\n')
		.map(line => line.trim())
	const lineChars = lines[0].split('')
	const mostFreq = []

	lineChars.forEach((char, index) => {
		const chars = []

		lines.forEach((line) => {
			chars.push(line[index])
		})

		const charsCounted = countNameChars(chars)
		const charsOrdered = orderNameCharsTopMost(charsCounted)
		mostFreq.push(charsOrdered[0].char)
	})

	return mostFreq.join('')
}
