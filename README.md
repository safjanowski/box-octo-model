Box Octo Model
===============

Box octo model – add, remove, update state of elements inside box.

Examples
--------

```js
var bulp = {
	id: 'bulp_1',
	state: 'off'
};

var box = new Box();

box.addElement(bulp);
box.setState(bulp_1, 'on');

assert.equal(box.getElementById(bulp.id).state, 'on');
```

Instalation
-----------

* `npm install` – in application root folder.

Tests
-----

* `make test` – executes **Mocha** with flag `-w` for watching for changes.