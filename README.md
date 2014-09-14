# Mutator name

Determines whether a string has a `set` or `get` prefix

## Installation

```
npm install mutator-name
```

## Usage

```js
var mutator = require('mutator-name');

mutator('getName');				// true
mutator('setAge');				// true
mutator('setupConnection');		// false
mutator('get');					// false
mutator('getting');				// false

mutator.type('getName');		// 'get'
mutator.type('setName');		// 'set'
mutator.type('none');			// falsey

mutator.getter('getName');		// true
mutator.setter('setName');		// true

mutator.getterFrom('name');		// 'getName'
mutator.setterFrom('name');		// 'setName'
```

## License

[MIT](http://opensource.org/licenses/MIT) © Thomas Jensen @ [src.agency](http://src.agency)
