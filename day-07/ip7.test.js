import { isABBA, containsABBA, doesSupportTLS, countSupportingTLS } from './ip7'

describe('day 7 - ip7', () => {
	it('should detects if given 4-letter string is Autonomous Bridge Bypass Annotation', () => {
		expect(isABBA('oxxo')).toEqual(true)
		expect(isABBA('OXXO')).toEqual(true)

		expect(isABBA('ooxx')).toEqual(false)
		expect(isABBA('oooo')).toEqual(false)
		expect(isABBA('oXxO')).toEqual(false)
	})

	it('should detects if given input contains Autonomous Bridge Bypass Annotation', () => {
		expect(containsABBA('oxxo')).toEqual(true)
		expect(containsABBA('oxxoii')).toEqual(true)
		expect(containsABBA('joxxoi')).toEqual(true)
		expect(containsABBA('iioxxoi')).toEqual(true)
		expect(containsABBA('oxXoxxo')).toEqual(true)

		expect(containsABBA('oXxo')).toEqual(false)
		expect(containsABBA('oxxxxo')).toEqual(false)
	})

	it('should detects if given ip7 supports TLS', () => {
		expect(doesSupportTLS('abba[mnop]qrst')).toEqual(true)
		expect(doesSupportTLS('ioxxoj[asdfgh]zxcvbn')).toEqual(true)
		expect(doesSupportTLS('ioxxoj[asdfgh]oooo')).toEqual(true)
		expect(doesSupportTLS('ioxxoj[abcd]xoox[bcde]oooo')).toEqual(true)

		expect(doesSupportTLS('abcd[bddb]xyyx')).toEqual(false)
		expect(doesSupportTLS('aaaa[qwer]tyui')).toEqual(false)
		expect(doesSupportTLS('ioxxoj[oxxo]oooo')).toEqual(false)
		expect(doesSupportTLS('ioxxoj[abcd]xoox[oxxo]oooo')).toEqual(false)
	})

	it('should count ip7 entries that support TLS', () => {
		expect(countSupportingTLS(`
			abba[mnop]qrst
			abcd[bddb]xyyx
			aaaa[qwer]tyui
			ioxxoj[asdfgh]zxcvbn
		`)).toEqual(2)
	})
})
