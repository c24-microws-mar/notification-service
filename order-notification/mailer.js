'use strict';

const mailConfig = require('./mail-config');
const nodemailer = require('nodemailer');

function sendMailToCustomer(customer, subject, mailBody, callback) {

  // create reusable transporter object using the default SMTP transport
  var transporter = nodemailer.createTransport(`smtp://${mailConfig.user}:${mailConfig.password}@${mailConfig.server}`);

  // setup e-mail data with unicode symbols
  var mailOptions = {
      from: mailConfig.fromAddress, // sender address
      to: customer.email, // list of receivers
      bcc: mailConfig.companyEmail,
      subject: subject, // Subject line
      html: mailBody // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
        console.log('error sending mail to customer: ', error, mailOptions);
        callback(false);
        return;
      }
      console.log('Message sent: ' + info.response);
      callback(true);
  });
}

module.exports = {
  sendMailToCustomer: sendMailToCustomer
};
