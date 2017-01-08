import { readInput } from '../utils'
import { countRealRoomsIdsSum, findSectorIdByPhraseInRoomId } from './rooms'

const INPUT = readInput(__dirname)

console.log('part 1:', countRealRoomsIdsSum(INPUT)) // 173787
console.log('part 2:', findSectorIdByPhraseInRoomId(INPUT, 'north')) // 548
