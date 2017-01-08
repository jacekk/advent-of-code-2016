import fs from 'fs'
import path from 'path'

export const getDay = dirName => path.basename(dirName)

export const readInput = (dirName) => {
	console.log('*', getDay(dirName))

	return fs.readFileSync(
		path.join(dirName, 'input.txt'),
		{ encoding: 'utf8' },
	).trim()
}

