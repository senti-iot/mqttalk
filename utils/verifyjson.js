// verifyJSON.js

// Catch invlaid JSON

const verifyJSON = (json) => {
	let parsed
	try {
		parsed = JSON.parse(json)
	} catch (err) {
		return err
	}
	return parsed
}

// Expose verifyJSON module
module.exports = verifyJSON

