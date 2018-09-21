var dictionary = require('./dictionary.json');

module.exports = function(input) {
	var key = input.replace(/\./g, "").replace(/\s/g, "").toLowerCase();
	var state = dictionary[key];
	if (!state) {
		console.log("Error matching '" + input + "' to a state");
		return null;
	}
	return state;
}