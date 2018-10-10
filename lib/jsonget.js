// jsonGet.js

const verifyJSON = require('../utils/verifyjson')

const jsonGet = (json) => {
	const verified = verifyJSON(json)
	const obj = JSON.parse(verified.toString()) // payload is a buffer
	return obj
}

// Expose jsonGet module
module.exports = jsonGet


/*

const obj = JSON.parse(a.toString())
console.log(obj)

{ a: 5, b: 'Text' }

*/
