/*
args: client (mqtt client), topic:string, payload:string, options:object/string, encrypt:bool)
return: undefined
 */

const createPayload = require('./createpayload')
const encrypt = require('./encryption').encrypt

const pub = (client, topic, message, options, doEncrypt) => {
	if (options === 'default') {
		if (doEncrypt) {			
			client.publish(topic, createPayload(encrypt(message), topic), { retain: false, qos: 1 }) // encrypt + default options
		} else {
			client.publish(topic, createPayload(message, topic), { retain: false, qos: 1 }) // default options
		}
	} else {
		if (doEncrypt) {
			client.publish(topic, createPayload(encrypt(message), topic), options) // encrypt + options
		} else {
			client.publish(topic, createPayload(message, topic), options) // options
		}
	}
}

// Expose pub module
module.exports = pub

/*
Available options:

  hostname		    the broker host
  port		        the broker port
  client-id		    the client id
  qos 0/1/2        	the QoS of the message
  topic		      	the message topic
  message			the message body
  retain           	send a retained message
  stdin            	read the message body from stdin
  multiline        	read lines from stdin as multiple messages
  username		    the username
  password		    the password
  protocol   		the protocol to use, 'mqtt', mqtts', 'ws' or 'wss'
  key PATH          path to the key file
  cert PATH         path to the cert file
  ca PATH           path to the ca certificate
  insecure          do not verify the server certificate
  will-topic     	the will topic
  will-payload 		the will message
  will-qos 0/1/2    the will qos
  will-retain		send a will retained message

*/
