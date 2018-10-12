/*
args: A
return: B
 */

const sub = (client, topic, options) => {
	client.subscribe(topic, options, (error) => {
		if (error) {
		}
	})
}

// Expose sub module
module.exports = sub



/*
Available options:

qos 0/1/2      	the QoS of the message

*/