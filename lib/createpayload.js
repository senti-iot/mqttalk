/*
args: message, topic
return: json
 */

const uuid = require('uuid/v4')
const timestamp = require('./timestamp')
const jsonFromObject = require('./jsonfromobject')

const payloadTemplate = {
	message: '',
	messageId: uuid(),
	topic: '',
	timestamp: timestamp()
}

const createPayload = (message, topic) => {
	const payload = Object.assign({ message: message, topic: topic })
	return jsonFromObject(payload)
}

// Expose createPayload module
module.exports = createPayload
