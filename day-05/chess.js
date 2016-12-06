import md5 from 'md5'

const DEFAULT_PREFIX = '00'
const DEFAULT_PASSWORD_LEN = 2

const BLANK_CHAR = '_'
const POSITION_INDEX = 5
const CHAR_INDEX = 6
const ITERATIONS_LIMIT = 1e9

export const niceGameChess = (
	input,
	prefix = DEFAULT_PREFIX,
	passwordLen = DEFAULT_PASSWORD_LEN,
) => {
	let password = ''

	for	(let i = 0; i < ITERATIONS_LIMIT; i += 1) {
		const hash = md5(input + i)

		if (hash.indexOf(prefix) === 0) {
			const index = prefix.length
			password += hash.substring(index, index + 1)
		}

		if (password.length >= passwordLen) {
			break
		}
	}

	return password
}


export const replaceAt = (haystack, index, character) => {
	const indexAsInt = parseInt(index, 10)

	return [
		haystack.substring(0, indexAsInt),
		character,
		haystack.substring(indexAsInt + 1),
	].join('')
}

const isPositionValid = (haystack, position, passwordLen) => {
	const pos = parseInt(position, 10)

	if (isNaN(pos)) {
		return false
	}

	const charAtPos = haystack.substring(pos, pos + 1)

	return pos >= 0 &&
		pos < passwordLen &&
		charAtPos === BLANK_CHAR
}

export const niceGameChessBetter = (
	input,
	prefix = DEFAULT_PREFIX,
	passwordLen = DEFAULT_PASSWORD_LEN,
) => {
	let password = Array(passwordLen).fill(BLANK_CHAR).join('')

	for	(let i = 0; i < ITERATIONS_LIMIT; i += 1) {
		const hash = md5(input + i)

		if (hash.indexOf(prefix) === 0) {
			const pos = hash.substring(POSITION_INDEX, POSITION_INDEX + 1)
			const char = hash.substring(CHAR_INDEX, CHAR_INDEX + 1)

			if (isPositionValid(password, pos, passwordLen)) {
				password = replaceAt(password, pos, char)
			}
		}

		if (password.indexOf(BLANK_CHAR) < 0) {
			break
		}
	}

	return password
}
