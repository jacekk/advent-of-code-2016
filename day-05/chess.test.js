import { niceGameChess, niceGameChessBetter, replaceAt } from './chess'

describe('day 5 - chess', () => {
	it('should replace string chart at given position', () => {
		expect(replaceAt('abc', 0, 'z')).toEqual('zbc')
		expect(replaceAt('___', 1, 'a')).toEqual('_a_')
		expect(replaceAt('________', 5, 5)).toEqual('_____5__')
		expect(replaceAt('___', '1', 5)).toEqual('_5_')
	})

	it('should find the password from sample data', () => {
		// short prefix and password
		expect(niceGameChess('abc')).toEqual('35')
		expect(niceGameChessBetter('abc')).toEqual('96')
	})
	xit('should find the password from door id', () => {
		// takes a lot of minutes to execute for such long prefix and password
		expect(niceGameChess('abc', '00000', 8)).toEqual('18f47a30')
		expect(niceGameChessBetter('abc', '00000', 8)).toEqual('05ace8e3')
	})
})
