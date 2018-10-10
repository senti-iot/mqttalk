/*
jsonFromObject.js

args: object
return: json

 */

const isObj = require('../utils/isobject')

const jsonFromObject = (obj) => {
	return isObj(obj) ? JSON.stringify(obj) : undefined
}

// Expose jsonFromObject module
module.exports = jsonFromObject

// console.log(jsonFromObject('{ text : "Hello World", number: 10 }'))