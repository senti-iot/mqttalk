/*
args: A
return: B
 */

const pub = () => {
	return "pub"
}

// Expose pub module
module.exports = pub


// client.publish(status, clientId + ' offline ' + dateTimeLog(), { retain: false })
// console.log(createPayload('This is my message', 'senti/sensor/sentiwii/8020'))