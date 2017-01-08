import { readInput } from '../utils'
import { countSupportingTLS } from './ip7-tls'
import { countSupportingSSL } from './ip7-ssl'

const INPUT = readInput(__dirname)

console.log('part 1:', countSupportingTLS(INPUT)) // 110
console.log('part 2:', countSupportingSSL(INPUT)) // 242
