const removeWhitespacesAndLineBreaks = input => input
	.trim()
	.split('\n')
	.map(item => item.trim())
	.filter(Boolean)
	.join('')

export const countSequence = input => removeWhitespacesAndLineBreaks(input)
	.split(' ')
	.join('')
	.length

export const decompresses = (input) => {
	let src = removeWhitespacesAndLineBreaks(input)
	let dest = ''

	while (src.length) {
		const match = src.match(/^\((\d+)x(\d+)\)(.*)/)

		if (match) {
			const length = +match[1]
			const repeats = +match[2]
			const rest = match[3]
			const toRepeat = rest.substring(0, length)
			const repeated = Array(repeats).fill(toRepeat).join('')
			const restAfterCut = rest.substring(length)

			dest += repeated
			src = restAfterCut
		} else {
			dest += src[0]
			src = src.substring(1)
		}
	}

	return dest
}

export const decompressesRecursively = (input) => {
	let src = removeWhitespacesAndLineBreaks(input)
	let counter = 0

	while (src.length > -1) {
		const match = src.match(/\((\d+)x(\d+)\)(.*)/)

		if (! match) {
			return counter + src.length
		}

		const foundedAt = +match.index
		const length = +match[1]
		const repeats = +match[2]
		const rest = match[3]
		const toRepeat = rest.substring(0, length)

		counter += foundedAt
		counter += decompressesRecursively(toRepeat) * repeats
		src = rest.substring(length)
	}
}
