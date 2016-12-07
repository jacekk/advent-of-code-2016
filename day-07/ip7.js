const ABBA_LEN = 4

export const isABBA = (input) => {
	const half = ABBA_LEN / 2
	const begin = input.substring(0, half)
	const end = input.substring(half)
	const endReversed = end.split('').reverse().join('')

	return begin === endReversed && begin !== end
}

export const containsABBA = (input) => {
	const len = input.length

	for (let i = 0; i <= len - ABBA_LEN; i += 1) {
		const part = input.substring(i, i + ABBA_LEN)
		if (isABBA(part)) {
			return true
		}
	}

	return false
}

const removeSquareBrackets = input => input.replace(/(]|\[)/g, '')

export const doesSupportTLS = (input) => {
	const IP_REG_EXP = /](\w{4,})/ig
	const HYPERNET_REG_EXP = /\[(\w+)]/ig
	const trimmed = input.trim()

	const hypernetMatches = trimmed.match(HYPERNET_REG_EXP)
	const hypernetsThatSupport = hypernetMatches
		.map(removeSquareBrackets)
		.filter(containsABBA)

	if (hypernetsThatSupport.length) {
		return false
	}

	const matches = `]${trimmed}`.match(IP_REG_EXP)
	const matchesThatSupport = matches
		.map(removeSquareBrackets)
		.filter(containsABBA)

	return matchesThatSupport.length !== 0
}

export const countSupportingTLS = input => input
	.trim()
	.split('\n')
	.map(item => item.trim())
	.filter(doesSupportTLS)
	.length
