import { clearNoise } from './signals-and-noise'

describe('day 6 - signals and noise', () => {
	it('should find most frequent characters', () => {
		expect(clearNoise(`
			eedadn
			drvtee
			eandsr
			raavrd
			atevrs
			tsrnev
			sdttsa
			rasrtv
			nssdts
			ntnada
			svetve
			tesnvt
			vntsnd
			vrdear
			dvrsen
			enarar
		`)).toEqual('easter')
	})
})
