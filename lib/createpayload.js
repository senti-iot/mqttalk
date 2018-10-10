/*
args: message, topic
return: json
 */

const uuid = require('uuid/v4')
const timestamp = require('./timestamp')
const jsonFromObject = require('./jsonfromobject')

const createPayload = (message, topic) => {
	const payloadTemplate = {
		message: message,
		messageId: uuid(),
		topic: topic,
		timestamp: timestamp()
	}
	return jsonFromObject(payloadTemplate)
}

// Expose createPayload module
module.exports = createPayload
