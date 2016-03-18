'use strict';

const mailer = require('./mailer');

function registerRoutes(app) {
  app.post('/order-notification', createOrderNotification);
}

function createOrderNotification(req, res, next) {
  const customer = {
    email: 'pretty@beautiful.de'
  }
  const subject = 'Your Order';
  const mailBody = 'Thank you for your order';

  mailer.sendMailToCustomer(customer, subject, mailBody, (success) => {
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
}

module.exports = {
  registerRoutes: registerRoutes
};
