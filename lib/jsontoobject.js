/*
args: json
return: object
 */

const verifyJSON = require('../utils/verifyjson')

const jsonToObject = (json) => {
	return verifyJSON(json) ? JSON.parse(json.toString()) : null
}

// Expose jsonToObject module
module.exports = jsonToObject

// console.log(jsonToObject('{"text":"Hello World", "number": 10}'))