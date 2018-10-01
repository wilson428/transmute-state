# Transmute State Names

By [Chris Wilson](http://github.com/wilson428)

**v.0.0.2**

This is a simple repo that takes any common name or code for a state or territory and returns an object with all common identifiers. No dependencies.

## Properties returned

+ Official name (`name`)
+ Two-letter abbreviation (`usps`)
+ Two-digit FIPS code (`fips`)
+ Associated Press style (`ap`)
+ Chicago Manual of Style style (`chicago`)
+ Boolean flag on whether this is a state (`is_state`)

## Coverage

The 50 states, Washington, D.C., American Samoa, Guam, Northern Mariana Islands, Puerto Rico, U.S. Minor Outlying Islands and U.S. Virgin Islands

## Installation

	npm install transmute-state --save

## Usage

	const transmute = require('transmute-state');

	const DC = transmute("DC");
	console.log(DC.name, DC.fips, DC.ap, DC.is_state);
	// District of Columbia 11 D.C. false

## Lookups

All lookups are santizied to keys without punctuation or capitalization, so "Conn." and "conn" with both return codes for Connecticut. **There is not currently any fuzzy matching for common misspellings or identifiers like 'Washington, D.C.' that don't appear in the results.**

## Sources

+ [American National Standards Institute (ANSI) Codes for States, the District of Columbia, Puerto Rico, and the Insular Areas of the United States](https://www.census.gov/geo/reference/ansi_statetables.html)
+ [United States Postal Service: State Abbreviations](http://about.usps.com/who-we-are/postal-history/state-abbreviations.htm)
+ [State Abbreviations: Use Traditional or Go Postal?](https://apvschicago.com/2011/05/state-abbreviations-use-traditional-or.html)

## License

[MIT](LICENSE.md)

## To Do

+ Fuzzy matching