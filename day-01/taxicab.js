import extend from 'extend'

const DIR_N = 1
const DIR_E = 2
const DIR_S = 3
const DIR_W = 4

const DEFAULT_STATE = {
	x: 0,
	y: 0,
	dir: DIR_N,
	visited: ['0:0'],
}

let state = DEFAULT_STATE

const resetState = () => {
	state = extend(true, {}, DEFAULT_STATE)
}

const makeTurn = (dir) => {
	if (dir === 'R') {
		state.dir += 1
	}
	if (dir === 'L') {
		state.dir -= 1
	}

	if (state.dir < 1) {
		state.dir = 4
	}
	if (state.dir > 4) {
		state.dir = 1
	}
}

const parseMove = move => move.match(/(R|L)(\d+)/)

const getStateDistance = () => Math.abs(state.x) + Math.abs(state.y)

const go = (steps) => {
	switch (state.dir) {
	case DIR_N:
		state.y += steps
		break
	case DIR_E:
		state.x += steps
		break
	case DIR_S:
		state.y -= steps
		break
	case DIR_W:
		state.x -= steps
		break
	}
}

const makeMove = (move) => {
	if (! move || ! move.length) {
		return
	}

	const [, turn, numOfSteps] = move
	makeTurn(turn.trim())
	go(parseInt(numOfSteps, 10))
}

const goAndTellIfVisited = (steps) => {
	for (let i = 0; i < steps; i += 1) {
		switch (state.dir) {
		case DIR_N:
			state.y += 1
			break
		case DIR_E:
			state.x += 1
			break
		case DIR_S:
			state.y -= 1
			break
		case DIR_W:
			state.x -= 1
			break
		}

		const location = [
			state.x,
			state.y,
		].join(':')

		const didVisited = state.visited.indexOf(location) > -1
		state.visited.push(location)

		if (didVisited) {
			return true
		}
	}

	return false
}

const makeMoveAndTellIfVisited = (move) => {
	if (! move || ! move.length) {
		return undefined
	}

	const [, turn, numOfSteps] = move
	makeTurn(turn.trim())

	return goAndTellIfVisited(parseInt(numOfSteps, 10))
}

export const getDistance = (moves) => {
	resetState()
	const splitted = moves.split(',')

	splitted.forEach((item) => {
		const move = parseMove(item)
		makeMove(move)
	})

	return getStateDistance()
}

export const getFirstVisitedTwiceDistance = (moves) => {
	resetState()
	const splitted = moves.split(',')

	for (const index in splitted) {
		const move = parseMove(splitted[index])
		if (makeMoveAndTellIfVisited(move)) {
			break
		}
	}

	return getStateDistance()
}
