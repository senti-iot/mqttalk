// module1.js

exports.module1 = () => {
	return "MODULE 1"
}

module.exports = function tiny(string) {
	if (typeof string !== "string") throw new TypeError("Tiny wants a string!")
	return string.replace(/\s/g, "")
}

