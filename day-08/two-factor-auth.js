import extend from 'extend'

export const PX_ON = '#'
export const PX_OFF = '.'
export const SIZE_HEI = 6
export const SIZE_WID = 50

const int = input => parseInt(input, 10)
const flatten = nested => [].concat([], ...nested)

export const printScreen = (screen) => {
	const stdout = screen
		.map(row => row.join(''))
		.join('\n')

	console.log(stdout)
}

export const makeEmptyScreen = () => Array(SIZE_HEI)
	.fill()
	.map(() => Array(SIZE_WID).fill(PX_OFF))

export const rect = (screen, wid, hei) => {
	const modified = extend(true, [], screen)

	for (let rowIndex = 0; rowIndex < hei && rowIndex < SIZE_HEI; rowIndex += 1) {
		for (let colIndex = 0; colIndex < wid && rowIndex < SIZE_WID; colIndex += 1) {
			modified[rowIndex][colIndex] = PX_ON
		}
	}

	return modified
}

export const shiftValues = (values, offset) => {
	const endValues = values.splice(-offset)

	Array.prototype.unshift.apply(values, endValues)

	return values
}

export const rotateRow = (screen, index, offset) => {
	const modified = extend(true, [], screen)
	let rowValues = screen[index]
	rowValues = shiftValues(rowValues, offset)
	modified[index] = rowValues

	return modified
}

export const rotateColumn = (screen, index, offset) => {
	const getColValues = row => row
		.filter((col, colIndex) => colIndex === index)
		.pop()

	const modified = extend(true, [], screen)
	let colValues = screen.map(getColValues)
	colValues = shiftValues(colValues, offset)

	colValues.forEach((item, rowIndex) => {
		modified[rowIndex][index] = item
	})

	return modified
}

export const operate = (screen, operation) => {
	const REG_EXP_RECT = /rect (\d+)x(\d+)/
	const REG_EXP_ROTATE_ROW = /rotate row y=(\d+) by (\d+)/
	const REG_EXP_ROTATE_COL = /rotate column x=(\d+) by (\d+)/

	const rectMatch = operation.match(REG_EXP_RECT)
	const rotRowMatch = operation.match(REG_EXP_ROTATE_ROW)
	const rotColMatch = operation.match(REG_EXP_ROTATE_COL)

	if (rectMatch) {
		return rect(screen, int(rectMatch[1]), int(rectMatch[2]))
	}
	if (rotRowMatch) {
		return rotateRow(screen, int(rotRowMatch[1]), int(rotRowMatch[2]))
	}
	if (rotColMatch) {
		return rotateColumn(screen, int(rotColMatch[1]), int(rotColMatch[2]))
	}

	return screen
}

export const multipleOperations = (screen, input) => {
	const lines = input.trim().split('\n')
	let modified = extend(true, [], screen)

	lines
		.map(line => line.trim())
		.filter(Boolean)
		.forEach((line) => {
			modified = operate(modified, line)
		})

	return modified
}

export const countOn = screen => flatten(screen)
	.filter(px => px === PX_ON)
	.length
