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

let state = DEFAULT_STATE;

const resetState = () => {
	state = extend(true, {}, DEFAULT_STATE)
}

const makeTurn = (dir) => {
	if (dir === 'R') {
		state.dir += 1;
	}
	if (dir === 'L') {
		state.dir -= 1;
	}

	if (state.dir < 1) {
		state.dir = 4;
	}
	if (state.dir > 4) {
		state.dir = 1;
	}
}

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

	state.visited.push([
		state.x,
		state.y,
	].join(':'))
}

export const getDistance = (moves) => {
	resetState()
	const splitted = moves.split(',')

	splitted.map((item, index) => {
		const move = item.match(/(R|L)(\d+)/)

		if (! move || ! move.length) {
			return
		}

		const [ both, turn, numOfSteps ] = item.match(/(R|L)(\d+)/)
		makeTurn(turn.trim())
		go(parseInt(numOfSteps, 10))
	})

	return Math.abs(state.x) + Math.abs(state.y)
}
