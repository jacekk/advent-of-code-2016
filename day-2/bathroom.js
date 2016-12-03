import extend from 'extend'

const MOVE_U = 'U'
const MOVE_D = 'D'
const MOVE_L = 'L'
const MOVE_R = 'R'

const FIRST_START = {
	x: 1,
	y: 1,
}

const SECOND_START = {
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

export const firstPositionToScene = (pos) => {
	return pos.x * 3 + pos.y + 1
}

const SECOND_SCENE_MAP = [
	[' ', ' ', '1', ' ', ' '],
	[' ', '2', '3', '4', ' '],
	['5', '6', '7', '8', '9'],
	[' ', 'A', 'B', 'C', ' '],
	[' ', ' ', 'D', ' ', ' '],
]

export const secondPositionToScene = (pos) => {
	return SECOND_SCENE_MAP[pos.x][pos.y].trim()
}

export const secondSceneToPosition = (needle) => {
	const map = SECOND_SCENE_MAP

	for (let rowIndex in map) {
		for (let colIndex in map[rowIndex]) {
			if (needle === map[rowIndex][colIndex]) {
				return {
					x: parseInt(rowIndex),
					y: parseInt(colIndex),
				}
			}
		}
	}
}

const firstHandleMove = (move) => {
	const pos = state.position

	switch (move) {
		case MOVE_U:
			if (pos.x > 0) {
				pos.x -= 1
			}
			break
		case MOVE_D:
			if (pos.x < 2) {
				pos.x += 1
			}
			break
		case MOVE_L:
			if (pos.y > 0) {
				pos.y -= 1
			}
			break
		case MOVE_R:
			if (pos.y < 2) {
				pos.y += 1
			}
			break
	}
}

const secondHandleMove = (move) => {
	let newPos = extend(true, {}, state.position)
	const colCount = SECOND_SCENE_MAP.length - 1
	const rowCount = SECOND_SCENE_MAP[0].length - 1

	switch (move) {
		case MOVE_U:
			if (newPos.x > 0) {
				newPos.x -= 1
			}
			break
		case MOVE_D:
			if (newPos.x < rowCount) {
				newPos.x += 1
			}
			break
		case MOVE_L:
			if (newPos.y > 0) {
				newPos.y -= 1
			}
			break
		case MOVE_R:
			if (newPos.y < colCount) {
				newPos.y += 1
			}
			break
	}

	const newScene = secondPositionToScene(newPos)

	if (newScene) {
		state.position = secondSceneToPosition(newScene)
	}
}

const savePosition = (mapper) => {
	const mapped = mapper(state.position)
	state.saved.push(mapped)
}

const getCodeFromInstructions = (input, moveHandler, positionMapper) => {
	const lines = input.trim().split('\n')

	lines.forEach((line) => {
		const moves = line.trim().split('')
		moves.forEach((move) => {
			moveHandler(move)
		})
		savePosition(positionMapper)
	})

	return state.saved.join('')
}

export const firstDecryptor = (input) => {
	resetState(FIRST_START)

	return getCodeFromInstructions(input, firstHandleMove, firstPositionToScene)
}

export const secondDecryptor = (input) => {
	resetState(SECOND_START)

	return getCodeFromInstructions(input, secondHandleMove, secondPositionToScene)
}
