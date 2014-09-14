'use strict';

module.exports = mutatorName;

mutatorName.getter = getter;
mutatorName.setter = setter;
mutatorName.type = type;
mutatorName.getterFrom = getterFrom;
mutatorName.setterFrom = setterFrom;

function mutatorName( fnOrName ) {
	return !!type(fnOrName);
}

function getter( fnOrName ) {
	return type(fnOrName) === 'get';
}

function setter( fnOrName ) {
	return type(fnOrName) === 'set';
}

function type( fnOrName ) {
	if (typeof fnOrName === 'function')
		fnOrName = fnOrName.name;

	var threeFirst = fnOrName.substr(0, 3);

	if (
		fnOrName[3]
		&& fnOrName[3] === fnOrName[3].toUpperCase()
		&& (threeFirst === 'get' || threeFirst === 'set')
	)
		return threeFirst;
}

function getterFrom( name ) {
	return 'get' + name.substr(0, 1).toUpperCase() + name.substr(1);
}

function setterFrom( name ) {
	return 'set' + name.substr(0, 1).toUpperCase() + name.substr(1);
}
