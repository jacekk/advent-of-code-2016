import { countRealRoomsIdsSum, isRoomReal } from './rooms'

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

	it('should count real rooms Ids sum', () => {
		expect(countRealRoomsIdsSum('aaaaa-bbb-z-y-x-123[abxyz]')).toEqual(123)
		expect(countRealRoomsIdsSum('not-a-real-room-404[oarel]')).toEqual(404)
		expect(countRealRoomsIdsSum(`
			aaaaa-bbb-z-y-x-123[abxyz]
			a-b-c-d-e-f-g-h-987[abcde]
			not-a-real-room-404[oarel]
			totally-real-room-200[decoy]
		`)).toEqual(1514)
	})
})

