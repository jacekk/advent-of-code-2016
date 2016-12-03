import { mapPositionToScene, getCodeFromInstructions } from './bathroom'

describe('bathroom', () => {

	it('should map position to scene', () => {
		expect(mapPositionToScene({ x: 0, y: 0 })).toEqual(1)
		expect(mapPositionToScene({ x: 0, y: 1 })).toEqual(2)
		expect(mapPositionToScene({ x: 0, y: 2 })).toEqual(3)
		expect(mapPositionToScene({ x: 1, y: 0 })).toEqual(4)
		expect(mapPositionToScene({ x: 1, y: 1 })).toEqual(5)
		expect(mapPositionToScene({ x: 1, y: 2 })).toEqual(6)
		expect(mapPositionToScene({ x: 2, y: 0 })).toEqual(7)
		expect(mapPositionToScene({ x: 2, y: 1 })).toEqual(8)
		expect(mapPositionToScene({ x: 2, y: 2 })).toEqual(9)
	})

	it('should translate instructions', () => {
		expect(getCodeFromInstructions('')).toEqual(5)
		expect(getCodeFromInstructions('R')).toEqual(6)
		expect(getCodeFromInstructions('L')).toEqual(4)
		expect(getCodeFromInstructions('U')).toEqual(2)
		expect(getCodeFromInstructions('D')).toEqual(8)
		expect(getCodeFromInstructions('DDD')).toEqual(8)
		expect(getCodeFromInstructions('DR')).toEqual(9)
		expect(getCodeFromInstructions('UUDRUUDD')).toEqual(9)
		expect(getCodeFromInstructions(`
			LLU
			DRDRR
		`)).toEqual(19)
		expect(getCodeFromInstructions(`
			ULL
			RRDDD
			LURDL
			UUUUD
		`)).toEqual(1985)
	})
})
