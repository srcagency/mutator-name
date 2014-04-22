'use strict';

var getterOrSetterName = module.exports = function( fnOrName ) {
	return !!getterOrSetterName.type(fnOrName);
};

getterOrSetterName.type = function( fnOrName ) {
	if (typeof fnOrName === 'function')
		fnOrName = fnOrName.name;

	var threeFirst = fnOrName.substr(0, 3);

	return fnOrName[3] && fnOrName[3] === fnOrName[3].toUpperCase() && (threeFirst === 'get' || threeFirst === 'set')
		? threeFirst
		: false
	;
};

getterOrSetterName.getter = function( fnOrName ) {
	return getterOrSetterName.type(fnOrName) === 'get';
};

getterOrSetterName.setter = function( fnOrName ) {
	return getterOrSetterName.type(fnOrName) === 'set';
};