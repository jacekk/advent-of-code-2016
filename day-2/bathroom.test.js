import { mapCharToPosition, bathroomSecurity } from './bathroom'
import { FIRST_SCENE_MAP, FIRST_START } from './bathroom'
import { SECOND_SCENE_MAP, SECOND_START } from './bathroom'

describe('day 2 - bathroom', () => {

	describe('first', () => {

		it('should map scene char to position', () => {
			const mapper = mapCharToPosition.bind(null, FIRST_SCENE_MAP)

			expect(mapper('1')).toEqual({ x: 0, y: 0 })
			expect(mapper('3')).toEqual({ x: 0, y: 2 })
			expect(mapper('5')).toEqual({ x: 1, y: 1 })
			expect(mapper('9')).toEqual({ x: 2, y: 2 })
		})

		it('should descrypt bathroom', () => {
			const bath = bathroomSecurity.bind(null, FIRST_SCENE_MAP, FIRST_START)

			expect(bath('')).toEqual('5')
			expect(bath('R')).toEqual('6')
			expect(bath('L')).toEqual('4')
			expect(bath('U')).toEqual('2')
			expect(bath('D')).toEqual('8')
			expect(bath('DDD')).toEqual('8')
			expect(bath('DR')).toEqual('9')
			expect(bath('UUDRUUDD')).toEqual('9')
			expect(bath(`
				LLU
				DRDRRR
			`)).toEqual('19')
			expect(bath(`
				ULL
				RRDDD
				LURDL
				UUUUD
			`)).toEqual('1985')
		})
	})

	describe('second', () => {

		it('should map scene char to position', () => {
			const mapper = mapCharToPosition.bind(null, SECOND_SCENE_MAP)

			expect(mapper('5')).toEqual({ x: 2, y: 0 })
			expect(mapper('7')).toEqual({ x: 2, y: 2 })
			expect(mapper('D')).toEqual({ x: 4, y: 2 })
		})

		it('should descrypt bathroom', () => {
			const bath = bathroomSecurity.bind(null, SECOND_SCENE_MAP, SECOND_START)

			expect(bath('R')).toEqual('6')
			expect(bath('L')).toEqual('5')
			expect(bath('U')).toEqual('5')
			expect(bath('D')).toEqual('5')
			expect(bath('DDD')).toEqual('5')
			expect(bath('LLL')).toEqual('5')
			expect(bath('RRR')).toEqual('8')
			expect(bath('RRRRRRRRR')).toEqual('9')
			expect(bath('RD')).toEqual('A')
			expect(bath('RRDRUURR')).toEqual('4')
			expect(bath(`
				RRU
				DRDRRR
			`)).toEqual('3C')
			expect(bath(`
				ULL
				RRDDD
				LURDL
				UUUUD
			`)).toEqual('5DB3')
		})
	})

})
