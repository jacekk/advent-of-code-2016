import { countRealRoomsIdsSum, isRoomReal, decryptRoomId, findSectorIdByPhraseInRoomId } from './rooms'

describe('day 4 - rooms', () => {
	it('should detect real rooms', () => {
		expect(isRoomReal('aaaaa-bbb-z-y-x-123[abxyz]')).toEqual(true)
		expect(isRoomReal('a-b-c-d-e-f-g-h-987[abcde]')).toEqual(true)
		expect(isRoomReal('aaaaa-bbb-z-y-x-123[abxyz]')).toEqual(true)
		expect(isRoomReal('not-a-real-room-404[oarel]')).toEqual(true)
	})

	it('should detect non-real rooms', () => {
		expect(isRoomReal('totally-real-room-200[decoy]')).toEqual(false)
		expect(isRoomReal('aaaaa-bbb-z-y-x-123[aaaaa]')).toEqual(false)
		expect(isRoomReal('aaaaa-bbb-z-y-x-123[zyxba]')).toEqual(false)
		expect(isRoomReal('aaaaa-bbb-z-y-x-123[abxya]')).toEqual(false)
	})

	it('should count real rooms ids sum', () => {
		expect(countRealRoomsIdsSum('aaaaa-bbb-z-y-x-123[abxyz]')).toEqual(123)
		expect(countRealRoomsIdsSum('not-a-real-room-404[oarel]')).toEqual(404)
		expect(countRealRoomsIdsSum(`
			aaaaa-bbb-z-y-x-123[abxyz]
			a-b-c-d-e-f-g-h-987[abcde]
			not-a-real-room-404[oarel]
			totally-real-room-200[decoy]
		`)).toEqual(1514)
	})

	it('should decrypt sentence from room id', () => {
		expect(decryptRoomId('a-1[a]')).toEqual('b')
		expect(decryptRoomId('a-2[a]')).toEqual('c')
		expect(decryptRoomId('z-1[z]')).toEqual('a')
		expect(decryptRoomId('z-3[z]')).toEqual('c')
		expect(decryptRoomId('qzmt-zixmtkozy-ivhz-343[whatever]')).toEqual('very encrypted name')
	})

	it('should find sector id by certain phrase in encrypted room name', () => {
		const input = `
			totally-real-room-200[decoy]
			lmprfnmjc-mzhcar-qrmpyec-548[mcrpa]
			not-a-real-room-404[oarel]
		`
		expect(findSectorIdByPhraseInRoomId(input, 'north')).toEqual(548)
	})
})
