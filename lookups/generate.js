const fs = require('fs');

var states = require("./states.json");

var keys = ["name", "usps", "fips", "ap", "chicago"];

var dictionary = {};

keys.forEach(key => {
	states.forEach(st => {
		// remove the space and periods just in the lookups, not in the output
		dictionary[st[key].replace(/\./g, "").replace(/ /g, "").toLowerCase()] = st;
	});
});

console.log(dictionary);

fs.writeFileSync("../dictionary.json", JSON.stringify(dictionary, null, 2));