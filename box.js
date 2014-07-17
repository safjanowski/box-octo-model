/* global module */

var box = function() {
  'use strict';

  function Box() {
    this.elements = [];
  }

  Box.prototype.addElement = function(element) {
    var that = this;

    if (elementAlreadyExists(element)) {
      updateElement(element);
    } else {
      addElement(element);
    }

    function elementAlreadyExists(searchedElement) {
      var exists = false;
      that.eachElement(function(element) {
        if (searchedElement.id === element.id) {
          exists = true;
          return false;
        }
      });
      return exists;
    }

    function updateElement(element) {
      that.setState(element.id, element.state);
    }

    function addElement(element) {
      that.elements.push(element);
    }
  };

  Box.prototype.remove = function(element) {
    var elementIndex = this.indexOf(element);

    if (elementIndex === -1) {
      return false;
    } else {
      this.elements.splice(elementIndex, 1);
    }

  };

  Box.prototype.eachElement = function(callback) {
    for (var i = 0, n = this.elements.length; i < n; i++) {
      if (callback.call(this, this.elements[i], i) === false) {
        break;
      }
    }
  };

  Box.prototype.indexOf = function(element) {
    return this.indexOfId(element.id);
  };

  Box.prototype.indexOfId = function(id) {
    var index = -1;
    this.eachElement(function(currentElement, i) {
      if (currentElement.id === id) {
        index = i;
        return false;
      }
    });
    return index;
  };

  Box.prototype.contains = function(element) {
    return this.indexOf(element) !== -1;
  };

  Box.prototype.setState = function(id, state) {
    this.getElementById(id).state = state;
  };

  Box.prototype.getElementById = function(id) {
    return this.elements[this.indexOfId(id)] || null;
  };

  Box.prototype.listElements = function() {
    return this.elements;
  };

  return Box;
};

module.exports = box;