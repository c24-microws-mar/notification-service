'use strict';

const sendmail = require('sendmail')();

function registerRoutes(app) {
  app.post('/order-notification', (req, res, next) => {

    triggerSendmail({
      from: 'c24_microserviceworkshop@hentschel.email',
      to: 'thomas.hentschel@check24.de',
      subject: 'test sendmail',
      content: 'Mail of test sendmail'
    }, function (isError) {
      if (isError) {
        res.status(500).send({
          success: false,
          message: 'an error occured while sending email notification'
        });
      } else {
        res.status(200).send({
          success: true
        });
      }
    });
  });
}

function triggerSendmail(options, callback) {
  sendmail(options, function(err, reply) {
    console.log('answer from sendmail: ', reply);
    if (err) {
      console.err('cannot send mail: ', err, options);
    }
    const isError = !!err;
    callback(isError);
  });
}

module.exports = {
  registerRoutes: registerRoutes
};
