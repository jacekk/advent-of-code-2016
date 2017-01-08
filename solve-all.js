import fs from 'fs'
import path from 'path'
import childProcess from 'child_process'

const BASE_DIR = __dirname
const DAY_DIR_PATTERN = /^day-(\d+)$/

const dequeueSolutions = (solutions) => {
	if (solutions.length) {
		const first = solutions.splice(0, 1)
		const process = childProcess.fork(first)

		process.on('exit', () => {
			console.log()
			dequeueSolutions(solutions)
		})
	}
}

fs.readdir(BASE_DIR, (err, dirItems) => {
	if (err) {
		console.error(err)
		return
	}

	const existing = dirItems
		.filter(item => DAY_DIR_PATTERN.test(item))
		.map(item => path.join(BASE_DIR, item, 'solve.js'))
		.filter(item => fs.existsSync(item))

	dequeueSolutions(existing)
})
