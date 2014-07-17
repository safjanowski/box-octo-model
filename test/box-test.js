/* global require, describe, beforeEach, it */

(function() {
  'use strict';

  var assert = require('assert'),
    Box = require('../box')();

  describe('Box container with bulps', function() {

    var box;

    beforeEach(function() {
      box = new Box();
      assert.equal(box.listElements().length, 0);
    });

    it('.listElements() – box initialy has 0 elements inside', function() {
      assert.equal(box.listElements().length, 0);
    });

    it('.addElement() – adds product to box', function() {
      var elementA = {
          id: 'A',
          state: 'off'
        },
        elementB = {
          id: 'B',
          state: 'off'
        };

      box.addElement(elementA);
      box.addElement(elementB);

      assert.equal(box.listElements().length, 2);
    });

    it('.addElement() – if product exists – update it', function() {
      var elementA = {
          id: 'A',
          state: 'off'
        },
        elementB = {
          id: 'B',
          state: 'off'
        },
        elementC = {
          id: 'A',
          state: 'on'
        };

      box.addElement(elementA);
      box.addElement(elementB);

      assert.equal(box.listElements().length, 2);
      assert.deepEqual(box.listElements(), [{
        id: 'A',
        state: 'off'
      }, {
        id: 'B',
        state: 'off'
      }]);

      box.addElement(elementC);
      assert.equal(box.listElements().length, 2);
      assert.deepEqual(box.listElements(), [{
        id: 'A',
        state: 'on'
      }, {
        id: 'B',
        state: 'off'
      }]);
    });

    it('.remove() – removes added elements', function() {
      var elementA = {
        id: 'A',
        state: 'off'
      };

      box.addElement(elementA);
      assert.equal(box.listElements().length, 1);

      box.remove(elementA);
      assert.equal(box.listElements().length, 0);
    });

    it('.setState() – removes added elements', function() {
      var elementId = 'A';

      var elementA = {
        id: elementId,
        state: 'off'
      };

      box.addElement(elementA);
      box.setState(elementId, 'on');

      assert.equal(box.getElementById(elementId).state, 'on');
    });
  });

}());