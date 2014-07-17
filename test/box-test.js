/* global require, describe, beforeEach, it */

(function() {
  'use strict';

  var assert = require('assert'),
    Box = require('../box')();

  describe('box', function() {

    var box;

    beforeEach(function() {
      box = new Box();
      assert.equal(box.listElements().length, 0);
    });

    it('.listElements() – box initialy has 0 products inside', function() {
      assert.equal(box.listElements().length, 0);
    });

    it('.addElement() – adds product to box', function() {
      var productA = {
          id: 'A',
          state: 'off'
        },
        productB = {
          id: 'B',
          state: 'off'
        };

      box.addElement(productA);
      box.addElement(productB);

      assert.equal(box.listElements().length, 2);
    });

    it('.addElement() – if product exists – update it', function() {
      var productA = {
          id: 'A',
          state: 'off'
        },
        productB = {
          id: 'B',
          state: 'off'
        },
        productC = {
          id: 'A',
          state: 'on'
        };

      box.addElement(productA);
      box.addElement(productB);

      assert.equal(box.listElements().length, 2);
      assert.deepEqual(box.listElements(), [{
        id: 'A',
        state: 'off'
      }, {
        id: 'B',
        state: 'off'
      }]);

      box.addElement(productC);
      assert.equal(box.listElements().length, 2);
      assert.deepEqual(box.listElements(), [{
        id: 'A',
        state: 'on'
      }, {
        id: 'B',
        state: 'off'
      }]);
    });

    it('.remove() – removes added products', function() {
      var productA = {
        id: 'A',
        state: 'off'
      };

      box.addElement(productA);
      assert.equal(box.listElements().length, 1);

      box.remove(productA);
      assert.equal(box.listElements().length, 0);
    });

    it('.setState() – removes added products', function() {
      var elementId = 'A';

      var productA = {
        id: elementId,
        state: 'off'
      };

      box.addElement(productA);
      box.setState(elementId, 'on');

      assert.equal(box.getElementById(elementId).state, 'on');

    });
  });

}());