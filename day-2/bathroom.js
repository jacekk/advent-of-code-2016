import extend from 'extend'

const MOVE_U = 'U'
const MOVE_D = 'D'
const MOVE_L = 'L'
const MOVE_R = 'R'

export const FIRST_SCENE_MAP = [
	['1', '2', '3'],
	['4', '5', '6'],
	['7', '8', '9'],
]

export const FIRST_START = {
	x: 1,
	y: 1,
}

export const SECOND_SCENE_MAP = [
	[' ', ' ', '1', ' ', ' '],
	[' ', '2', '3', '4', ' '],
	['5', '6', '7', '8', '9'],
	[' ', 'A', 'B', 'C', ' '],
	[' ', ' ', 'D', ' ', ' '],
]

export const SECOND_START = {
	x: 2,
	y: 0,
}

const state = {
	position: {},
	saved: [],
}

const resetState = (startPosition) => {
	state.position = extend(true, {}, startPosition)
	state.saved = []
}

export const mapCharToPosition = (map, char) => {
	for (const rowIndex in map) {
		for (const colIndex in map[rowIndex]) {
			if (char === map[rowIndex][colIndex]) {
				return {
					x: parseInt(rowIndex, 10),
					y: parseInt(colIndex, 10),
				}
			}
		}
	}

	return undefined
}

const makeMove = (colCount, rowCount, pos, move) => {
	const newPos = extend(true, {}, pos)

	switch (move) {
	case MOVE_U:
		if (pos.x > 0) {
			newPos.x -= 1
		}
		break
	case MOVE_D:
		if (pos.x < rowCount) {
			newPos.x += 1
		}
		break
	case MOVE_L:
		if (pos.y > 0) {
			newPos.y -= 1
		}
		break
	case MOVE_R:
		if (pos.y < colCount) {
			newPos.y += 1
		}
		break
	}

	return newPos
}

const handleMove = (move, sceneMap) => {
	const colCount = sceneMap.length - 1
	const rowCount = sceneMap[0].length - 1
	const newPos = makeMove(colCount, rowCount, state.position, move)
	const newScene = sceneMap[newPos.x][newPos.y].trim()

	if (newScene) {
		state.position = mapCharToPosition(sceneMap, newScene)
	}
}

const savePosition = (sceneMap) => {
	const pos = state.position
	const mapped = sceneMap[pos.x][pos.y]

	state.saved.push(mapped.trim())
}

export const bathroomSecurity = (sceneMap, startPosition, input) => {
	resetState(startPosition)
	const lines = input.trim().split('\n')

	lines.forEach((line) => {
		const moves = line.trim().split('')
		moves.forEach((move) => {
			handleMove(move, sceneMap)
		})
		savePosition(sceneMap)
	})

	return state.saved.join('')
}
