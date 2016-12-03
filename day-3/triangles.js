import extend from 'extend'

/**
 * @param  {array|int} a
 * @param  {int} b
 * @param  {int} c
 * @return {bool}
 */
export const isTriangleValid = (a, b, c) => {
	if (a.length && a.length === 3) {
		[a, b, c] = a
	}

	return (
		a + b > c &&
		b + c > a &&
		c + a > b
	)
}

const parseLength = (input) => {
	return parseInt(input.trim())
}

const parseLine = (line) => {
	return line.trim().split(' ').filter(Boolean).map(parseLength)
}

export const countValidTriangles = (input) => {
	let counter = 0
	const lines = input.split('\n')

	lines.forEach((line) => {
		const parsed = parseLine(line)

		if (parsed.length === 3 && isTriangleValid(...parsed)) {
			counter += 1
		}
	})

	return counter
}

const mapFromColumnes = (lines) => {
	let mapped = []
	const elemsInRow = 3
	const numOfGroups = Math.floor(lines.length / elemsInRow)

	for (let groupIndex = 0; groupIndex < numOfGroups; groupIndex += 1) {
		for (let colIndex = 0; colIndex < elemsInRow; colIndex += 1) {
			let colGroup = []

			for (let rowIndex = 0; rowIndex < elemsInRow; rowIndex += 1) {
				const lineIndex = groupIndex * elemsInRow + rowIndex
				colGroup.push(lines[lineIndex][colIndex])
			}

			mapped.push(colGroup)
		}
	}

	return mapped
}

export const countValidTrianglesVertically = (input) => {
	const lines = input.split('\n')
	let parsedLines = []

	lines.forEach((line) => {
		const parsed = parseLine(line)

		if (parsed.length === 3) {
			parsedLines.push(parseLine(line))
		}
	})

	const mapped = mapFromColumnes(parsedLines)

	return mapped.filter(isTriangleValid).length
}
