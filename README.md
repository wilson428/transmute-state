# Transmute State Names

This is a simple repo that takes any common name or code for a state or territory and returns an object with all common identifiers. No dependencies.

## Properties returned

	+ Official name (`name`)
	+ Two-letter abbreviation (`abbr`)
	+ Two-digit FIPS code (`fips`)
	+ Associated Press style (`ap`)
	+ Chicago Manual of Style style (`chicago`)
	+ Boolean flag on whether this is a state (`is_state`)

## Coverage

The 50 states, Washington, D.C., American Samoa, Guam, Northern Mariana Islands, Puerto Rico, U.S. Minor Outlying Islands and U.S. Virgin Islands

## Installation

	npm install transmute-states --save

## Usage

	const transmute = require('transmute-states');

	const MA = transmute("MA");
	console.log(MA.name, MA.fips, MA.ap);
	// Massachusetts 25 Mass.


## Sources

+ [American National Standards Institute (ANSI) Codes for States, the District of Columbia, Puerto Rico, and the Insular Areas of the United States](https://www.census.gov/geo/reference/ansi_statetables.html)
+ [United States Postal Service: State Abbreviations](http://about.usps.com/who-we-are/postal-history/state-abbreviations.htm)
+ [State Abbreviations: Use Traditional or Go Postal?](https://apvschicago.com/2011/05/state-abbreviations-use-traditional-or.html)

## License

MIT