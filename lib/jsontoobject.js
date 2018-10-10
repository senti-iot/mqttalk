/*
args: json
return: object
 */

const verifyJSON = require('../utils/verifyjson')

const jsonToObject = (json) => {
	// if (verifyJSON(json)) {
	// 	const obj = JSON.parse(json.toString())
	// 	return obj
	// } else return null
	return verifyJSON(json) ? JSON.parse(json.toString()) : null
}

// Expose jsonToObject module
module.exports = jsonToObject

// console.log(jsonToObject('{"text":"Hello World", "number": 10}'))