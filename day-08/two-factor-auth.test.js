import { PX_ON, PX_OFF, makeEmptyScreen, rect, rotateColumn, rotateRow, operate, multipleOperations, countOn } from './two-factor-auth'

describe('day 8 - two factor auth', () => {
	it('should create empty scrren', () => {
		const screen = makeEmptyScreen()

		expect(screen.length).toEqual(6)
		expect(screen[0].length).toEqual(50)
		expect(screen[0][0]).toEqual('.')
		expect(screen.pop().pop()).toEqual('.')
	})

	it('should light on rectangular of specific size', () => {
		let screen = makeEmptyScreen()
		screen = rect(screen, 2, 2)

		expect(screen[0][0]).toEqual(PX_ON)
		expect(screen[0][1]).toEqual(PX_ON)
		expect(screen[1][0]).toEqual(PX_ON)
		expect(screen[1][1]).toEqual(PX_ON)

		expect(screen[2][2]).toEqual(PX_OFF)
	})

	it('should rotate screen column by some pixels', () => {
		let screen = makeEmptyScreen()
		screen = rect(screen, 3, 3)
		screen = rotateColumn(screen, 1, 2)

		expect(screen[0][1]).toEqual(PX_OFF)
		expect(screen[1][1]).toEqual(PX_OFF)
		expect(screen[2][1]).toEqual(PX_ON)
		expect(screen[3][1]).toEqual(PX_ON)
		expect(screen[4][1]).toEqual(PX_ON)
		expect(screen[5][1]).toEqual(PX_OFF)
	})

	it('should rotate screen row by some pixels', () => {
		let screen = makeEmptyScreen()
		screen = rect(screen, 3, 3)
		screen = rotateRow(screen, 1, 4)

		expect(screen[0][0]).toEqual(PX_ON)
		expect(screen[0][1]).toEqual(PX_ON)
		expect(screen[0][2]).toEqual(PX_ON)
		expect(screen[0][3]).toEqual(PX_OFF)

		expect(screen[1][1]).toEqual(PX_OFF)
		expect(screen[1][2]).toEqual(PX_OFF)
		expect(screen[1][3]).toEqual(PX_OFF)
		expect(screen[1][4]).toEqual(PX_ON)
		expect(screen[1][5]).toEqual(PX_ON)
		expect(screen[1][6]).toEqual(PX_ON)
		expect(screen[1][7]).toEqual(PX_OFF)
	})

	it('should detect rect operation', () => {
		let screen = makeEmptyScreen()

		expect(screen[0][0]).toEqual(PX_OFF)

		screen = operate(screen, 'rect 2x3')

		expect(screen[0][0]).toEqual(PX_ON)
		expect(screen[0][1]).toEqual(PX_ON)
		expect(screen[0][2]).toEqual(PX_OFF)

		expect(screen[1][0]).toEqual(PX_ON)
		expect(screen[1][1]).toEqual(PX_ON)
		expect(screen[1][2]).toEqual(PX_OFF)

		expect(screen[2][0]).toEqual(PX_ON)
		expect(screen[2][1]).toEqual(PX_ON)
		expect(screen[2][2]).toEqual(PX_OFF)

		expect(screen[3][0]).toEqual(PX_OFF)
		expect(screen[3][1]).toEqual(PX_OFF)
		expect(screen[3][2]).toEqual(PX_OFF)
	})

	it('should detect rotate row operation', () => {
		let screen = makeEmptyScreen()

		screen = rect(screen, 3, 3)
		screen = operate(screen, 'rotate row y=1 by 2')

		expect(screen[0][0]).toEqual(PX_ON)
		expect(screen[0][1]).toEqual(PX_ON)
		expect(screen[0][2]).toEqual(PX_ON)
		expect(screen[0][3]).toEqual(PX_OFF)

		expect(screen[1][0]).toEqual(PX_OFF)
		expect(screen[1][1]).toEqual(PX_OFF)
		expect(screen[1][2]).toEqual(PX_ON)
		expect(screen[1][3]).toEqual(PX_ON)
		expect(screen[1][4]).toEqual(PX_ON)
		expect(screen[1][5]).toEqual(PX_OFF)

		expect(screen[2][0]).toEqual(PX_ON)
		expect(screen[2][1]).toEqual(PX_ON)
		expect(screen[2][2]).toEqual(PX_ON)
		expect(screen[2][3]).toEqual(PX_OFF)
	})

	it('should detect rotate column operation', () => {
		let screen = makeEmptyScreen()

		screen = rect(screen, 3, 3)
		screen = operate(screen, 'rotate column x=2 by 3')

		expect(screen[0][2]).toEqual(PX_OFF)
		expect(screen[1][2]).toEqual(PX_OFF)
		expect(screen[2][2]).toEqual(PX_OFF)
		expect(screen[3][2]).toEqual(PX_ON)
		expect(screen[4][2]).toEqual(PX_ON)
		expect(screen[5][2]).toEqual(PX_ON)
	})

	it('should not modify screen if no operation has been detected', () => {
		const src = makeEmptyScreen()
		const modified = operate(src, '')

		expect(src).toEqual(modified)
	})

	it('should parse list of operations', () => {
		const screen = multipleOperations(makeEmptyScreen(), `
			rect 3x3
			rotate column x=2 by 1
			rotate row y=2 by 2
			rect 3x3
		`)

		expect(screen[0][2]).toEqual(PX_ON)
		expect(screen[2][4]).toEqual(PX_ON)
		expect(screen[2][3]).toEqual(PX_ON)
	})

	it('should cound pixels that are on', () => {
		expect(countOn(rect(makeEmptyScreen(), 1, 1))).toEqual(1)
		expect(countOn(rect(makeEmptyScreen(), 2, 2))).toEqual(4)
		expect(countOn(rect(makeEmptyScreen(), 10, 5))).toEqual(50)

		const screen = rect(makeEmptyScreen(), 10, 5)
		screen[0][0] = PX_OFF
		expect(countOn(screen)).toEqual(49)
	})
})
