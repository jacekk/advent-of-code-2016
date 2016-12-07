import { isABBA, containsABBA, doesSupportTLS, countSupportingTLS } from './ip7-tls'
import { isABA, getBAB, extractABA, doesSupportSSL, countSupportingSSL } from './ip7-ssl'

describe('day 7 - ip7', () => {
	describe('TLS - transport-layer snooping', () => {
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
	describe('SSL - super-secret listening', () => {
		it('should check if given 3-letter string is Area-Broadcast Accessor', () => {
			expect(isABA('oxo')).toEqual(true)
			expect(isABA('oXo')).toEqual(true)

			expect(isABA('abc')).toEqual(false)
			expect(isABA('ooo')).toEqual(false)
			expect(isABA('oxO')).toEqual(false)
		})
		it('should generate Byte Allocation Block from given ABA', () => {
			expect(getBAB('oxo')).toEqual('xox')
			expect(getBAB('oXo')).toEqual('XoX')
		})
		it('should detect all Area-Broadcast Accessor inside longer string', () => {
			expect(extractABA('oxo')).toEqual(['oxo'])
			expect(extractABA('oxooxo')).toEqual(['oxo', 'oxo'])
			expect(extractABA('oxoxo')).toEqual(['oxo', 'xox', 'oxo'])
			expect(extractABA('oxooox')).toEqual(['oxo'])
		})
		it('should detects if given ip7 supports TLS', () => {
			expect(doesSupportSSL('aba[bab]xyz')).toEqual(true)
			expect(doesSupportSSL('aaa[kek]eke')).toEqual(true)
			expect(doesSupportSSL('zazbz[bzb]cdb')).toEqual(true)
			expect(doesSupportSSL('zazbz[bzbxb]aaa[oxo]cdbd')).toEqual(true)

			expect(doesSupportSSL('xyx[xyx]xyx')).toEqual(false)
		})
		it('should count ip7 entries that support SSL', () => {
			expect(countSupportingSSL(`
				aba[bab]xyz
				zazbz[bzbxb]aaa[oxo]cdbd
				xyx[xyx]xyx
			`)).toEqual(2)
		})
	})
})
