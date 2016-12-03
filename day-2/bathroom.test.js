import { firstPositionToScene, firstDecryptor } from './bathroom'

describe('bathroom', () => {

	it('should map position to scene', () => {
		expect(firstPositionToScene({ x: 0, y: 0 })).toEqual(1)
		expect(firstPositionToScene({ x: 0, y: 1 })).toEqual(2)
		expect(firstPositionToScene({ x: 0, y: 2 })).toEqual(3)
		expect(firstPositionToScene({ x: 1, y: 0 })).toEqual(4)
		expect(firstPositionToScene({ x: 1, y: 1 })).toEqual(5)
		expect(firstPositionToScene({ x: 1, y: 2 })).toEqual(6)
		expect(firstPositionToScene({ x: 2, y: 0 })).toEqual(7)
		expect(firstPositionToScene({ x: 2, y: 1 })).toEqual(8)
		expect(firstPositionToScene({ x: 2, y: 2 })).toEqual(9)
	})

	it('should translate instructions', () => {
		expect(firstDecryptor('')).toEqual('5')
		expect(firstDecryptor('R')).toEqual('6')
		expect(firstDecryptor('L')).toEqual('4')
		expect(firstDecryptor('U')).toEqual('2')
		expect(firstDecryptor('D')).toEqual('8')
		expect(firstDecryptor('DDD')).toEqual('8')
		expect(firstDecryptor('DR')).toEqual('9')
		expect(firstDecryptor('UUDRUUDD')).toEqual('9')
		expect(firstDecryptor(`
			LLU
			DRDRR
		`)).toEqual('19')
		expect(firstDecryptor(`
			ULL
			RRDDD
			LURDL
			UUUUD
		`)).toEqual('1985')
	})
})
