/*

args: cmd: string, args: string
return: 

*/
const execFile = require('child_process').execFile

const execCmd = (cmd, args) => {
	const child = execFile(cmd, [args], (error, stdout, stderr) => {
		if (error) {
			console.error('stderr', stderr)
			throw error
		}
	})
}

// Expose execCmd module
module.exports = execCmd

// const npmInstall = () => {
// 	const child = execFile('npm', ['install'], (error, stdout, stderr) => {
// 		if (error) {
// 			console.error('stderr', stderr)
// 			throw error
// 		}
// 		console.log('npm install', stdout)
// 	})
// }