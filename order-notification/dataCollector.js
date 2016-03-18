'use strict';

const agent = require('multiagent');
const config = require('../config');

var cartData = function(cartId) {
  const cart = agent.client({
    discovery: 'consul',
    discoveryServers: config.discovery_servers,
    serviceName: 'cart-service'
  });
  console.log(cartId);
  return cart.get('/carts/' + cartId).then(function(res) {
    return res.body;
  }).catch(function (error) {
    console.log('err: ', error);
  })
};

module.exports = {
  'cartData': cartData
};
