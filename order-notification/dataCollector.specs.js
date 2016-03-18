'use strict';

const expect = require('expect.js');
const dataCollector = require('./dataCollector');

describe('When I ask for cart data', function () {
  it('should return the cart', function (done) {
    dataCollector.cartData('56ec2307696afe01007bad3f').then(function(result) {
      expect(result).to.eql('56ec2307696afe01007bad3f');
      done();
    });
  });
});
