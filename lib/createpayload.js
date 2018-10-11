/*
args: message, topic
return: json
 */

const uuid = require('uuid/v4')
const timestamp = require('./timestamp')
const jsonFromObject = require('./jsonfromobject')

const payloadTemplate = {
	messageId: uuid(),
	timestamp: timestamp()
}

const createPayload = (message, topic) => {
	// const payload = Object.assign({ message: message, topic: topic }, payloadTemplate)
	const payload = {
		message: message,
		topic: topic,
		messageId: uuid(),
		timestamp: timestamp()
	}
	return jsonFromObject(payload)
}

// Expose createPayload module
module.exports = createPayload
