import { removeSquareBrackets, SUPERNET_REG_EXP, HYPERNET_REG_EXP } from './ip7-tls'

const ABA_LEN = 3

export const isABA = (input) => {
	const [first, middle, last] = input.trim().split('')

	return first === last && first !== middle
}

export const getBAB = (input) => {
	const [first, middle] = input.trim().split('')

	return [
		middle,
		first,
		middle,
	].join('')
}

export const extractABA = (input) => {
	const len = input.length
	const list = []

	for (let i = 0; i <= len - ABA_LEN; i += 1) {
		const part = input.substring(i, i + ABA_LEN)
		if (isABA(part)) {
			list.push(part)
		}
	}

	return list
}

const flatten = nested => [].concat([], ...nested)

export const doesSupportSSL = (input) => {
	const supernets = `]${input}`.match(SUPERNET_REG_EXP).map(removeSquareBrackets)
	const hypernets = input.match(HYPERNET_REG_EXP).map(removeSquareBrackets)

	const supernetsABAs = flatten(supernets.map(extractABA))
	const hypernetsABAs = flatten(hypernets.map(extractABA))
	const hypernetsAsBABs = hypernetsABAs.map(getBAB)

	const intersect = supernetsABAs.filter(item => hypernetsAsBABs.indexOf(item) > -1)

	return intersect.length !== 0
}

export const countSupportingSSL = input => input
	.trim()
	.split('\n')
	.map(item => item.trim())
	.filter(doesSupportSSL)
	.length
