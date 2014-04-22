'use strict';

var getterOrSetterName = require('./');
var test = require('tap').test;

test(function( t ) {
	t.equal(getterOrSetterName.type('getName'), 'get');
	t.equal(getterOrSetterName.type('setName'), 'set');
	t.equal(getterOrSetterName.type('test'), false);


	t.equal(getterOrSetterName.getter('getName'), true);
	t.equal(getterOrSetterName.getter('setName'), false);

	t.equal(getterOrSetterName.setter('setName'), true);
	t.equal(getterOrSetterName.setter('getName'), false);

	t.equal(getterOrSetterName('getName'), true);
	t.equal(getterOrSetterName('setAge'), true);
	t.equal(getterOrSetterName('setupConnection'), false);
	t.equal(getterOrSetterName('get'), false);
	t.equal(getterOrSetterName('getting'), false);

	t.end();
});