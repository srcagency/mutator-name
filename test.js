'use strict';

var test = require('tap').test;
var m = require('./');

test(function( t ) {
	t.equal(m.type('getName'), 'get');
	t.equal(m.type('setName'), 'set');
	t.notOk(m.type('test'));

	t.equal(m.getter('getName'), true);
	t.equal(m.getter('setName'), false);
	t.equal(m.getter('gettingStuff'), false);
	t.equal(m.getter('other'), false);

	t.equal(m.setter('setName'), true);
	t.equal(m.setter('getName'), false);
	t.equal(m.setter('settingStuff'), false);
	t.equal(m.setter('other'), false);

	t.equal(m('getName'), true);
	t.equal(m('setAge'), true);
	t.equal(m('setupProp'), false);
	t.equal(m('gettingProp'), false);
	t.equal(m('get'), false);
	t.equal(m('set'), false);
	t.equal(m('getting'), false);

	t.equal(m.getterFrom('name'), 'getName');
	t.equal(m.setterFrom('name'), 'setName');

	t.end();
});
