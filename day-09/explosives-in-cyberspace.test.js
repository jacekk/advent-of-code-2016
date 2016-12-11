import { decompresses, decompressesRecursively, countSequence } from './explosives-in-cyberspace'

describe('day 9 - explosives in cyberspace', () => {
	it('should decompress given sequences', () => {
		expect(decompresses('ADVENT')).toEqual('ADVENT')
		expect(decompresses('A(1x5)BC')).toEqual('ABBBBBC')
		expect(decompresses('(3x3)XYZ')).toEqual('XYZXYZXYZ')
		expect(decompresses('A(2x2)BCD(2x2)EFG')).toEqual('ABCBCDEFEFG')
		expect(decompresses('(6x1)(1x3)A')).toEqual('(1x3)A')
		expect(decompresses('X(8x2)(3x3)ABCY')).toEqual('X(3x3)ABC(3x3)ABCY')
	})
	it('should count sequences chars', () => {
		expect(countSequence('ADVENT')).toEqual(6)
		expect(countSequence('ABBBBBC')).toEqual(7)
		expect(countSequence('XYZXYZXYZ')).toEqual(9)
		expect(countSequence('ABCBCDEFEFG')).toEqual(11)
		expect(countSequence('(1x3)A')).toEqual(6)
		expect(countSequence('X(3x3)ABC(3x3)ABCY')).toEqual(18)
	})
	it('should handle multiline sequences', () => {
		expect(countSequence(decompresses(`
			A(2x2)BCD(2x2)EFG
			(6x1)(1x3)A
			X(8x2)(3x3)ABCY
		`))).toEqual(11 + 6 + 18)
	})
	it('should recursively decompress given sequences', () => {
		expect(decompressesRecursively('')).toEqual(0)
		expect(decompressesRecursively('(3x3)XYZ')).toEqual(9)
		expect(decompressesRecursively('X(8x2)(3x3)ABCY')).toEqual(20)
		expect(decompressesRecursively('(27x12)(20x12)(13x14)(7x10)(1x12)A')).toEqual(241920)
		expect(decompressesRecursively('(25x3)(3x3)ABC(2x3)XY(5x2)PQRSTX(18x9)(3x2)TWO(5x7)SEVEN')).toEqual(445)
	})
})
