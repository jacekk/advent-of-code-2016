import { firstPositionToScene, firstDecryptor } from './bathroom'
import { secondPositionToScene, secondSceneToPosition, secondDecryptor } from './bathroom'

describe('bathroom', () => {

	describe('first', () => {

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
				DRDRRR
			`)).toEqual('19')
			expect(firstDecryptor(`
				ULL
				RRDDD
				LURDL
				UUUUD
			`)).toEqual('1985')
		})

	})

	describe('second', () => {

		it('should map position to scene', () => {
			expect(secondPositionToScene({ x: 0, y: 0 })).toEqual('')
			expect(secondPositionToScene({ x: 0, y: 1 })).toEqual('')
			expect(secondPositionToScene({ x: 0, y: 2 })).toEqual('1')
			expect(secondPositionToScene({ x: 1, y: 0 })).toEqual('')
			expect(secondPositionToScene({ x: 1, y: 1 })).toEqual('2')
			expect(secondPositionToScene({ x: 1, y: 2 })).toEqual('3')
			expect(secondPositionToScene({ x: 2, y: 0 })).toEqual('5')
			expect(secondPositionToScene({ x: 2, y: 1 })).toEqual('6')
			expect(secondPositionToScene({ x: 2, y: 2 })).toEqual('7')
		})

		it('should map scene to position', () => {
			expect(secondSceneToPosition('5')).toEqual({ x: 2, y: 0 })
			expect(secondSceneToPosition('7')).toEqual({ x: 2, y: 2 })
			expect(secondSceneToPosition('D')).toEqual({ x: 4, y: 2 })
		})

		it('should translate instructions', () => {
			expect(secondDecryptor('R')).toEqual('6')
			expect(secondDecryptor('L')).toEqual('5')
			expect(secondDecryptor('U')).toEqual('5')
			expect(secondDecryptor('D')).toEqual('5')
			expect(secondDecryptor('DDD')).toEqual('5')
			expect(secondDecryptor('LLL')).toEqual('5')
			expect(secondDecryptor('RRR')).toEqual('8')
			expect(secondDecryptor('RRRRRRRRR')).toEqual('9')
			expect(secondDecryptor('RD')).toEqual('A')
			expect(secondDecryptor('RRDRUURR')).toEqual('4')
			expect(secondDecryptor(`
				RRU
				DRDRRR
			`)).toEqual('3C')
			expect(secondDecryptor(`
				ULL
				RRDDD
				LURDL
				UUUUD
			`)).toEqual('5DB3')
		})

	})

})
