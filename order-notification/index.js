'use strict';

const nodemailer = require('nodemailer');
const mailConfig = require('./mail-config');

function registerRoutes(app) {
  app.post('/order-notification', (req, res, next) => {

    customer = {
      email: 'pretty@beautiful.de'
    }

    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport(`smtp://${mailConfig.user}:${mailConfig.password}@${mailConfig.server}`);

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: mailConfig.fromAdrdess, // sender address
        to: cusomer.email, // list of receivers
        subject: 'Hello', // Subject line
        text: 'Hello world', // plaintext body
        html: '<b>Hello world</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
          console.log(error);
          res.status(500).send({
            success: false,
            message: 'an error occured while sending email notification'
          });
          return;
        }
        console.log('Message sent: ' + info.response);
        res.status(201).send({
          success: true
        });
    });

  });
}


module.exports = {
  registerRoutes: registerRoutes
};
