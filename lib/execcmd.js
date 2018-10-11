/*

args: cmd: string, args: string
return: 

*/
const execFile = require('child_process').execFile

const execCmd = async (cmd, args) => {
	var child = execFile(cmd, [args], (error, stdout, stderr) => {
		if (error) {
			console.error('stderr', stderr)
			throw error
		}
		console.log(stdout)
		res = stdout
		return res
	})
}

// Expose execCmd module
module.exports = execCmd

// var child = execFile(cmd, [args], (error, stdout, stderr) => {
// 	if (error) {
// 		console.error('stderr', stderr)
// 		throw error
// 	})

