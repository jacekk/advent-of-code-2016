import md5 from 'md5'

const PASSWORD_LEN = 8
const ITERATIONS_LIMIT = 1e9
const PREFIX = '00000'

export const niceGameChess = (input) => {
	let password = ''

	for	(let i = 0; i < ITERATIONS_LIMIT; i += 1) {
		const hash = md5(input + i)

		if (hash.indexOf(PREFIX) === 0) {
			const index = PREFIX.length
			password += hash.substring(index, index + 1)
		}

		if (password.length >= PASSWORD_LEN) {
			break
		}
	}

	return password
}

const BLANK_CHAR = '_'
const POSITION_INDEX = 5
const CHAR_INDEX = 6

export const replaceAt = (haystack, index, character) => {
	const indexAsInt = parseInt(index, 10)

	return [
		haystack.substring(0, indexAsInt),
		character,
		haystack.substring(indexAsInt + 1),
	].join('')
}

const isPositionValid = (haystack, position) => {
	const pos = parseInt(position, 10)

	if (isNaN(pos)) {
		return false
	}

	const charAtPos = haystack.substring(pos, pos + 1)

	return pos >= 0 &&
		pos < PASSWORD_LEN &&
		charAtPos === BLANK_CHAR
}

export const niceGameChessBetter = (input) => {
	let password = Array(PASSWORD_LEN).fill(BLANK_CHAR).join('')

	for	(let i = 0; i < ITERATIONS_LIMIT; i += 1) {
		const hash = md5(input + i)

		if (hash.indexOf(PREFIX) === 0) {
			const pos = hash.substring(POSITION_INDEX, POSITION_INDEX + 1)
			const char = hash.substring(CHAR_INDEX, CHAR_INDEX + 1)

			if (isPositionValid(password, pos)) {
				password = replaceAt(password, pos, char)
			}
		}

		if (password.indexOf(BLANK_CHAR) < 0) {
			break
		}
	}

	return password
}
