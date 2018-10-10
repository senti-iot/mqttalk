/*
args: out: string
return: string/number
 */

const timestamp = (out) => {
	return Date.now()
}

// Expose timestamp module
module.exports = timestamp
