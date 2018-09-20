const transmute = require('./index');

console.log("USPS and FIPS codes for Massachusetts:");

var Mass = transmute("Massachusetts");

console.log(Mass.usps, Mass.fips);

console.log("Name and AP style for FIPS code 54:");

var fips54 = transmute("54");

console.log(fips54.name, fips54.ap);

console.log("Chicago Manual of State for poorly formed lookup \"US. Virgin Islands\":");

var USVI = transmute("US. Virgin Islands");

console.log(USVI.chicago);
