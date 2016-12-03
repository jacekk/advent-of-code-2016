import extend from 'extend'

const MOVE_U = 'U'
const MOVE_D = 'D'
const MOVE_L = 'L'
const MOVE_R = 'R'

const START = {
	x: 1,
	y: 1,
}

const state = {
	position: {},
	saved: [],
}

const resetState = () => {
	state.position = extend(true, {}, START)
	state.saved = []
}

export const firstPositionToScene = (pos) => {
	return pos.x * 3 + pos.y + 1
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

const savePosition = (mapper) => {
	const mapped = mapper(state.position)
	state.saved.push(mapped)
}

const getCodeFromInstructions = (input, moveHandler, positionMapper) => {
	resetState()
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
	return getCodeFromInstructions(input, firstHandleMove, firstPositionToScene)
}
