import { readInput } from '../utils'
import {
	bathroomSecurity,
	FIRST_SCENE_MAP, FIRST_START,
	SECOND_SCENE_MAP, SECOND_START,
} from './bathroom'

const INPUT = readInput(__dirname)

console.log('part 1:', bathroomSecurity(FIRST_SCENE_MAP, FIRST_START, INPUT)) // 19636
console.log('part 2:', bathroomSecurity(SECOND_SCENE_MAP, SECOND_START, INPUT)) // 3CC43
