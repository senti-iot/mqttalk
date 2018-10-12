/*
args: client (mqtt client), topic:string, message:string, options:object, doEncrypt:bool, callback())
return: undefined
 */

const createPayload = require('./createpayload')
const encrypt = require('./encryption').encrypt

const pub = (client, topic, message, options, doEncrypt, callback) => {
	if (typeof options === "undefined") {
		if (doEncrypt) {			
			client.publish(topic, createPayload(encrypt(message), topic), { retain: false, qos: 1 }, callback) // encrypt + default options
		} else {
			client.publish(topic, createPayload(message, topic), { retain: false, qos: 1 }, callback) // default options
		}
	} else {
		if (doEncrypt) {
			client.publish(topic, createPayload(encrypt(message), topic), options, callback) // encrypt + options
		} else {
			client.publish(topic, createPayload(message, topic), options, callback) // options
		}
	}
}

// Expose pub module
module.exports = pub

/*
Available options:

  qos 0/1/2        	the QoS of the message
  retain           	send a retained message

*/

