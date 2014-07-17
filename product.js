/* global module */

var element = function() {
	'use strict';

	function Element(id, state) {
		this.id = id;
		this.state = state;
	}

	Element.prototype.setState = function(state) {
		this.state = state;
	};

	return Element;
};

module.exports = element;