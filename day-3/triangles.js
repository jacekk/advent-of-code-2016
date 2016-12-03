import extend from 'extend'

export const isTriangleValid = (sizes) => {
	const [a, b, c] = sizes

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

const hasSizes = (line) => {
	return line.length && line.length === 3
}

export const countValidTriangles = (input) => {
	return input
		.split('\n')
		.map(parseLine)
		.filter(hasSizes)
		.filter(isTriangleValid)
		.length
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
	const lines = input
		.split('\n')
		.map(parseLine)
		.filter(hasSizes)

	return mapFromColumnes(lines)
		.filter(isTriangleValid)
		.length
}
