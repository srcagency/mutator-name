# getter-or-setter-name

Determines whether a string has a `set` or `get` prefix

## Installation

	$ npm install getter-or-setter-name

## Usage

	var getterOrSetterName = require('getter-or-setter-name');

	getterOrSetterName('getName');				// true
	getterOrSetterName('setAge');				// true
	getterOrSetterName('setupConnection');		// false
	getterOrSetterName('get');					// false
	getterOrSetterName('getting');				// false

	getterOrSetterName.type('getName', 'get');	// 'get'

	getterOrSetterName.getter('getName');		// true
	getterOrSetterName.setter('setName');		// true

## License

[MIT](http://opensource.org/licenses/MIT) © [Thomas Jensen](http://tjconcept.dk)