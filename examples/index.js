var mqttalk = require('../mqttalk')
// var module = require('mqttalk/lib/module')

const jsonToObject = mqttalk.jsonToObject
const jsonFromObject = mqttalk.jsonFromObject

const payload = {
	id: 1,
	status: 'online',
	timestamp: Date.now()
}

let json = jsonFromObject(payload)
let obj = jsonToObject(json)

console.log(json)
console.log(obj)

