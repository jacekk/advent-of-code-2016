import { getMostFrequent, getLeastFrequent } from './signals-and-noise'

const input = `
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
`

describe('day 6 - signals and noise', () => {
	it('should find most frequent characters', () => {
		expect(getMostFrequent(input)).toEqual('easter')
	})
	it('should find least frequent characters', () => {
		expect(getLeastFrequent(input)).toEqual('advent')
	})
})
