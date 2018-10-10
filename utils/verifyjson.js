// verifyJSON.js

// Catch invlaid JSON

const verifyJSON = (json) => {
	let parsed
	try {
		parsed = JSON.parse(json)
	} catch (err) {
		return false
	}
	return true
}

// Expose verifyJSON module
module.exports = verifyJSON

// console.log(verifyJSON('{"text":"Hello World", "number": 10}'))