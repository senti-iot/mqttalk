/*
jsonput.js

args: object
return: json

 */

const isObj = require('../utils/isobject')

const jsonPut = (obj) => {
	return isObj(obj) ? JSON.stringify(obj) : null
}

// Expose jsonPut module
module.exports = jsonPut

