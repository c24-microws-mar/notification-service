'use strict';

const mailer = require('./mailer');
const render = require('./render');
const dataCollector = require('./dataCollector');

function registerRoutes(app) {
  app.post('/order-notification', createOrderNotification);
}

function createOrderNotification(req, res, next) {
  const person = req.body.person;
  const customer = {
    email: person.email,
    name: person.name,
    address: person.address
  }

  dataCollector.cartData(req.body.cart_id).catch(function (error) {
    console.log(error);
    return {};
  }).then(function (cartData) {
    var items = JSON.stringify(cartData);
    var mail = render.render('user-new-order', customer.name, customer.address, items);
    mail.body = mail.body.replace(new RegExp('\n', 'g'), '<br/>\n');
    mailer.sendMailToCustomer(customer, mail.subject, mail.body, (success) => {
      if (success) {
        res.status(201).send({
          success: true
        });
      } else {
        res.status(500).send({
          success: false,
          message: 'An error occured while sending a mail'
        });
      }
    });
  });
}

module.exports = {
  registerRoutes: registerRoutes
};
