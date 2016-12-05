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
