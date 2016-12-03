import extend from 'extend'

const MOVE_U = 'U'
const MOVE_D = 'D'
const MOVE_L = 'L'
const MOVE_R = 'R'

const START = {
	x: 1,
	y: 1,
}

export const mapPositionToScene = (pos) => {
	return pos.x * 3 + pos.y + 1
}

const state = {
	position: {},
	saved: [],
}

const resetState = () => {
	state.position = extend(true, {}, START)
	state.saved = []
}

const handleMove = (move) => {
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

const savePosition = () => {
	const posAsSceneValue = mapPositionToScene(state.position)
	state.saved.push(posAsSceneValue)
}

export const getCodeFromInstructions = (input) => {
	resetState()
	const lines = input.trim().split('\n')

	lines.forEach((line) => {
		const moves = line.trim().split('')
		moves.forEach((move) => {
			handleMove(move)
		})
		savePosition()
	})

	return parseInt(state.saved.join(''))
}
