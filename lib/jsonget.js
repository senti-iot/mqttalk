// jsonGet.js

const jsonGet = () => {
	return "jsonGet"
}

// Expose jsonGet module
module.exports = jsonGet



client.on('message', function (topic, payload) {
	const obj = JSON.parse(payload.toString()) // payload is a buffer
})

/*

let a = JSON.stringify({ a: 5, b: 'Text' })
console.log(a)

{"a":5,"b":"Text"}

const obj = JSON.parse(a.toString())
console.log(obj)

{ a: 5, b: 'Text' }

*/