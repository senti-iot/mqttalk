// exports.module1 = require('./lib/module1').module1
// exports.module2 = require('./lib/module2')
// exports.module3 = require('./lib/module3')
// exports.tiny = require('./lib/module1').tiny

// module.exports = { module1, module2, module3 }


// exports.module1 = () => {
// 	return "MODULE 1"
// }

// module.exports = function tiny(string) {
// 	if (typeof string !== "string") throw new TypeError("Tiny wants a string!")
// 	return string.replace(/\s/g, "")
// }

const tiny = require('./lib/tiny')
const module1 = require('./lib/module1')

module.exports = tiny, module1
