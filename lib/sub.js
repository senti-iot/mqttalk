/*
args: A
return: B
 */

const sub = (client, topic, options, callback) => {
	if (typeof options === "undefined") {
		client.subscribe(topic, { qos: 1 }, callback) // default options
	} else {
		client.subscribe(topic, options, callback)
	}
}

// Expose sub module
module.exports = sub


/*
Available options:

qos 0/1/2      	the QoS of the message

*/