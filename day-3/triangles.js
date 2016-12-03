import extend from 'extend'

export const isTriangleValid = (a, b, c) => {
	return (
		a + b > c &&
		b + c > a &&
		c + a > b
	)
}

const parseLength = (input) => {
	return parseInt(input.trim())
}

export const countValidTriangles = (input) => {
	let counter = 0
	const lines = input.split('\n')

	lines.forEach((line) => {
		const lengths = line.trim().split(' ').filter(Boolean).map(parseLength)

		if (isTriangleValid(...lengths)) {
			counter += 1
		}
	})

	return counter
}
