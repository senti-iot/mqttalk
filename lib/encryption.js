// require('dotenv').config({ path: '../.env' })
require('dotenv').load()
var SimpleCrypto = require("simple-crypto-js").default

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY
var simpleCrypto = new SimpleCrypto(ENCRYPTION_KEY)

/*
args: payload
return: encrypted/decrypted payload
 */

const encrypt = (payload) => {
	let chiperText = simpleCrypto.encrypt(payload)
	return chiperText
}

const decrypt = (payload) => {
	let chiperText = simpleCrypto.decrypt(payload)
	return chiperText
}

// Expose encryption module
module.exports = { decrypt, encrypt }

// https://www.npmjs.com/package/simple-crypto-js