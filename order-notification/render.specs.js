'use strict';

const expect = require('expect.js');
const render = require('./render');
const fs = require('fs');

describe('When I ask to render shop new order', function () {
  var result;
  beforeEach(function () {
    result = render.render(
      'shop-new-order',
      'Lucy Cechtelar',
      '426 Jordy Lodge\nCartwrightshire, SC 88120-6700',
      'The Offspring - The Offspring 15.00\nSmash - The Offspring 20.00'
    );
  });

  it('should return the expected text', function () {
    expect(result.body).to.eql(fs.readFileSync('templates/shop-new-order.expected.txt', 'utf8'));
    expect(result.subject).to.eql('New order');
  });
});

describe('When I ask to render user new order', function () {
  var result;
  beforeEach(function () {
    result = render.render(
      'user-new-order',
      'Lucy Cechtelar',
      '426 Jordy Lodge\nCartwrightshire, SC 88120-6700',
      'The Offspring - The Offspring 15.00\nSmash - The Offspring 20.00'
    );
  });

  it('should return the expected text', function () {
    expect(result.body).to.eql(fs.readFileSync('templates/user-new-order.expected.txt', 'utf8'));
    expect(result.subject).to.eql('Your order');
  });
});
