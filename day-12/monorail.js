let registers = {}
let index = 0

export const intOrRegisterValue = value => (! isNaN(+value) ? +value : registers[value])

const copyValue = (name, value) => {
	const newValue = intOrRegisterValue(value)

	registers[name] = newValue
	index += 1
}

const increment = (name) => {
	registers[name] += 1
	index += 1
}

const decrement = (name) => {
	registers[name] -= 1
	index += 1
}

const jump = (first, offset) => {
	const value = intOrRegisterValue(first)

	if (value !== 0) {
		index += offset
	} else {
		index += 1
	}
}

const parseLine = (line) => {
	switch (0) {
	case line.indexOf('cpy'): {
		const [, value, name] = line.split(' ', 3)
		copyValue(name, value)
		break
	}
	case line.indexOf('inc'): {
		const [, name] = line.split(' ', 2)
		increment(name)
		break
	}
	case line.indexOf('dec'): {
		const [, name] = line.split(' ', 2)
		decrement(name)
		break
	}
	case line.indexOf('jnz'): {
		const [, name, offset] = line.split(' ', 3)
		jump(name, +offset)
		break
	}
	}
}

export const execLines = (input, regName, registersInitial) => {
	registers = registersInitial
	index = 0

	const lines = input.trim().split('\n').map(item => item.trim())

	while (lines[index]) {
		parseLine(lines[index])
	}

	return registers[regName] || 0
}
