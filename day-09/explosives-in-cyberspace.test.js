import { decompresses, countSequence } from './explosives-in-cyberspace'

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
})
