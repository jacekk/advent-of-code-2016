const sanitizeName = input => input.replace(/-/g, '')

const splitRoomId = (roomId) => {
	const regExp = /^(.*)-(\d+)\[(\w+)]$/
	const [, name, id, checksum] = roomId.match(regExp)

	return {
		name,
		id: parseInt(id, 10),
		checksum,
	}
}

const countNameChars = (chars) => {
	const dict = {}

	chars.forEach((char) => {
		if (! dict[char]) {
			dict[char] = 0
		}
		dict[char] += 1
	})

	const list = Object.keys(dict).map((char) => {
		const occurance = dict[char]

		return { char, occurance }
	})

	return list
}

const orderNameCharsTopMost = chars => chars.sort((a, b) => {
	if (a.occurance > b.occurance) {
		return -1
	}
	if (a.occurance < b.occurance) {
		return 1
	}
	return a.char.localeCompare(b.char)
})

const calculateChecksumFromList = (list, checksumLength) => list
	.splice(0, checksumLength)
	.reduce((previous, current) => previous + current.char, '')

const calculateChecksumFromName = (name, checksumLength) => {
	const nameChars = sanitizeName(name).split('')
	const nameCharsCounted = countNameChars(nameChars)
	const nameCharsOrdered = orderNameCharsTopMost(nameCharsCounted)
	const checksum = calculateChecksumFromList(nameCharsOrdered, checksumLength)

	return checksum
}

export const isRoomReal = (roomId) => {
	const { name, checksum: checksumExtracted } = splitRoomId(roomId)
	const checksumCalculated = calculateChecksumFromName(name, checksumExtracted.length)

	return checksumExtracted === checksumCalculated
}

export const countRealRoomsIdsSum = (input) => {
	const lines = input.split('\n')
	let sum = 0

	lines.forEach((line) => { // @todo use map, filter, reduce
		const roomId = line.trim()

		if (roomId.length === 0) {
			return
		}

		const isReal = isRoomReal(roomId)

		if (isReal) {
			const { id } = splitRoomId(roomId)
			sum += id
		}
	})

	return sum
}
